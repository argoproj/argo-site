import * as classNames from 'classnames';
import Link from 'gatsby-link';
import * as path from 'path';
import * as React from 'react';

const { docs, normalizeDocPath } = require('../../../docs-config.js');

interface DocEntry {
    path: string;
    title: string;
    children?: DocEntry[];
}

interface DocInfo extends DocEntry {
    parent?: DocInfo;
}

interface DocsIndex { [docPathPath: string]: DocInfo; }

function indexDocs(docsConf: { [dirPath: string]: DocEntry[] }): DocsIndex {
    const index: DocsIndex = {};
    for (const dirPath of Object.keys(docsConf)) {
        for (const entry of docsConf[dirPath]) {
            const toProcess = [{...entry, parent: null as DocEntry, path: normalizeDocPath(path.join(dirPath, entry.path))}];
            while (toProcess.length > 0) {
                const next = toProcess.pop();
                index[next.path] = next;
                for (const child of (next.children || [])) {
                    toProcess.push({...child, parent: next, path: normalizeDocPath(path.join(dirPath, child.path))});
                }
            }
        }
    }
    return index;
}

const docsIndex = indexDocs(docs);

interface Props { pathContext: { docHtml: string, docPath: string }; }
interface State { entry: DocEntry & { parent: DocEntry }; }

require('./docs.scss');

function docLink(docPath: string) {
    return `/docs/${docPath}`;
}

export default class Docs extends React.Component<Props, State> {

    public render() {
        const docPath = normalizeDocPath(this.props.pathContext.docPath);

        const doc = docsIndex[docPath];
        const breadcrumbs: DocInfo[] = [];
        let selectedRoot = doc;
        while (selectedRoot.parent) {
            breadcrumbs.unshift(selectedRoot.parent);
            selectedRoot = selectedRoot.parent;
        }
        const allDocs = Object.keys(docsIndex).map((key) => docsIndex[key]);
        const roots = allDocs.filter((item) => !item.parent);
        const subDocs = allDocs.filter((item) => item.parent === doc);

        return (
            <div className='docs'>
                <div className='docs__top'>
                    <div className={classNames('main__nav', 'main__nav--hide-sm')}>
                        <div className='main__container'>
                             {roots.map((item) => (
                                  <Link key={item.path} to={docLink(item.path)} className={classNames({active: item === selectedRoot})}>{item.title}</Link>
                             ))}
                        </div>
                    </div>
                </div>
                <div className='main__container'>
                    {breadcrumbs.length > 0 && (
                        <div className='docs__breadcrumbs'>
                            {breadcrumbs.map((item) => (
                                <span key={item.path}>
                                    <Link to={docLink(item.path)}>{item.title}</Link>
                                    <span className='docs__breadcrumbs-separator'>/</span>
                                </span>
                            ))}
                            <span>{doc.title}</span>
                        </div>
                    )}
                    <div className='docs__content' dangerouslySetInnerHTML={{__html: this.props.pathContext.docHtml}}/>
                    {subDocs.length > 0 && (
                        <div className='main__container'>
                            ${subDocs.map((item) => (
                                <Link key={item.path} to={docLink(item.path)} className='docs__nav-button'>
                                    {item.title}
                                    <div className='docs__nav-button__ico'>
                                        <i className='fa fa-angle-right' />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

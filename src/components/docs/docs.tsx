import * as classNames from 'classnames';
import Link from 'gatsby-link';
import { push } from 'gatsby-link';
import * as React from 'react';

import { DocInfo, services } from '../../services';
import { Markdown } from '../markdown/markdown';
import { DocsFinder } from './docs-finder';

require('./docs.scss');

function docLink(docPath: string) {
    return `/docs/${docPath}.html`;
}

function getSearchSummary(searchText: string, docText: string) {
    const regexp = new RegExp(`(${searchText})`, 'gi');
    const firstIndex = docText.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase());
    docText = docText.substring(Math.max(firstIndex - 50, 0));
    return docText.replace(regexp, (_, text) => `<span class="docs__highlight">${text}</span>`);
}

export const Docs = (props: { docHtml: string; docPath: string; proj: string; searchText: string; }) => {

    const doc = services.docs.byPath(props.docPath);

    const breadcrumbs: DocInfo[] = [];
    let selectedRoot = doc;
    while (selectedRoot.parent) {
        breadcrumbs.unshift(selectedRoot.parent);
        selectedRoot = selectedRoot.parent;
    }
    const allDocs = services.docs.all(props.proj);
    const roots = services.docs.roots(props.proj);
    const subDocs = allDocs.filter((item) => item.parent === doc);

    return (
        <div className='docs'>
            <div className='docs__top'>
                <div className='main__container'>
                    <div className='docs__search-box'>
                        <input value={props.searchText || ''} className='docs__search-input' onChange={(e) => push({ search: `?search=${e.target.value}` })}/>
                        <button className='docs__search-button'>
                            <i className='fa fa-search'/>
                        </button>
                    </div>
                </div>
                {!props.searchText && (
                    <div className='main__nav main__nav--hide-sm'>
                        <div className='main__container'>
                            {roots.map((item) => (
                                <Link key={item.path} to={docLink(item.path)} className={classNames({active: item === selectedRoot})}>{item.title}</Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className='main__container'>
                {props.searchText && (
                    <DocsFinder searchText={props.searchText}>
                    {(docs) => (
                    <div className='docs__search-results'>
                        {docs.length > 0 && docs.map((item) => (
                            <div className='docs__search-result' key={item.path}>
                                <Link to={docLink(item.path)}>{item.title}</Link>
                                <div className='docs__search-summary' dangerouslySetInnerHTML={{__html: getSearchSummary(props.searchText, item.body)}}/>
                                {item.path}
                            </div>
                        )) || <p style={{textAlign: 'center'}} className='docs__search-summary'>No documents found</p>}
                    </div>
                    )}
                    </DocsFinder>
                )}
                {!props.searchText && breadcrumbs.length > 0 && (
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
                {!props.searchText && <Markdown markdownHtml={props.docHtml} />}
                {!props.searchText && subDocs.length > 0 && (
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
};

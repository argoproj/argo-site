import * as classNames from 'classnames';
import Link from 'gatsby-link';
import * as React from 'react';

import { DocInfo, services } from '../../services';

require('./docs.scss');

function docLink(docPath: string) {
    return `/docs/${docPath}.html`;
}

export const Docs = (props: { docHtml: string; docPath: string; proj: string; }) => {

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
                <div className='docs__left-nav main__nav'>
                    ${services.docs.projs().map((proj) => (
                        <Link className={classNames({active: props.proj === proj})} key={proj} to={docLink(services.docs.defaultDoc(proj))}>
                            {proj}
                        </Link>
                    ))}
                </div>
                <div className='main__nav'>
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
                <div className='docs__content' dangerouslySetInnerHTML={{__html: props.docHtml}}/>
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
};

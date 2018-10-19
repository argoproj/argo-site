import * as React from 'react';
import { Helmet } from 'react-helmet';

import { services } from '../services';

import { Docs } from './docs/docs';
import { Main } from './main/main';

const querystring = require('querystring');

export default (props: { location: Location; pathContext: { docHtml: string, docPath: string; proj: string; }; }) => {
    const projInfo = services.docs.projInfo(props.pathContext.proj);
    let searchQuery = props.location.search || '';
    if (searchQuery.startsWith('?')) {
        searchQuery = searchQuery.substring(1);
    }
    const searchText = querystring.parse(searchQuery).search;

    return (
        <Main>
            <Helmet>
                <title>{projInfo.title} | {props.pathContext.proj}</title>
                <meta name='description' content={projInfo.description} />
            </Helmet>
            <Docs searchText={searchText} {...props.pathContext} />
        </Main>
    );
};

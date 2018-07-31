import * as React from 'react';
import { Helmet } from 'react-helmet';

import { services } from '../services';

import { Docs } from './docs/docs';
import { Main } from './main/main';

export default (props: { pathContext: { docHtml: string, docPath: string; proj: string; }; }) => {
    const projInfo = services.docs.projInfo(props.pathContext.proj);
    return (
        <Main>
            <Helmet>
                <title>{projInfo.title} | {props.pathContext.proj}</title>
                <meta name='description' content={projInfo.description} />
            </Helmet>
            <Docs {...props.pathContext} />
        </Main>
    );
};

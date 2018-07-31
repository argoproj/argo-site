import * as React from 'react';

import { Docs } from './docs/docs';
import { Main } from './main/main';

export default (props: { pathContext: { docHtml: string, docPath: string; proj: string; }; }) => {
    return (
        <Main>
            <Docs {...props.pathContext} />
        </Main>
    );
};

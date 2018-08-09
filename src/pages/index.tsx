import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Home, Main } from '../components';

export default () => (
    <Main transparentHeader={true}>
        <Helmet>
            <title>Get stuff done with Kubernetes | Argo</title>
            <meta name='description' content='Kubernetes native workflows, deployments, CI, events' />
        </Helmet>
        <Home />
    </Main>
);

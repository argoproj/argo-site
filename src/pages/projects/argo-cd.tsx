import * as React from 'react';

import { Main, Project } from '../../components';

export default ({ data }: {data: any}) => {
    return (
        <Main>
            <Project proj='argo-cd' animationType='3d-particles' markdownHtml='
<h1 id="argo-cd-declarative-continuous-delivery-for-kubernetes">Argo CD - Declarative Continuous Delivery for Kubernetes</h1>
<h2 id="what-is-argo-cd-">What is Argo CD?</h2>
<p>Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.</p>
<p><img src="https://argoproj.github.io/argo-cd/assets/argocd-ui.gif" alt="Argo CD UI"></p>
<h2 id="why-argo-cd-">Why Argo CD?</h2>
<p>Application definitions, configurations, and environments should be declarative and version controlled.
Application deployment and lifecycle management should be automated, auditable, and easy to understand.</p>
<h2 id="documentation">Documentation</h2>
<p>To learn more about Argo CD <a href="hhttps://github.com/argoproj/argo-cd/">go to the complete documentation</a>.</p>
'
              docsLink='https://github.com/argoproj/argo-cd/'/>
        </Main>
    );
};


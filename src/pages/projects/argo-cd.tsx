import * as React from 'react';

import { Main, Project } from '../../components';

export default () => {
    return (
        <Main>
            <Project noReplace={true} proj='argo-cd' animationType='3d-particles' markdownHtml='
<a class="github-button" href="https://github.com/argoproj/argo-cd" data-icon="octicon-star" data-show-count="true" aria-label="Star argoproj/argo-cd on GitHub">Star</a>
<a class="github-button" href="https://github.com/argoproj/argo-cd/fork" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork argoproj/argo-cd on GitHub">Fork</a>
<h1>Argo CD - Declarative Continuous Delivery for Kubernetes</h1>
<h2>What is Argo CD?</h2>
<p>Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.</p>
<p><img src="https://argoproj.github.io/argo-cd/assets/argocd-ui.gif" alt="Argo CD UI"></p>
<h2>Why Argo CD?</h2>
<p>Application definitions, configurations, and environments should be declarative and version controlled.
Application deployment and lifecycle management should be automated, auditable, and easy to understand.</p>
<h2 id="documentation">Documentation</h2>
<p>To learn more about Argo CD <a href="https://argo-cd.readthedocs.io/">go to the complete documentation</a>.</p>
'
              docsLink='https://argo-cd.readthedocs.io/'/>
        </Main>
    );
};

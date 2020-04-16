import * as React from 'react';

import { Main, Project } from '../../components';

export default () => {
    return (
        <Main>
            <Project noReplace={true} proj='argo' animationType='connections' markdownHtml='
<a class="github-button" href="https://github.com/argoproj/argo" data-icon="octicon-star" data-show-count="true" aria-label="Star argoproj/argo on GitHub">Star</a>
<a class="github-button" href="https://github.com/argoproj/argo/fork" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork argoproj/argo on GitHub">Fork</a>
<h1>Container-native Workflow Engine</h1>
<h2>What is Argo Workflows?</h2>
<p>Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. Argo Workflows is implemented as a Kubernetes CRD.</p>
<ul>
<li>Define workflows where each step in the workflow is a container.</li>
<li>Model multi-step workflows as a sequence of tasks or capture the dependencies between tasks using a graph (DAG).</li>
<li>Easily run compute intensive jobs for machine learning or data processing in a fraction of the time using Argo Workflows on Kubernetes.</li>
<li>Run CI/CD pipelines natively on Kubernetes without configuring complex software development products.</li>
</ul>
<h2>Why Argo Workflows?</h2>
<ul>
<li>Designed from the ground up for containers without the overhead and limitations of legacy VM and server-based environments.</li>
<li>Cloud agnostic and can run on any Kubernetes cluster.</li>
<li>Easily orchestrate highly parallel jobs on Kubernetes.</li>
<li>Argo Workflows puts a cloud-scale supercomputer at your fingertips!</li>
</ul>
'
              docsLink='/docs/argo/readme.html'/>
        </Main>
    );
};

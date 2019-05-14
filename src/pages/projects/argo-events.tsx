import * as React from 'react';

import { Main, Project } from '../../components';

export default ({ data }: {data: any}) => {
    return (
        <Main>
            <Project proj='argo-events' noReplace={true} animationType='solar-system' markdownHtml='
<h1>Argo Events - The Event-Based Dependency Manager for Kubernetes</h1>
<p align="center">
  <img src="https://raw.githubusercontent.com/argoproj/argo-events/master/docs/assets/logo.png" alt="Logo">
</p>
<h2>What is Argo Events?</h2>
<p><strong>Argo Events</strong> is an event-based dependency manager for Kubernetes which helps you define multiple dependencies from a variety of event sources like
    webhook, s3, schedules, streams etc. and trigger Kubernetes objects after successful event dependencies resolution.</p>
<br>
<br>
<p align="center">
  <img src="https://github.com/argoproj/argo-events/blob/master/docs/assets/argo-events-top-level.png?raw=true" alt="High Level Overview">
</p>
<br>
<h2>Features</h2>
<ul>
<li>Manage dependencies from a variety of event sources.</li>
<li>Ability to customize business-level constraint logic for event dependencies resolution.</li>
<li>Manage everything from simple, linear, real-time dependencies to complex, multi-source, batch job dependencies.</li>
<li>Ability to extends framework to add your own event source listener.</li>
<li>Define arbitrary boolean logic to resolve event dependencies.</li>
<li>CloudEvents compliant.</li>
<li>Ability to manage event sources at runtime.</li>
</ul>
<h2>Documentation</h2>
<p>To learn more about Argo Events, <a href="https://argoproj.github.io/argo-events/">go to complete documentation</a></p>
'
              docsLink='https://argoproj.github.io/argo-events/'/>
        </Main>
    );
};

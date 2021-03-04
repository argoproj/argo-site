import * as React from 'react';

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
    <p>&nbsp;</p>
    <p>If you arrived here following a link to an Argo Workflows url, such as:</p>
    <p><code>https://argoproj.github.io/argo/examples/</code></p>
    <p>You will have to manually change it to:</p>
    <p><code>https://argoproj.github.io/argo-workflows/examples/</code></p>
    <p>&nbsp;</p>
    <p>Why? We recently updated our GitHub repository name from <code>argo</code> to <code>argo-workflows</code> and GitHub updated our <code>.io</code> path to match. We can't automatically redirect from <code>/argo/</code> to <code>/argo-workflows/</code> without also losing the nice redirection from <code>github.com/argoproj/argo</code> to <code>github.com/argoproj/argo-workflows</code>.</p>
  </div>
);

export default NotFoundPage;

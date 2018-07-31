const path = require('path');

const { rootPath, normalizeDocPath } = require('./docs-config');

exports.createPages = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    const res = await graphql(`{
        allMarkdownRemark {
            edges {
                node { fileAbsolutePath, html }
            }
        }
    }`);
    const componentPath = path.resolve('src/components/docs-page.tsx');
    res.data.allMarkdownRemark.edges.forEach(edge => {
        const proj = edge.node.fileAbsolutePath.substring(rootPath.length).split('/').filter((item) => !!item)[0];
        const docPath = normalizeDocPath(edge.node.fileAbsolutePath.substring(rootPath.length));
        if (docPath == 'argo/readme') {
            createPage({ path: 'docs', component: componentPath, context: { docHtml: edge.node.html, docPath: docPath + '.html', proj } });
        }
        createPage({
            path:  path.join('docs', docPath + '.html'),
            component: componentPath,
            context: { docHtml: edge.node.html, docPath, proj },
        });
    });
};


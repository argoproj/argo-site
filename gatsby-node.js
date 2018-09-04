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

        createPage({
            path: path.join('docs', docPath + '.html'),
            component: componentPath,
            context: { docHtml: edge.node.html, docPath, proj },
        });

        // create index page for each readme document
        if (docPath.endsWith('readme')) {
            createPage({
                path: path.join('docs', docPath.substring(0, docPath.length - 'readme'.length)),
                component: componentPath,
                context: { docHtml: edge.node.html, docPath, proj },
            });    
        }
    });
};


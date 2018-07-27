const path = require('path');

const { rootPath, normalizeDocPath } = require('./docs-config');

exports.createPages = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    const docPageTemplate = path.resolve(`src/components/docs/docs.tsx`);
    const res = await graphql(`{
        allMarkdownRemark {
            edges {
                node { fileAbsolutePath, html }
            }
        }
    }`);
    res.data.allMarkdownRemark.edges.forEach(edge => {
        const docPath = normalizeDocPath(edge.node.fileAbsolutePath.substring(rootPath.length));
        createPage({
            path:  path.join('docs', docPath),
            component: docPageTemplate,
            context: { docHtml: edge.node.html, docPath },
        });
    });
};


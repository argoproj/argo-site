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
};


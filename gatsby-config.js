const path = require('path');

const docsConf = require('./docs-config');

const docFiles = Object.keys(docsConf.docs).map((dirPath) => docsConf.docs[dirPath].map((item) => {
    const files = [];
    let toProcess = [item];
    while (toProcess.length > 0) {
        const next = toProcess.pop();
        files.push(path.join(docsConf.rootPath, dirPath, next.path));
        toProcess = toProcess.concat(next.children || []);
    }
    return files;
})).reduce((first, second) => first.concat(...second), []);

module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-typescript',
        'gatsby-plugin-sass',
        'gatsby-transformer-remark',
    ].concat(docFiles.map((path) => ({
        resolve: 'gatsby-source-filesystem',
        options: { path: path, name: path }
    }))),
}

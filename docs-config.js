module.exports = {
    rootPath: '../go/src/github.com/argoproj',
    docs: {
        'argo': [{
            title: 'Overview', path: 'README.md',
            children: [{
                title: 'Examples', path: 'examples/README.md',
            }],
        }, {
            title: 'Getting started', path: 'demo.md',
        }, {
            title: 'How to configure your artifact repository', path: 'ARTIFACT_REPO.md',
        }]
    },
    normalizeDocPath(docPath) {
        if (docPath.indexOf('/') === 0) {
            docPath = docPath.substring(1);
        }
        const extIndex = docPath.lastIndexOf('.');
        if (extIndex > -1) {
            docPath = docPath.substring(0, extIndex);
        }
        return docPath.toLowerCase();
    }
};

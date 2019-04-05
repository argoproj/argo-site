module.exports = {
    rootPath: '.tmp/docs',
    projs: {
        'argo': {
            title: 'Open source container-native workflow engine for Kubernetes.',
            description: 'Argo is an open source container-native workflow engine for getting work done on Kubernetes.',
            docs: [{
                title: 'Overview', path: 'README.md',
                children: [{
                    title: 'How to configure your artifact repository', path: 'ARTIFACT_REPO.md',
                }]
            }, {
                title: 'Getting started', path: 'demo.md',
            }, {
                title: 'Examples', path: 'examples/README.md',
            }]
        },
        'argo-cd': {
            title: 'Declarative continuous delivery for Kubernetes.',
            description: 'Declarative continuous delivery for Kubernetes.',
            docs: [{
                title: 'Overview', path: 'README.md'
            }]
        },
        'argo-events': {
            title: 'Event-based dependency manager for Kubernetes.',
            description: 'Argo Events is an open source event-based dependency manager for Kubernetes.',
            docs: [{
                title: 'Overview', path: 'README.md',
            }, {
                title: 'Documentation', path: 'docs/gateway-guide.md',
                children: [{
                    title: 'Sensor', path: 'docs/sensor-guide.md'
                }, {
                    title: 'Trigger', path: 'docs/trigger-guide.md'
                }, {
                    title: 'Communication between gateway and sensor', path: 'docs/communication.md'
                }, {
                    title: 'Controllers', path: 'docs/controllers-guide.md'
                }, {
                    title: 'Gateway protocol', path: 'docs/gateway-protocol.md'
                }, {
                    title: 'Sensor protocol', path: 'docs/sensor-protocol.md'
                }, ]
            }, {
                title: 'Contributing', path: 'CONTRIBUTING.md'
            }, {
                title: 'Roadmap', path: 'ROADMAP.md'
            }]
        }
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

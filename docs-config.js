module.exports = {
    projs: {
        'argo': {
            title: 'Open source container-native workflow engine for Kubernetes.',
            description: 'Argo is an open source container-native workflow engine for getting work done on Kubernetes.',
            docs: []
        },
        'argo-cd': {
            title: 'Declarative continuous delivery for Kubernetes.',
            description: 'Declarative continuous delivery for Kubernetes.',
            docs: []
        },
        'argo-events': {
            title: 'Event-based dependency manager for Kubernetes.',
            description: 'Argo Events is an open source event-based dependency manager for Kubernetes.',
            docs: []
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

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
                title: 'Overview', path: 'README.md',
            }, {
                title: 'Getting started', path: 'docs/getting_started.md',
            }, {
                title: 'Features', path: 'docs/README.md',
                children: [{
                    title: 'Architecture', path: 'docs/architecture.md',
                }, {
                    title: 'Tracking Strategies', path: 'docs/tracking_strategies.md',
                }, {
                    title: 'Application Sources', path: 'docs/application_sources.md',
                }, {
                    title: 'Application Parameters', path: 'docs/parameters.md',
                }, {
                    title: 'Resource Health', path: 'docs/health.md',
                }, {
                    title: 'Resource Hooks', path: 'docs/resource_hooks.md',
                }, {
                    title: 'Single Sign On', path: 'docs/sso.md',
                }, {
                    title: 'Webhooks', path: 'docs/webhook.md',
                }, {
                    title: 'RBAC', path: 'docs/rbac.md',
                }],
            }, {
                title: 'Changelog', path: 'changelog.md',
            }, {
                title: 'FAQ', path: 'docs/faq.md',
            }]
        },
        'argo-events': {
            title: 'Event-based dependency manager for Kubernetes.',
            description: 'Argo Events is an open source event-based dependency manager for Kubernetes.',
            docs: [{
                title: 'Overview', path: 'README.md',
            }, {
                title: 'Documentation', path: 'docs/index.md',
                children: [{
                    title: 'Quickstart', path: 'docs/quickstart.md'
                }, {
                    title: 'Signal Guide', path: 'docs/signal-guide.md'
                }, {
                    title: 'Trigger Guide', path: 'docs/trigger-guide.md'
                }]
            }, {
                title: 'Contributing', path: 'CONTRIBUTING.md'
            }, {
                title: 'Roadmap', path: 'ROADMAP.md'
            }]
        },
        'argo-ci': {
            title: 'Continuous integration for Kubernetes.',
            description: 'Continuous integration and deployment system powered by Argo workflow engine.',
            docs: [{
                title: 'Overview', path: 'README.md',
            }, {
                title: 'Roadmap', path: 'ROADMAP.md'
            }]
        },
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

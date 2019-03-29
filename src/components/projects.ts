export const PROJECTS: {[name: string]: { name: string, title: string; keywords: string[]; description: string; link: string; }} = {
    'argo': {
        name: 'Argo',
        title: 'Workflows & Pipelines',
        description: 'Container native workflow engine for Kubernetes supporting both DAG and step based workflows.',
        link: '/argo',
        keywords: ['workflow engine', 'pipeline', 'kubernetes', 'ml', 'ai'],
    },
    'argo-cd': {
        name: 'Argo CD',
        title: 'Continuous Delivery',
        description: 'Declarative Continuous Delivery following Gitops',
        link: '/argo-cd',
        keywords: ['gitops', 'continuous-delivery', 'continuous-deployment', 'kubernetes'],
    },
    'argo-events': {
        name: 'Argo Events',
        title: 'Events',
        description: 'Event based dependency manager for Kubernetes',
        link: '/argo-events',
        keywords: ['kubernetes', 'serverless', 'events'],
    },
};

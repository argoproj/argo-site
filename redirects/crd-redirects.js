/**
 * CRD kind name → official documentation URL.
 * Paths like argoproj.io/Application redirect to these targets.
 */
module.exports = [
  // Argo CD
  {
    path: "Application",
    title: "Application",
    url: "https://argo-cd.readthedocs.io/en/stable/user-guide/application-specification/",
  },
  {
    path: "AppProject",
    title: "AppProject",
    url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/project-specification/",
  },
  {
    path: "ApplicationSet",
    title: "ApplicationSet",
    url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/applicationset-specification/",
  },

  // Argo Workflows
  {
    path: "Workflow",
    title: "Workflow",
    url: "https://argo-workflows.readthedocs.io/en/latest/fields/#workflow",
  },
  {
    path: "WorkflowTemplate",
    title: "WorkflowTemplate",
    url: "https://argo-workflows.readthedocs.io/en/latest/fields/#workflowtemplate",
  },
  {
    path: "ClusterWorkflowTemplate",
    title: "ClusterWorkflowTemplate",
    url: "https://argo-workflows.readthedocs.io/en/latest/cluster-workflow-templates/",
  },
  {
    path: "CronWorkflow",
    title: "CronWorkflow",
    url: "https://argo-workflows.readthedocs.io/en/latest/fields/#cronworkflow",
  },
  {
    path: "WorkflowEventBinding",
    title: "WorkflowEventBinding",
    url: "https://argo-workflows.readthedocs.io/en/latest/fields/#workfloweventbinding",
  },

  // Argo Rollouts
  {
    path: "Rollout",
    title: "Rollout",
    url: "https://argo-rollouts.readthedocs.io/en/stable/features/specification/",
  },
  {
    path: "AnalysisTemplate",
    title: "AnalysisTemplate",
    url: "https://argo-rollouts.readthedocs.io/en/stable/features/analysis/",
  },
  {
    path: "ClusterAnalysisTemplate",
    title: "ClusterAnalysisTemplate",
    url: "https://argo-rollouts.readthedocs.io/en/stable/features/analysis/",
  },
  {
    path: "Experiment",
    title: "Experiment",
    url: "https://argo-rollouts.readthedocs.io/en/stable/features/experiment/",
  },

  // Argo Events
  {
    path: "EventSource",
    title: "EventSource",
    url: "https://argoproj.github.io/argo-events/concepts/event_source/",
  },
  {
    path: "Sensor",
    title: "Sensor",
    url: "https://argoproj.github.io/argo-events/concepts/sensor/",
  },
  {
    path: "EventBus",
    title: "EventBus",
    url: "https://argoproj.github.io/argo-events/concepts/eventbus/",
  },
]

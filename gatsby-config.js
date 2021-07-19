module.exports = {
  siteMetadata: {
    title: "Argo",
    description: "Open source Kubernetes native workflows, events, CI and CD",
    siteUrl: "https://argoproj.github.io",
    social: {
      twitter: "",
      github: "https://github.com/argoproj",
      slack: {
        cncfLink: "https://slack.cncf.io/",
        channels: [
          {name: "argo-workflows", link: "https://cloud-native.slack.com/archives/C01QW9QSSSK"},
          {name: "argo-cd", link: "https://cloud-native.slack.com/archives/C01TSERG0KZ"},
          {name: "argo-rollouts", link: "https://cloud-native.slack.com/archives/C01U781DW2E"},
          {name: "argo-events", link: "https://cloud-native.slack.com/archives/C01TNKD6KL6"},
          {name: "argo-cd-notifications", link: "https://cloud-native.slack.com/archives/C01UKS2NKK3"},
          {name: "argo-cd-appset", link: "https://cloud-native.slack.com/archives/C01U45M2SVB"},
          {name: "argo-sig-ui", link: "https://cloud-native.slack.com/archives/C01TR44A8NB"},
          {name: "argo-cd-autopilot", link: "https://cloud-native.slack.com/archives/C0207C47D0X"},
        ]
      }
    },
    navigation: [
      {
        title: "Workflows",
        url: "/workflows",
      },
      {
        title: "CD",
        url: "/cd",
      },
      {
        title: "Rollouts",
        url: "/rollouts",
      },
      {
        title: "Events",
        url: "/events",
      },
      {
        title: "Blog",
        url: "https://blog.argoproj.io",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              backgroundColor: "red",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content-pages",
        path: "./content/pages/",
      },
      __key: "content-pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "members",
        path: "./content/members/",
      },
      __key: "members",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}

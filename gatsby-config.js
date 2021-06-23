module.exports = {
  siteMetadata: {
    title: "Argo",
    description: "Open source Kubernetes native workflows, events, CI and CD",
    siteUrl: "https://argoproj.github.io",
    social: {
      twitter: "",
      github: "https://github.com/argoproj",
      slack: "https://argoproj.github.io/community/join-slack",
    },
    navigation: [
      {
        title: "Workflows",
        url: "/workflows",
        external: false,
      },
      {
        title: "ArgoCD",
        url: "/gitops-cd",
        external: false,
      },
      {
        title: "Rollouts",
        url: "/rollouts",
        external: false,
      },
      {
        title: "Events",
        url: "/events",
        external: false,
      },
      {
        title: "Blog",
        url: "https://blog.argoproj.io",
        external: true,
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
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "features",
        path: "./src/features/",
      },
      __key: "features",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "members",
        path: "./src/members/",
      },
      __key: "members",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "maintainers",
        path: "./src/maintainers/",
      },
      __key: "maintainers",
    },
  ],
}

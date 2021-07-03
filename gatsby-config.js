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

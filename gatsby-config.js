module.exports = {
  siteMetadata: {
    title: "Argo",
    description: "Open source Kubernetes native workflows, events, CI and CD",
    social: {
      twitter: "",
    },
    navigation: [
      {
        title: "Workflows",
        url: "/workflows",
      },
      {
        title: "ArgoCD",
        url: "/ArgoCD",
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
        url: "/blog",
      },
    ],
    companies: [
      {
        name: "Alibaba",
        url: "../images/companies/alibaba.svg",
      },
      {
        name: "Alibaba",
        url: "../images/companies/alibaba.svg",
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

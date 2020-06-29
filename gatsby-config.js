module.exports = {
    siteMetadata: {
        siteUrl: 'https://argoproj.github.io',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-typescript',
        'gatsby-plugin-sass', {
            resolve: 'gatsby-plugin-sitemap',
        }, {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [{
                    resolve: `gatsby-plugin-google-analytics`,
                    options: {
                        trackingId: process.env.GA_TRACKING_ID,
                    },
                }, {
                    resolve: 'gatsby-remark-images',
                    options: {
                        maxWidth: 590,
                    },
                }, {
                    resolve: 'gatsby-remark-link-rewrite',
                    options: {
                      pattern: /^(?!.*http[s]?:)(.*)[.]md$/,
                      replace: '$1.html',
                    },
                },'gatsby-remark-copy-images',
                `gatsby-remark-autolink-headers`],
            },
        },
    ],
}

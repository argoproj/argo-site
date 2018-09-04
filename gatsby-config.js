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
                },'gatsby-remark-copy-images'],
            },
        },
    ].concat({
        resolve: 'gatsby-source-filesystem',
        options: { path: '.tmp/docs', name: 'docs' }
    }),
}

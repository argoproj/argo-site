import * as React from 'react';

import { Main, Project } from '../components';

export default ({ data }: {data: any}) => {
    return (
        <Main>
            <Project proj='argo' animationType='connections' markdownHtml={data.allMarkdownRemark.edges[0].node.html}
              docsLink='/docs/argo/readme.html'/>
        </Main>
    );
};

export const query = graphql`
  query ArgoReadmeQuery {
	allMarkdownRemark(filter: {
    fileAbsolutePath: {
      eq: ".tmp/docs/argo/README.md"
    }
  }){
    edges {
      node {
        fileAbsolutePath
        html
      }
    }
  }
}
`;

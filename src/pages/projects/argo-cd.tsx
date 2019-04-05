import * as React from 'react';

import { Main, Project } from '../../components';

export default ({ data }: {data: any}) => {
    return (
        <Main>
            <Project proj='argo-cd' animationType='3d-particles' markdownHtml={data.allMarkdownRemark.edges[0].node.html}
              docsLink='../argo-cd/'/>
        </Main>
    );
};

export const query = graphql`
  query ArgoCdReadmeQuery {
	allMarkdownRemark(filter: {
    fileAbsolutePath: {
      eq: ".tmp/docs/argo-cd/README.md"
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

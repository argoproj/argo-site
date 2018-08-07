import * as React from 'react';

import { Main, Project } from '../components';

export default ({ data }: {data: any}) => {
    return (
        <Main>
            <Project proj='argo-ci' animationType='neural-network' markdownHtml={data.allMarkdownRemark.edges[0].node.html}/>
        </Main>
    );
};

export const query = graphql`
  query ArgoCiReadmeQuery {
	allMarkdownRemark(filter: {
    fileAbsolutePath: {
      eq: ".tmp/docs/argo-ci/README.md"
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

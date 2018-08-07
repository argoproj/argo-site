import * as React from 'react';

import { Main, Project } from '../components';

export default ({ data }: {data: any}) => {
    return (
        <Main>
            <Project proj='argo-events' animationType='solar-system' markdownHtml={data.allMarkdownRemark.edges[0].node.html}/>
        </Main>
    );
};

export const query = graphql`
  query ArgoEventsReadmeQuery {
	allMarkdownRemark(filter: {
    fileAbsolutePath: {
      eq: ".tmp/docs/argo-events/README.md"
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

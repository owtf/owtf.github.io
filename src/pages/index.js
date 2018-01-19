/* global graphql */

import React from 'react';
import Features from '../components/features';
import Hero from '../components/hero';


const IndexPage = props =>
  (<main>
      <Hero data={props.data.allDataJson.edges[0].node.hero} />
      <Features data={props.data.allDataJson.edges[0].node.features} />
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;

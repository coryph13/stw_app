import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      name
      description
      price
    }
  }
`;

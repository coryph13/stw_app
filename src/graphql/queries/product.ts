import { gql } from 'graphql-request';

const PRODUCT_FIELDS = `
    name
    slug
    code
    description
    in_stock
    image
    design
    manufacturer {
      slug
      name
      description
    }
    categories {
      slug
      name
      description
    }
    applications {
      slug
      name
      description
    }
    specs {
      __typename
      ... on TabletopSpec {
        decor {
          slug
          code
          name
          description
          image
          sort
          pattern {
            slug
            name
            description
            image
          }
          shade {
            slug
            name
            description
            hex
          }
          textures {
            slug
            name
            description
            image
          }
        }
        texture {
          slug
          name
          description
          image
        }
        base_material {
          value
          description
        }
        density {
          value
          description
        }
        emission_class {
          value
          description
        }
        moisture_resistance {
          value
          description
        }
        surface_durability {
          value
          description
        }
        print_technology {
          value
          description
        }
        formats {
          slug
          width
          height
          thickness
          unit {
            slug
            name
            short_name
            type
          }
        }
      }

      ... on FlooringSpec {
        decor {
          slug
          code
          name
          description
          image
          sort
          pattern {
            slug
            name
            description
            image
          }
          shade {
            slug
            name
            description
            hex
          }
          textures {
            slug
            name
            description
            image
          }
        }
        texture {
          slug
          name
          description
          image
        }
        base_material {
          value
          description
        }
        density {
          value
          description
        }
        emission_class {
          value
          description
        }
        moisture_resistance {
          value
          description
        }
        surface_durability {
          value
          description
        }
        print_technology {
          value
          description
        }
        formats {
          slug
          width
          height
          thickness
          unit {
            slug
            name
            short_name
            type
          }
        }
      }

      ... on LdspSpec {
        decor {
          slug
          code
          name
          description
          image
          sort
          pattern {
            slug
            name
            description
            image
          }
          shade {
            slug
            name
            description
            hex
          }
          textures {
            slug
            name
            description
            image
          }
        }
        texture {
          slug
          name
          description
          image
        }
        base_material {
          value
          description
        }
        density {
          value
          description
        }
        emission_class {
          value
          description
        }
        moisture_resistance {
          value
          description
        }
        surface_durability {
          value
          description
        }
        print_technology {
          value
          description
        }
        formats {
          slug
          width
          height
          thickness
          unit {
            slug
            name
            short_name
            type
          }
        }
      }

      ... on LmdfSpec {
        decor {
          slug
          code
          name
          description
          image
          sort
          pattern {
            slug
            name
            description
            image
          }
          shade {
            slug
            name
            description
            hex
          }
          textures {
            slug
            name
            description
            image
          }
        }
        texture {
          slug
          name
          description
          image
        }
        base_material {
          value
          description
        }
        density {
          value
          description
        }
        emission_class {
          value
          description
        }
        moisture_resistance {
          value
          description
        }
        surface_durability {
          value
          description
        }
        print_technology {
          value
          description
        }
        formats {
          slug
          width
          height
          thickness
          unit {
            slug
            name
            short_name
            type
          }
        }
      }

      ... on DwpSpec {
        density {
          value
          description
        }
        emission_class {
          value
          description
        }
        moisture_resistance {
          value
          description
        }
        formats {
          slug
          width
          height
          thickness
          unit {
            slug
            name
            short_name
            type
          }
        }
      }

      ... on DspSpec {
        density {
          value
          description
        }
        emission_class {
          value
          description
        }
        moisture_resistance {
          value
          description
        }
        formats {
          slug
          width
          height
          thickness
          unit {
            slug
            name
            short_name
            type
          }
        }
      }

      ... on HdfSpec {
        density {
          value
          description
        }
        emission_class {
          value
          description
        }
        moisture_resistance {
          value
          description
        }
        formats {
          slug
          width
          height
          thickness
          unit {
            slug
            name
            short_name
            type
          }
        }
      }

      ... on MdfSpec {
        density {
          value
          description
        }
        emission_class {
          value
          description
        }
        moisture_resistance {
          value
          description
        }
        formats {
          slug
          width
          height
          thickness
          unit {
            slug
            name
            short_name
            type
          }
        }
      }

      ... on GlueSpec {
        color {
          slug
          name
          description
        }
        base_material {
          value
          description
        }
        emission_class {
          value
          description
        }
        moisture_resistance {
          value
          description
        }
        viscosity
        open_time
        full_cure_time
        package
      }

      ... on PaperSpec {
        pattern {
          slug
          name
          description
          image
        }
        formats {
          slug
          width
          height
          thickness
          unit {
            slug
            name
            short_name
            type
          }
        }
      }
    }
`;

export const GET_PRODUCT = gql`
  query GetProduct($slug: String!) {
    product(slug: $slug) {
      ${PRODUCT_FIELDS}
    }
  }
`;

export const GET_PRODUCTS = gql`
query GetProducts($categorySlug: String, $manufacturerSlug: String) {
  products (categorySlug: $categorySlug, manufacturerSlug: $manufacturerSlug) {
      data {
        ${PRODUCT_FIELDS}
      }
    }
  }
`;

// export const SEARCH_PRODUCTS = gql`
//   query SearchProducts() {
//     searchProducts() {
//       slug
//       name
//       description
//       image
//       design
//     }
//   }
// `;

// TODO: Add options from schema for search and product list.

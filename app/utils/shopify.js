import { GraphQLClient, gql } from "graphql-request";

export async function shopifyFetch({ query, variables }) {
  const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      },
      body: { query, variables } && JSON.stringify({ query, variables }),
    });
    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}

// export async function getAllProducts() {
//   const data = await shopifyFetch({
//     query: `{
//       products(first: 100, sortKey: TITLE) {
//           edges {
//             node {
//               id
//               handle
//               title
//               description
//               priceRange {
//                 maxVariantPrice {
//                   amount
//                 }
//                 minVariantPrice {
//                   amount
//                 }
//               }
//               images(first: 50) {
//                 edges {
//                   node {
//                     url
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }`,
//   });
//   const products = await data;
//   return products.body.data.products.edges;
// }

const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    "Content-Type": "application/json",
  },
});

export async function getProduct(id) {
  const getProductById = gql`
    {
      product(id: "${id}" ) {
        id
        title
        description
        images(first: 10) {
          nodes {
            url
          }
        }
        priceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
    `;
  try {
    const data = await graphQLClient.request(getProductById);
    return data.product;
  } catch (error) {
    throw new Error(error);
  }
}
export async function getAllProducts() {
  const getAllProductsQuery = gql`
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              altText
              url
            }
          }
        }
      }
    }
  `;
  try {
    const products = await graphQLClient.request(getAllProductsQuery);
    return products.products.edges;
  } catch (error) {
    throw new Error(error);
  }
}

export async function addToCart(itemId, quantity) {
  const createCartMutation = gql`
    mutation createCart($cartInput: CartInput) {
      cartCreate(input: $cartInput) {
        cart {
          id
        }
      }
    }
  `;
  const variables = {
    cartInput: {
      lines: [
        {
          quantity: parseInt(quantity),
          merchandiseId: itemId,
        },
      ],
    },
  };
  try {
    const data = await graphQLClient.request(createCartMutation, variables);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateCart(cartId, itemId, quantity) {
  const updateCartMutation = gql`
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
        }
      }
    }
  `;
  const variables = {
    cartId: cartId,
    lines: [
      {
        quantity: parseInt(quantity),
        merchandiseId: itemId,
      },
    ],
  };

  try {
    const data = await graphQLClient.request(updateCartMutation, variables);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function retrieveCart(cartId) {
  const cartQuery = gql`
    query cartQuery($cartId: ID!) {
      cart(id: $cartId) {
        id
        createdAt
        updatedAt
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  product {
                    id
                    title
                    handle
                    featuredImage {
                      url
                      altText
                    }
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }

        estimatedCost {
          totalAmount {
            amount
          }
        }
      }
    }
  `;
  const variables = {
    cartId,
  };
  try {
    const data = await graphQLClient.request(cartQuery, variables);
    return data.cart;
  } catch (error) {
    throw new Error(error);
  }
}

export const getCheckoutUrl = async (cartId) => {
  const getCheckoutUrlQuery = gql`
    query checkoutURL($cartId: ID!) {
      cart(id: $cartId) {
        checkoutUrl
      }
    }
  `;
  const variables = {
    cartId: cartId,
  };

  try {
    return await graphQLClient.request(getCheckoutUrlQuery, variables);
  } catch (error) {
    throw new Error(error);
  }
};

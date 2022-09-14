import { formatPrice, storefront } from "../../utils";
import { useState } from "react";

export default function Example({ product }) {
  const [isLoading, setIsLoading] = useState(false);
  const image = product.images.edges[0].node;
  const variantId = product.variants.edges[0].node.id;

  async function checkout() {
    setIsLoading(true);
    const { data } = await storefront(checkoutMutation, { variantId });
    const { webUrl } = data.checkoutCreate.checkout;
    window.location.href = webUrl;
  }

  return (
    <div className="bg-white">
      <div className="col-span-1 flex justify-center content-center">
        <div className="aspect-w-4 aspect-h-3 rounded-md lg:aspect-none lg:h-80 m-20">
          <img
            src={image.transformedSrc}
            alt={image.altText}
            className="object-cover object-center"
          />
        </div>
        <div className="md:mt-20 mt-5">
          <h3 className="small-text text-sm font-semibold select-none ml-9 md:ml-0">
            BELATED BICYCLES
          </h3>
          <h1 className="font-bold titles md:text-4xl text-3xl md:w-3/4 ml-9 md:ml-0 mt-5 select-none">
            {product.title}
          </h1>
          <h3 className="small-text text-sm font-semibold select-none ml-9 md:ml-0 m-5">
            {product.tags[4]}
          </h3>
          <p className="mt-10 md:text-justify w-3/4 nav-btns font-normal ml-9 md:ml-0 select-none">
            {product.description}
          </p>

          <div className="mt-7 select-none ml-9 md:ml-0">
            <div className="flex gap-5 items-center justify-between">
              <div className="flex gap-3 items-center">
                <span className="font-bold titles text-3xl">
                  {formatPrice(product.priceRange.minVariantPrice.amount)}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={checkout}
            type="button"
            className="text-black mt-5 bg-green-200 hover:bg-green-600 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            <svg
              aria-hidden="true"
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await storefront(gql`
    {
      products(first: 60) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `);
  return {
    paths: data.products.edges.map((product) => ({
      params: { handle: product.node.handle },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await storefront(singleQuery, { handle: params.handle });
  return {
    props: {
      product: data.productByHandle,
    },
  };
}

const gql = String.raw;

const singleQuery = gql`
  query SingleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      title
      description
      updatedAt
      tags
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 1) {
        edges {
          node {
            transformedSrc
            altText
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;

const checkoutMutation = gql`
  mutation CheckoutCreate($variantId: ID!) {
    checkoutCreate(
      input: { lineItems: { variantId: $variantId, quantity: 1 } }
    ) {
      checkout {
        webUrl
      }
    }
  }
`;

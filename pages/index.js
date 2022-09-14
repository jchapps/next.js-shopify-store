import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { formatPrice, storefront } from "../utils";
import Link from "next/link";

const staticProducts = [];

export default function Homepage({ products }) {
  console.log({ products });
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.edges.map((item) => {
            const product = item.node;
            const image = product.images.edges[0].node;
            return (
              <Link key={product.handle} href={`/products/${product.handle}`}>
                <div className="group relative">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-60 duration-300 lg:aspect-none lg:h-80">
                    <img
                      src={image.transformedSrc}
                      alt={image.altText}
                      className="h-100 w-200 object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.tags[1]}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {formatPrice(product.priceRange.minVariantPrice.amount)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await storefront(productsQuery);
  return {
    props: {
      products: data.products,
    },
  };
}

const gql = String.raw;

const productsQuery = gql`
  query Products {
    products(first: 60) {
      edges {
        node {
          title
          handle
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
        }
      }
    }
  }
`;

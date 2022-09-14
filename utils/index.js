const domain = process.env.NEXT_PUBLIC_API_URL;
const storefrontAccessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export async function storefront(query, variables = {}) {
  const response = await fetch(
    `https://${domain}.myshopify.com/api/2021-07/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
    }
  );
  return response.json();
}

export function formatPrice(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

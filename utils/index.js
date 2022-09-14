export async function storefront(query, variables = {}) {
  const response = await fetch(
    "https://belatedbicycles.myshopify.com/api/2022-07/graphql.json/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_ACCESS_TOKEN,
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

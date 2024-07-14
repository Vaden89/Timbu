export async function GET() {
  try {
    const request = await fetch(
      "https://timbu-get-all-products.reavdev.workers.dev/?organization_id=84a45f5b57f941d180dd4869ee2b94a0&reverse_sort=false&page=1&size=10&Appid=LWIJQL36VNAXWRT&Apikey=ec32e23f3166422a872f8434463230af20240713100116329567"
    );

    if (!request.ok) {
      throw new Error(`Error fetching products: ${request.statusText}`);
    }

    const response = await request.json();
    return Response.json({ response });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
    });
  }
}

export async function getSingleProduct(productID) {
  try {
    const request = await fetch(
      `https://timbu-get-single-product.reavdev.workers.dev/${productID}?organization_id=84a45f5b57f941d180dd4869ee2b94a0&reverse_sort=false&page=1&size=10&Appid=LWIJQL36VNAXWRT&Apikey=ec32e23f3166422a872f8434463230af20240713100116329567`
    );

    if (!request.ok) {
      throw new Error(
        `Error fetching product ${productID}: ${request.statusText}`
      );
    }

    const response = await request.json();
    return Response.json({ response });
  } catch (error) {
    console.error("Error fetching product:", error);
    return new Response(
      JSON.stringify({ error: `Failed to fetch product ${productID}` }),
      {
        status: 500,
      }
    );
  }
}

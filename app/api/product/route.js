export async function GET() {
  const request = await fetch(
    " https://timbu-get-all-products.reavdev.workers.dev/?organization_id=84a45f5b57f941d180dd4869ee2b94a0&reverse_sort=false&page=1&size=10&Appid=LWIJQL36VNAXWRT&Apikey=ec32e23f3166422a872f8434463230af20240713100116329567"
  );
  const response = await request.json();
  return response;
}

export async function getSingleProduct(productID) {
  const request = await fetch(
    `https://timbu-get-single-product.reavdev.workers.dev/${productID}?organization_id=84a45f5b57f941d180dd4869ee2b94a0&reverse_sort=false&page=1&size=10&Appid=LWIJQL36VNAXWRT&Apikey=ec32e23f3166422a872f8434463230af20240713100116329567`
  );
  const response = await request.json();
  return response;
}

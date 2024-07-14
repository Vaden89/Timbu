import { GET } from "@/app/api/product/route";

export async function getProductData(id) {
  const response = await GET();
  const { response: data } = await response.json();

  const filteredData = data.items.filter((item) => item.url_slug == id);
  return filteredData[0];
}

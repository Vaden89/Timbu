import { GET } from "@/app/api/product/route";

export async function getProductData(id) {
  const res = await GET();
  const data = res.items;

  const filteredData = data.filter((item) => item.url_slug == id);
  return filteredData;
}

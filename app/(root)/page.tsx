import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function HomePage() {
  const  latestProducts = await getLatestProducts()
  console.log(btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32)))));
  return (
    <div>
      <ProductList
        data={latestProducts}
        title="Newest arrival"
        limit={4}
      />
    </div>
  );
}

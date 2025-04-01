import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function HomePage() {
  const  latestProducts = await getLatestProducts()
  console.log(latestProducts[0].price)
  return (
    <div className="w-full">
      <ProductList
        data={latestProducts}
        title="Newest arrival"
        limit={4}
      />
    </div>
  );
}

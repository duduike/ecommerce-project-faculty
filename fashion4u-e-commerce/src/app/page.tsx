
import { Banner } from "./components/banner/banner";
import { Products } from "./components/products/page";
import { ProductsArea } from "./components/productsWrapper/productsWrapper";
import { TitleSection } from "./components/titleSection/titleSection";

export default function Home() {
  return (
    <main>
      <Banner />
      <ProductsArea>
        <TitleSection title="Promoções" />
        <Products />
      </ProductsArea>
    </main>
  )
}

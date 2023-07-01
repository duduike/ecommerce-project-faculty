
import { Banner } from "./components/banner/banner";
import { Products } from "./components/products/page";
import { ProductsWrapper } from "./components/productsWrapper/productsWrapper";
import { TitleSection } from "./components/titleSection/titleSection";

export default function Home() {
  return (
    <main>
      <Banner />
      <ProductsWrapper>
        <TitleSection title="Promoções" />
        <Products />
      </ProductsWrapper>
    </main>
  )
}

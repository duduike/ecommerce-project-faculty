
import { Banner } from "./components/Banner/Banner";
import { Main } from "./components/Main/Main";
import { Products } from "./components/Products/Products";
import { ProductsWrapper } from "./components/ProductsWrapper/ProductsWrapper";
import { TitleSection } from "./components/TitleSection/TitleSection";

export default function Home() {
  return (
    <Main>
      <Banner />
      <ProductsWrapper>
        <TitleSection title="Promoções" />
        <Products />
      </ProductsWrapper>
    </Main>
  )
}

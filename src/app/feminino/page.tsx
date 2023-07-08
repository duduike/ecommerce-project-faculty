import { Main } from '../components/Main/Main'
import { Products } from '../components/Products/Products'
import { ProductsWrapper } from '../components/ProductsWrapper/ProductsWrapper'
import { TitleSection } from '../components/TitleSection/TitleSection'

export default function Feminino () {
  return (
    <Main>
      <ProductsWrapper>
        <TitleSection title="Feminino" />
        <Products />
      </ProductsWrapper>
    </Main>
  )
}


import { Main } from '../components/Main/Main'
import { Products } from '../components/Products/Products'
import { ProductsWrapper } from '../components/ProductsWrapper/ProductsWrapper'
import { TitleSection } from '../components/TitleSection/TitleSection'

export default function Masculino () {
  return (
    <Main>
      <ProductsWrapper>
        <TitleSection title="Masculino" />
        <Products />
      </ProductsWrapper>
    </Main>
  )
}


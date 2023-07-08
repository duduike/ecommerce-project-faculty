
interface ProductsTitleProsp {
    text: string;
}

export const ProductsTitle = ({text} : ProductsTitleProsp) => {
  return (
    <div>
        <h3>{text}</h3>
    </div>
  )
}

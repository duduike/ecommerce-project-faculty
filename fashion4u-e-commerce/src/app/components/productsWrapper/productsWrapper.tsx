
type ProductsWrapperProps = {
    children: React.ReactNode;
  };
  
  export const ProductsArea: React.FC<ProductsWrapperProps> = ({ children }) => {
    return (
      <div className="p-6 md:p-10">
        {children}
      </div>
    );
  };
  
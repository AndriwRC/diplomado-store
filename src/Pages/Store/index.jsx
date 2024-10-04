import { useContext, useState } from 'react';
import { AppContext } from '../../Context';
import ProductCard from '../../Components/ProductCard';
import ProductDetails from '../../Components/ProductDetails';

const Store = () => {
  const { products, productsLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const filteredProducts = products.filter((product) =>
    product.nombre
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase().trim())
  );

  return (
    <>
      <h1 className='font-medium text-xl text-center'>Productos</h1>
      <input
        className='rounded-lg border border-black w-3/4 max-w-screen-sm p-4 my-4 focus:outline-none'
        type='text'
        placeholder='Busca un producto'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className='grid grid-cols-auto-fit-56 justify-center gap-4 w-full max-w-screen-lg'>
        {productsLoading ? (
          <p className='col-span-4 text-center font-light'>
            Cargando Productos...
          </p>
        ) : products.length === 0 ? (
          <p className='col-span-4 text-center font-light'>
            No tenemos esta clase de producto en el momento. {':('}
          </p>
        ) : (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        )}
      </div>
      <ProductDetails />
    </>
  );
};

export default Store;

import { useContext } from 'react';
import { AppContext } from '../../Context';
import ProductCard from '../../Components/ProductCard';
import ProductDetails from '../../Components/ProductDetails';

const Store = () => {
  const { products, productsLoading } = useContext(AppContext);

  return (
    <>
      <h1 className='font-medium text-xl text-center'>Productos</h1>
      <input
        className='rounded-lg border border-black w-3/4 max-w-screen-sm p-4 my-4 focus:outline-none'
        type='text'
        placeholder='Busca un producto'
        // value={searchByTitle}
        // onChange={(e) => setSearchByTitle(e.target.value)}
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
          products.map((item) => <ProductCard key={item.id} product={item} />)
        )}
      </div>
      <ProductDetails />
    </>
  );
};

export default Store;

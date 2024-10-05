import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context';
import ProductCard from '../../Components/ProductCard';

const Store = () => {
  const { products, productsLoading } = useContext(AppContext);

  let filteredProducts = products;

  // Filter by category
  const { category } = useParams();
  if (category)
    filteredProducts = filteredProducts.filter(
      (product) => product.categoria.toLocaleLowerCase() === category
    );

  // Filter by name
  const [searchValue, setSearchValue] = useState('');

  filteredProducts = filteredProducts?.filter((product) =>
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
        ) : filteredProducts.length === 0 ? (
          <p className='col-span-4 text-center font-light'>
            No tenemos esta clase de producto en el momento. {':('}
          </p>
        ) : (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        )}
      </div>
    </>
  );
};

export default Store;

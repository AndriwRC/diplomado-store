import { useContext } from 'react';
import { AppContext } from '../../Context';
import AsideMenu from '../AsideMenu';

const ProductDetails = () => {
  const {
    productToShow: product,
    isDetailsOpen,
    closeDetails,
    addProductToCart,
  } = useContext(AppContext);

  return (
    <AsideMenu
      isOpen={isDetailsOpen}
      closeMenu={closeDetails}
      title={'Detalles'}
    >
      <figure className='px-6 w-2/3 max-h-52 self-center'>
        <img
          className='w-full h-full rounded-lg object-cover'
          src={`${product.imgUrl}`}
          alt={product.nombre}
        />
      </figure>
      <p className='flex flex-col p-6 font-medium'>
        <span className='text-2xl mb-2'>${product.precio}</span>
        <span className='text-base'>{product.nombre}</span>
        <span className='font-light text-sm'>{product.descripcion}</span>
        <span className='text-base'>Talla: {product.talla}</span>
        <span className='text-base'>Fit: {product.fit}</span>
      </p>
      <div className='p-6'>
        <button
          className='bg-black py-3 text-white w-full rounded-lg'
          onClick={() => {
            addProductToCart(product);
            closeDetails();
          }}
        >
          Agregar al Carrito
        </button>
      </div>
    </AsideMenu>
  );
};

export default ProductDetails;

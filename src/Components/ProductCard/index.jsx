import { useContext } from 'react';
import { HiPlus } from 'react-icons/hi';
import { HiCheck } from 'react-icons/hi';
import { AppContext } from '../../Context';

const ProductCard = ({ product }) => {
  const { openCart, cartProducts, addProductToCart } = useContext(AppContext);

  const isInCart = cartProducts.find((item) => item.id === product.id);

  return (
    <div className='w-56 h-60 rounded-lg bg-white cursor-pointer'>
      <figure className='relative w-full h-4/5'>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={`${'https://loremflickr.com/320/240'}`}
          alt='headphones'
        />
        <div
          className={`absolute top-0 ring-0 grid place-items-center w-6 h-6 m-2 rounded-full ${
            isInCart ? 'bg-green-500/75' : 'bg-white/75'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            addProductToCart(product);
            openCart();
          }}
        >
          <span>
            {isInCart ? (
              <HiCheck className='h-4 w-4 text-white' />
            ) : (
              <HiPlus className='h-4 w-4 text-black' />
            )}
          </span>
        </div>
        <span className='absolute bottom-0 left-0 m-2 px-3 rounded-lg bg-white/60 text-xs'>
          {product.categoria}
        </span>
      </figure>
      <p className='flex justify-between items-center mt-2'>
        <span className='text-sm truncate'>{product.nombre}</span>
        <span className='text-lg font-semibold'>${product.precio}</span>
      </p>
    </div>
  );
};

export default ProductCard;

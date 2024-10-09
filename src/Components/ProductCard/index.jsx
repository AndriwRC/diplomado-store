import { useContext } from 'react';
import {
  HiPlus,
  HiCheck,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi';
import { AppContext } from '../../Context';

const ProductCard = ({
  product,
  adminMode,
  loadProductData,
  deleteProduct,
}) => {
  const { showProduct, cartProducts, addProductToCart } =
    useContext(AppContext);

  const isInCart = cartProducts.find((item) => item.id === product.id);

  const renderIcon = () => {
    if (!adminMode)
      return (
        <div
          className={`absolute top-0 right-0 grid place-items-center w-6 h-6 m-2 rounded-full ${
            isInCart ? 'bg-green-500/75' : 'bg-white/75'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            addProductToCart(product);
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
      );

    return (
      <>
        <div
          className={
            'absolute top-0 right-0 grid place-items-center w-6 h-6 m-2 rounded-full bg-white/75'
          }
          onClick={(e) => {
            e.stopPropagation();
            loadProductData(product);
          }}
        >
          <span>
            <HiOutlinePencil className='h-4 w-4 text-black' />
          </span>
        </div>

        <div
          className={
            'absolute top-0 right-9 grid place-items-center w-6 h-6 m-2 rounded-full bg-white/75'
          }
          onClick={(e) => {
            e.stopPropagation();
            deleteProduct(product.id);
          }}
        >
          <span>
            <HiOutlineTrash className='h-4 w-4 text-black' />
          </span>
        </div>
      </>
    );
  };

  return (
    <div
      className='w-56 h-60 rounded-lg bg-white cursor-pointer'
      onClick={() => showProduct(product)}
    >
      <figure className='relative w-full h-4/5'>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={`${'https://loremflickr.com/320/240'}`}
          alt='headphones'
        />
        <span className='absolute bottom-0 left-0 m-2 px-3 rounded-lg bg-white/60 text-xs'>
          {product.categoria}
        </span>
        {renderIcon()}
      </figure>
      <p className='flex justify-between items-center mt-2'>
        <span className='text-sm truncate'>{product.nombre}</span>
        <span className='text-lg font-semibold'>${product.precio}</span>
      </p>
    </div>
  );
};

export default ProductCard;

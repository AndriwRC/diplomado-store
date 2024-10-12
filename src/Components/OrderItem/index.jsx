import { useContext } from 'react';
import { HiX } from 'react-icons/hi';
import { AppContext } from '../../Context';

const OrderItem = ({ product }) => {
  const { removeProductFromCart } = useContext(AppContext);

  return (
    <div className='flex justify-between items-center gap-2 mb-3'>
      <figure className='w-20 h-20'>
        <img
          className='w-full h-full rounded-lg object-cover'
          src={`${product.imgUrl}`}
          alt={product.nombre}
        />
      </figure>
      <p className='text-sm font-light text-wrap grow'>{product.nombre}</p>
      <p className='text-lg font-medium'>${product.precio}</p>
      <HiX
        onClick={() => removeProductFromCart(product.id)}
        className='h-6 w-6 text-black cursor-pointer'
      />
    </div>
  );
};

export default OrderItem;

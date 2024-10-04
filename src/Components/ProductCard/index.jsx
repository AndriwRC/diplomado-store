import { HiPlus } from 'react-icons/hi';

function ProductCard({ title, category, img, price }) {
  return (
    <div className='w-56 h-60 rounded-lg bg-white cursor-pointer'>
      <figure className='relative w-full h-4/5'>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={`${img}`}
          alt='headphones'
        />
        {<HiPlus />}
        <span className='absolute bottom-0 left-0 m-2 px-3 rounded-lg bg-white/60 text-xs'>
          {category}
        </span>
      </figure>
      <p className='flex justify-between items-center mt-2'>
        <span className='text-sm truncate'>{title}</span>
        <span className='text-lg font-semibold'>${price}</span>
      </p>
    </div>
  );
}

export default ProductCard;

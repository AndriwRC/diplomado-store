import { useRef } from 'react';

const ProductForm = ({ formMode, onSubmit, loading, defaultValues }) => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const productData = {
      nombre: formData.get('name'),
      precio: formData.get('price'),
      imgUrl: formData.get('img'),
    };
    onSubmit(productData);
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className='flex flex-col justify-between gap-8 w-full px-6'
    >
      <input
        name='name'
        defaultValue={defaultValues?.nombre || ''}
        type='text'
        placeholder='Nombre del Producto'
        required
        className='border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      />
      <input
        name='price'
        defaultValue={defaultValues?.precio || ''}
        type='number'
        min='0'
        step='0.01'
        placeholder='Precio'
        required
        className='border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      />
      <input
        name='img'
        defaultValue={defaultValues?.imgUrl || ''}
        type='text'
        placeholder='Imagen'
        className='border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      />
      <button
        type='submit'
        disabled={loading}
        className='w-full py-3 rounded-lg font-semibold bg-black text-white'
      >
        {loading
          ? 'Procesando...'
          : formMode === 'create'
          ? 'Crear Producto'
          : 'Actualizar Producto'}
      </button>
    </form>
  );
};

export default ProductForm;

import { useRef } from 'react';

const ProductForm = ({ formMode, onSubmit, loading, defaultValues }) => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const productData = {
      nombre: formData.get('nombre'),
      descripcion: formData.get('descripcion'),
      categoria: formData.get('categoria'),
      talla: formData.get('talla'),
      color: formData.get('color'),
      fit: formData.get('fit'),
      genero: formData.get('genero'),
      temporada: formData.get('temporada'),
      cantidad: formData.get('cantidad'),
      precio: formData.get('precio'),
      imgUrl: formData.get('imgUrl'),
    };
    onSubmit(productData);
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className='flex flex-col justify-between gap-2 w-full px-6 overflow-scroll'
    >
      <label htmlFor='nombre'>Nombre:</label>
      <input
        type='text'
        id='nombre'
        name='nombre'
        defaultValue={defaultValues?.nombre || ''}
        className='mb-4 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      />

      <label htmlFor='imgUrl'>URL de la imagen:</label>
      <input
        type='url'
        id='imgUrl'
        name='imgUrl'
        defaultValue={defaultValues?.imgUrl || ''}
        className='mb-4 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      />

      <label htmlFor='descripcion'>Descripción:</label>
      <input
        id='descripcion'
        name='descripcion'
        defaultValue={defaultValues?.descripcion || ''}
        className='mb-4 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      />

      <label htmlFor='categoria'>Categoría:</label>
      <select
        id='categoria'
        name='categoria'
        className='mb-4 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      >
        <option value={defaultValues?.categoria || ''}>
          Categoría por defecto: {defaultValues?.categoria || ''}
        </option>
        <option value='Camiseta'>Camisetas</option>
        <option value='Jean'>Jeans</option>
        <option value='Zapato'>Zapatos</option>
        <option value='Otros'>Otros</option>
      </select>

      <label htmlFor='talla'>Talla:</label>
      <select
        id='talla'
        name='talla'
        className='mb-4 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      >
        <option value={defaultValues?.talla || ''}>
          Talla por defecto: {defaultValues?.talla || ''}
        </option>
        <option value='XS'>XS</option>
        <option value='S'>S</option>
        <option value='M'>M</option>
        <option value='L'>L</option>
        <option value='XL'>XL</option>
      </select>

      <label htmlFor='color'>Color:</label>
      <input
        type='text'
        id='color'
        name='color'
        defaultValue={defaultValues?.color || ''}
        className='mb-4 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      />

      <label htmlFor='fit'>Fit:</label>
      <select
        id='fit'
        name='fit'
        className='mb-4 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      >
        <option value={defaultValues?.fit || ''}>
          Ajuste por defecto: {defaultValues?.fit || ''}
        </option>
        <option value='Regular'>Regular</option>
        <option value='Slim-fit'>Slim Fit</option>
        <option value='Oversize'>Oversize</option>
      </select>

      <label htmlFor='genero'>Género:</label>
      <select
        id='genero'
        name='genero'
        className='mb-4 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      >
        <option value={defaultValues?.genero || ''}>
          Opción por defecto: {defaultValues?.genero || ''}
        </option>
        <option value='Hombre'>Hombre</option>
        <option value='Mujer'>Mujer</option>
        <option value='Unisex'>Unisex</option>
      </select>

      <label htmlFor='temporada'>Temporada:</label>
      <input
        type='text'
        id='temporada'
        name='temporada'
        defaultValue={defaultValues?.temporada || ''}
        className='mb-4 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      />

      <label htmlFor='precio'>Precio:</label>
      <input
        type='number'
        id='precio'
        name='precio'
        min='0'
        step='0.01'
        defaultValue={defaultValues?.precio || ''}
        className='mb-4 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
      />

      <label htmlFor='cantidad'>Cantidad:</label>
      <input
        type='number'
        id='cantidad'
        name='cantidad'
        min='0'
        defaultValue={defaultValues?.cantidad || ''}
        className='mb-4 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
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

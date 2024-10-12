import { useState, useEffect, useContext } from 'react';
import { useAsideMenu } from '../../Hooks/useAsideMenu';
import { HiPlus, HiOutlineRefresh } from 'react-icons/hi';
import { AppContext } from '../../Context';
import AsideMenu from '../../Components/AsideMenu';
import ProductCard from '../../Components/ProductCard';
import ProductForm from '../../Components/ProductForm';

const Admin = () => {
  const {
    api,
    account,
    loading,
    setLoading,
    setError,
    getProducts: reloadStoreProducts,
  } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState('list');
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/products/${account.id}`);
      setProducts(response.data);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleCreate = async (data) => {
    try {
      setLoading(true);
      const response = await api.post('/product', data, {
        headers: {
          Authorization: `bearer ${account?.token}`,
        },
      });
      setProducts([...products, response.data]);
      setShowForm('list');
      setLoading(false);
      setError(false);
      closeForm();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleUpdate = async (data) => {
    try {
      setLoading(true);
      const response = await api.put(`/product/${selectedProduct.id}`, data, {
        headers: {
          Authorization: `bearer ${account?.token}`,
        },
      });
      setProducts(
        products.map((product) =>
          product.id === selectedProduct.id ? response.data : product
        )
      );
      setShowForm('list');
      setLoading(false);
      setError(false);
      closeForm();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await api.delete(`/product/${id}`, {
        headers: {
          Authorization: `bearer ${account?.token}`,
        },
      });
      setProducts(products.filter((product) => product.id !== id));
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const {
    isOpen: isFormOpen,
    openMenu: openForm,
    closeMenu: closeForm,
  } = useAsideMenu(false);

  const loadProductData = (product) => {
    setSelectedProduct(product);
    openForm();
    setShowForm('update');
  };

  return (
    <>
      <h1 className='font-medium text-xl text-center'>Administrador</h1>
      <div className='flex justify-between m-4 gap-4'>
        <button
          className='flex  items-center gap-2 w-fit py-3 px-6 rounded-lg font-semibold bg-black text-white'
          onClick={() => {
            openForm();
            setShowForm('create');
            setSelectedProduct({});
          }}
          disabled={loading}
        >
          <span>
            <HiPlus className='h-5 w-5 text-white' />
          </span>
          Nuevo Producto
        </button>
        <button
          className='flex  items-center gap-2 w-fit py-3 px-6 rounded-lg font-semibold bg-black text-white'
          onClick={() => {
            reloadStoreProducts();
          }}
          disabled={loading}
        >
          <span>
            <HiOutlineRefresh className='h-5 w-5 text-white' />
          </span>
          Actualizar Tienda
        </button>
      </div>
      <div className='grid grid-cols-auto-fit-56 justify-center gap-4 w-full max-w-screen-lg'>
        {loading ? (
          <p className='col-span-4 text-center font-light'>
            Cargando Productos...
          </p>
        ) : (
          products.map((item) => (
            <ProductCard
              key={item.id}
              adminMode={true}
              loadProductData={loadProductData}
              deleteProduct={handleDelete}
              product={item}
            />
          ))
        )}
      </div>
      <AsideMenu
        isOpen={isFormOpen}
        closeMenu={closeForm}
        title={
          showForm === 'create' ? 'Crear Nuevo Producto' : 'Actualizar Producto'
        }
      >
        <ProductForm
          formMode={showForm}
          onSubmit={showForm === 'create' ? handleCreate : handleUpdate}
          defaultValues={selectedProduct}
        />
      </AsideMenu>
    </>
  );
};

export default Admin;

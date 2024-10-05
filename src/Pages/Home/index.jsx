import { useContext } from 'react';
import { AppContext } from '../../Context';
import { Link } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard';
import './styles.css';

const Home = () => {
  const highlights = [
    { title: 'Envío Gratis', description: 'En pedidos mayores a $100' },
    { title: 'Soporte 24/7', description: 'Siempre estamos aquí para ayudar' },
    {
      title: 'Garantía Extendida',
      description: 'En devoluciones y reembolso',
    },
  ];

  const salesOffers = [
    {
      title: 'Llegó Halloween',
      discount: 'Obtén hasta un 50%',
      image:
        'https://images.unsplash.com/photo-1477659803863-c1bf91b34c90?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: '¡Estamos de Aniversario!',
      discount: 'Hasta un 75% de descuento',
      image:
        'https://images.unsplash.com/photo-1633683788845-e9db07766e42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const { products, productsLoading } = useContext(AppContext);
  const popularProducts = products?.slice(0, 3);

  return (
    <div className='container md:p-4 home-section'>
      {/* Hero Section */}
      <section className=' py-20 text-center rounded-lg bg-gray-100/70'>
        <h1 className='text-4xl font-bold mb-4'>
          ¡Bienvenido a nuestra Tienda!
        </h1>
        <p className='text-xl mb-8'>Productos de calidad en un solo lugar</p>
        <div className='flex flex-wrap justify-center gap-4'>
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className='w-full md:w-1/3 lg:w-1/4 px-4 py-6 bg-white rounded-lg shadow-md'
            >
              <h3 className='text-xl font-semibold mb-2'>{highlight.title}</h3>
              <p className='text-gray-600'>{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sales Offers Section */}
      <section className='md:m-12 py-12 md:rounded-lg bg-white w-full md:w-auto'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Ofertas de Temporada
        </h2>
        <div className='flex flex-wrap justify-center gap-4'>
          {salesOffers.map((offer, index) => (
            <div key={index} className='w-full md:w-1/2 lg:w-1/3 px-4'>
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <img
                  src={offer.image}
                  alt={offer.title}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2'>{offer.title}</h3>
                  <p className='text-red-500 font-semibold'>{offer.discount}</p>
                  <Link to={'/store'}>
                    <button className='mt-4 bg-neutral-800 hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded-lg'>
                      Comprar Ahora
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className='p-12 bg-gray-50 rounded-lg'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Productos Populares
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center'>
          {productsLoading ? (
            <p className='col-span-4 text-center font-light'>
              Cargando Productos...
            </p>
          ) : (
            popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;

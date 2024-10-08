import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context';

const LogInForm = ({ setShowSignUpForm }) => {
  const { api, setLoading, setError, setSignOut, setAccount } =
    useContext(AppContext);

  // Login Request
  const login = async (data) => {
    try {
      setLoading(true);
      const response = await api.post('/login/', data);
      setAccount(response.data);
      setSignOut(false);
      setLoading(false);
      setError(false);
      navigate('/store');
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  // FormData
  const form = useRef(null);
  const handleSignIn = () => {
    const formData = new FormData(form.current);
    const userData = {
      nombreUsuario: formData.get('user'),
      contrasena: formData.get('password'),
    };

    login(userData);
  };

  // Login Success
  const navigate = useNavigate();

  return (
    <>
      <form
        ref={form}
        className='flex flex-col justify-between gap-4 w-72 sm:w-80'
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <div className='flex flex-wrap justify-between gap-4 p-4'>
          <label className='w-1/3 text-end' htmlFor='user'>
            usuario:
          </label>
          <input
            className='w-3/5 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
            id='user'
            type='user'
            name='user'
            required
          />
          <label className='w-1/3 text-end' htmlFor='pass'>
            contraseña:
          </label>
          <input
            className='w-3/5 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
            id='pass'
            type='password'
            name='password'
            required
          />
        </div>
        <button className='w-full py-3 rounded-lg font-semibold bg-black text-white'>
          Ingresar
        </button>
        <button
          className='py-3 rounded-lg font-semibold border border-black  text-black'
          onClick={() => setShowSignUpForm(true)}
        >
          Registrarse
        </button>
      </form>
    </>
  );
};

export default LogInForm;

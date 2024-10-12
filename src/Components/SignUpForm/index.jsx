import { useContext, useRef } from 'react';
import { AppContext } from '../../Context';

function SignUpForm({ setShowSignUpForm, formMode }) {
  const { api, setLoading, setError } = useContext(AppContext);
  const signUp = async (data) => {
    try {
      setLoading(true);
      const response = await api.post('/user', data);
      console.log(response.data);
      setLoading(false);
      setError(false);
      setShowSignUpForm(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const form = useRef(null);

  const createAccount = () => {
    const formData = new FormData(form.current);
    const newAccount = {
      nombre: formData.get('name'),
      apellido: formData.get('lastName'),
      nombreUsuario: formData.get('username'),
      correo: formData.get('email'),
      contrasena: formData.get('pass'),
    };
    signUp(newAccount);
  };

  return (
    <form
      ref={form}
      className='flex flex-col w-72 sm:w-80 bg-white'
      onSubmit={(e) => {
        e.preventDefault();
        createAccount();
      }}
    >
      <label htmlFor='username'>Usuario:</label>
      <input
        className='mt-1 mb-6 p-3 border border-black rounded-lg text-sm'
        id='username'
        name='username'
        type='text'
        placeholder='Peter'
        required
      />
      <label htmlFor='name'>Nombre:</label>
      <input
        className='mt-1 mb-6 p-3 border border-black rounded-lg text-sm'
        id='name'
        name='name'
        type='text'
        placeholder='Peter'
        required
      />
      <label htmlFor='lastName'>Apellido:</label>
      <input
        className='mt-1 mb-6 p-3 border border-black rounded-lg text-sm'
        id='lastName'
        name='lastName'
        type='text'
        placeholder='Peter'
        required
      />
      <label htmlFor='email'>e-mail:</label>
      <input
        className='mt-1 mb-6 p-3 border border-black rounded-lg text-sm'
        id='email'
        name='email'
        type='email'
        placeholder='h1@helloworld.com'
        required
      />
      <label htmlFor='pass'>Crea tu contraseña:</label>
      <input
        className='mt-1 mb-6 p-3 border border-black rounded-lg text-sm'
        id='pass'
        name='pass'
        type='password'
        placeholder='1234'
        required
      />
      <button className='py-3 rounded-lg font-semibold bg-black text-white disabled:bg-gray-400'>
        {formMode}
      </button>
    </form>
  );
}

export default SignUpForm;

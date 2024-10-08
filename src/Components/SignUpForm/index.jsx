import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../Context';

function SignUpForm({ setShowSignUpForm, formMode }) {
  const { API } = useContext(AppContext);

  const form = useRef(null);
  const [options, setOptions] = useState(null);
  const { data: newUser, loading, error } = useFetch(`${API}/`, options);

  const createAccount = () => {
    const formData = new FormData(form.current);
    const newAccount = {
      name: formData.get(''),
      email: formData.get(''),
      password: formData.get(''),
    };
    setOptions({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAccount),
    });
  };

  useEffect(() => {
    if (newUser) {
      setShowSignUpForm(false);
    }
  }, [newUser]);

  return (
    <form
      ref={form}
      className='flex flex-col w-72 sm:w-80 bg-white'
      onSubmit={(e) => {
        e.preventDefault();
        createAccount();
      }}
    >
      <label htmlFor='name'>Nombre:</label>
      <input
        className='mt-1 mb-6 p-3 border border-black rounded-lg text-sm'
        id='name'
        type='text'
        placeholder='Peter'
        required
      />
      <label htmlFor='email'>e-mail:</label>
      <input
        className='mt-1 mb-6 p-3 border border-black rounded-lg text-sm'
        id='email'
        type='email'
        placeholder='h1@helloworld.com'
        required
      />
      <label htmlFor='pass'>Crea tu contraseña:</label>
      <input
        className='mt-1 mb-6 p-3 border border-black rounded-lg text-sm'
        id='pass'
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

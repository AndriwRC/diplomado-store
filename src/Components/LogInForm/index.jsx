import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context';
import { useFetch } from '../../Hooks/useFetch';

const LogInForm = ({ setShowSignUpForm }) => {
  const { API, setSignOut, setAccount } = useContext(AppContext);
  const form = useRef(null);

  const [options, setOptions] = useState(null);
  const { data: user, loading, error } = useFetch(`${API}/login`, options);

  const handleSignIn = () => {
    const formData = new FormData(form.current);
    const data = {
      nombreUsuario: formData.get('user'),
      contrasena: formData.get('password'),
    };

    setOptions({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setAccount(user);
      setSignOut(false);
      navigate('/store');
    }
  }, [user]);

  return (
    <form
      ref={form}
      className='flex flex-col justify-between gap-4 w-72 sm:w-80'
      onSubmit={(e) => e.preventDefault()}
    >
      <div className='flex flex-wrap justify-between gap-4 p-4'>
        <label className='w-1/3 text-end' htmlFor='user'>
          user:
        </label>
        <input
          className='w-3/5 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
          id='user'
          type='user'
          name='user'
        />
        <label className='w-1/3 text-end' htmlFor='pass'>
          password:
        </label>
        <input
          className='w-3/5 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
          id='pass'
          type='password'
          name='password'
        />
      </div>
      <button
        className='w-full py-3 rounded-lg font-semibold bg-black text-white'
        onClick={handleSignIn}
      >
        Login
      </button>
      <button
        className='py-3 rounded-lg font-semibold border border-black  text-black'
        onClick={() => setShowSignUpForm(true)}
      >
        Sign Up
      </button>
    </form>
  );
};

export default LogInForm;

import { HiX } from 'react-icons/hi';

const Modal = ({ isLoading, isOpen, close, error }) => {
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='relative bg-white rounded-lg shadow-lg p-6 w-96 max-w-full grid place-content-center'>
            {!isLoading && (
              <button
                onClick={close}
                className='absolute top-0 right-0 bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-900 transition-colors duration-200'
              >
                <HiX className='w-6 h-6' />
              </button>
            )}
            {isLoading && (
              <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-neutral-800'></div>
            )}

            {!isLoading && error && (
              <div
                className=' bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative'
                role='alert'
              >
                <span className='block sm:inline'>{error}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

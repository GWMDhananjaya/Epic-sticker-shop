import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input type='file' hidden accept='image/*' />
        <img
          alt='profile'
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
        <p className='text-sm self-center'></p>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
        />
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
        />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>
          Update
        </button>
        <Link
          className='bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95'
          to={'/create-listing'}
        >
          Create Listing
        </Link>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>

      <p className='text-red-700 mt-5'></p>
      <p className='text-green-700 mt-5'></p>
      <button className='text-green-700 w-full'>Show Listings</button>
      <p className='text-red-700 mt-5'></p>

      <div className='flex flex-col gap-4'>
        <h1 className='text-center mt-7 text-2xl font-semibold'>Your Listings</h1>
        <div className='border rounded-lg p-3 flex justify-between items-center gap-4'>
          <Link to='#'>
            <img alt='listing cover' className='h-16 w-16 object-contain' />
          </Link>
          <Link className='text-slate-700 font-semibold hover:underline truncate flex-1' to='#'>
            <p>Listing Name</p>
          </Link>
          <div className='flex flex-col item-center'>
            <button className='text-red-700 uppercase'>Delete</button>
            <Link to='#'>
              <button className='text-green-700 uppercase'>Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

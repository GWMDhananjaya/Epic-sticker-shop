import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Header() {
 

  return (
    <header className='bg-soft-green shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className="font-bold text-lg sm:text-2xl flex items-center gap-3 relative">
            <span className="text-slate-600">epic</span>
            <div className="relative flex flex-col items-center">
              <span className="absolute top-[1px] w-3 h-3 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-bounce"></span>
              <span className="block h-0.5 w-20 bg-green-500"></span>
            </div>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button type='submit'>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
        
        </ul>
      </div>
    </header>
  );
}

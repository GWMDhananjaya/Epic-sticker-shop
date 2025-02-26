import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className='flex flex-col gap-2'>
      <p>
        Contact <span className='font-semibold'>[Landlord Name]</span> for{' '}
        <span className='font-semibold'>[Listing Name]</span>
      </p>
      <textarea
        name='message'
        id='message'
        rows='2'
        placeholder='Enter your message here...'
        className='w-full border p-3 rounded-lg'
      ></textarea>

      <Link
        to='#'
        className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
      >
        Send Message
      </Link>
    </div>
  );
}

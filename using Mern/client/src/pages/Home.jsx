import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  return (
    <div>
      {/* Top Section */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next perfect <span className='text-slate-500'>modification</span>
          <br />
          with ease at Epic.
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Epic is your go-to shop for vehicle modification parts and custom stickers,
          <br />
          offering a wide range of accessories to perfect your ride.
        </div>
        <Link to={'/search'} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
          {/* Let's get started... */}
        </Link>
      </div>

      {/* Swiper Section */}
      <Swiper navigation>
        <SwiperSlide>
          <div className='h-[500px] bg-gray-300'></div>
        </SwiperSlide>
      </Swiper>

      {/* Listings Section */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        <div>
          <div className='my-3'>
            <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
            <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>
              Show more offers
            </Link>
          </div>
          <div className='flex flex-wrap gap-4'>
            <ListingItem />
          </div>
        </div>
        <div>
          <div className='my-3'>
            <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
            <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>
              Show more places for rent
            </Link>
          </div>
          <div className='flex flex-wrap gap-4'>
            <ListingItem />
          </div>
        </div>
        <div>
          <div className='my-3'>
            <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
            <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>
              Show more places for sale
            </Link>
          </div>
          <div className='flex flex-wrap gap-4'>
            <ListingItem />
          </div>
        </div>
      </div>
    </div>
  );
}
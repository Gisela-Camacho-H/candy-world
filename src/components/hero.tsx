"use client";
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {

  return (
    <div className="hero">
      <div className='flex-1 items-center'>
        <div className='flex flex-col items-center justify-center lg:mb-20 ml-4'>
        <h1 className='hero__title'>
          Find the best candies in the world - quickly
          and easily!
        </h1>
        <p className='hero__subtitle'>
        each country offering unique and delicious options.
        </p>
        <Link
            href="/products/"
            className='btn-primary text-white btn mt-4 lg:mt-20'>Expore Our Candies
        </Link>
        </div>
      </div>
      <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src="https://m.media-amazon.com/images/I/81+9FgfywPL._AC_SX679_.jpg"
            alt="candies" 
            fill
            className='rounded-badge rounded-b-badge'
            />
        </div>
      </div>
    </div>
  )
}

export default Hero
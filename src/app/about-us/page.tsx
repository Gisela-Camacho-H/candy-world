import Hero from "@/components/hero";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png"

export default async function AboutUs() {

    return (
        <div className="flex xl:flex-row flex-col gap-2 relative z-0 max-h-[800px] max-w-[1300px] m-2 mb-52">
        <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
          <div className='relative xl:w-full w-[90%] xl:h-full sm:h-[550px] md:h-[650px] z-0'>
            <Image src={logo}
            alt="candies" 
            width={700}
            height={700}
            className='rounded-badge rounded-b-badge mask mask-hexagon'
            />
        </div>
      </div>
      <div className='flex-1 items-center'>
        <div className='flex flex-col items-center justify-center xl:mb-20 md:mb-24s'>
        <h1 className='sm:text-[42px] text-[28px] font-extrabold my-10 text-accent'>
          - About Us -
        </h1>
        <p className='text-[18px] font-light lg:mt-10 text-accent'>
        Candies Around the World was born in 2023 as a BYU-Idaho course final project
        but it started to grow fast into a good idea to start a good bussines using 
        the knowledge about the web sites and the research of different traditional
        candies of the world.
        </p>
        <Link
            href="/products/"
            className='btn-success btn sm:mt-4 xl:mt-20 mt-6'>Expore Our Candies
        </Link>
        </div>
      </div>
    </div>
)
  }
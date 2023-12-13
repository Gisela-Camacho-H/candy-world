import React from 'react'
import CountryCard from '@/components/Countrycard'
import { prisma } from '@/lib/db/prisma';

export default async function Countries() {

    const countries = await prisma.country.findMany({
        orderBy: { id: "desc" }
      });

  return (
    <div>
      <h1 className='lg:text-5xl text-4xl text-warning font-bold text-center lg:my-10'>Countries of Our Candies</h1>
      <div className='mx-10 my-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20'>
      {countries.map(country => (
        <CountryCard country={country} key={country.id}></CountryCard>
      ))}
      </div>
    </div>
  )
}

import PaginationBar from '@/components/PaginationBar'
import ProductCard from '@/components/ProductCard'
import { prisma } from '@/lib/db/prisma';
import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  searchParams: { page: string };
}

export default async function Products({searchParams: { page = "1" },
}: ProductProps) {
  const currentPage = parseInt(page);

  const pageSize = 6;
  const heroItemCount = 1;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    <div className='flex flex-col items-center'>
      {currentPage === 1 && (
      <div className='my-10 rounded-xl bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <Image 
            src={products[0].imageUrl}
            alt={products[0].name}
            width={100}
            height={200}
            className='w-full max-w-sm rounded-lg p-12'
            priority
          />
          <div>
            <h1 className='text-5xl font-bold text-accent'>{products[0].name}</h1>
            <p className='py-6 text-accent'>{products[0].description}</p>
            <Link
            href={"/products/" + products[0].id}
            className='btn-success btn'>CHECK IT OUT
            </Link>
          </div>
        </div>
      </div>
      )}

      <div className='mx-10 my-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20'>
        {products.slice(1).map(product => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </div>
      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
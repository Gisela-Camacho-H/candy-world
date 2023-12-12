import NotFoundPage from "@/app/not.found"
import { notFound } from "next/navigation"
import Image from "next/image"
import PriceTag from "@/components/priceTag"
import { cache } from "react"
import { Metadata } from "next"
import AddToCartButton from "./AddToCartButton"
import { incrementProductQuantity } from "./actions"
import { prisma } from "@/lib/db/prisma"

interface ProductPagaProps {
    params: {
        id: string,
    }
}

const getProduct = cache(async (id: string) => {
    const product = await prisma.product.findUnique({where: {id}})
    if (!product) notFound();
    return product;
});

export async function generateMetadata({
    params: {id},
}: ProductPagaProps): Promise<Metadata> {
    const product = await getProduct(id);
    return {
        title: product.name + " - Candies Around the world",
        description: product.description,
        openGraph: {
            images: [{ url: product.imageUrl}]
        },
    };
}

export default async function ProductPage(
    {params: {id}} : ProductPagaProps
) {
    const product = await getProduct(id);
    return(
        <div className="flex flex-col lg:flex-row gap-x-10 lg:gap-20 lg:px-16 lg:items-center mx-2">
            <Image 
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
            priority
            />
            <div className="rounded-2xl p-10 lg:my-6 lg:mr-4">
                <h1 className="lg:text-5xl text-4xl font-bold m-4 lg:my-8">{product.name}</h1>
                <PriceTag price={product.price} className="mt-4 bg-warning text-black" />
                <p className="py-12 mt-2 lg:text-xl">{product.description}</p>
                {product.country == "Japan" &&
                    <div className="my-2">
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/510px-Flag_of_Japan.svg.png"
                            alt="Japan"
                            width={100}
                            height={60}
                            className="bordered border-gray-200 border-2"/>
                    </div>
                }
                {product.country == "Mexico" &&
                    <div className="my-2">
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/400px-Flag_of_Mexico.svg.png"
                            alt="Mexico"
                            width={100}
                            height={60}
                            className="bordered border-gray-200 border-2"/>
                    </div>
                }
                {product.country == "France" &&
                    <div className="my-2">
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/510px-Flag_of_France.svg.png"
                            alt="France"
                            width={100}
                            height={60}
                            className="bordered border-gray-200 border-2"/>
                    </div>
                }
                {product.country == "Korea" &&
                    <div className="my-2">
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/510px-Flag_of_South_Korea.svg.png"
                            alt="Korea"
                            width={100}
                            height={60}
                            className="bordered border-gray-200 border-2"/>
                    </div>
                }
                {product.country == "Philippines" &&
                    <div className="my-2">
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/510px-Flag_of_the_Philippines.svg.png"
                            alt="Philippines"
                            width={100}
                            height={60}
                            className="bordered border-gray-200 border-2"/>
                    </div>
                }
                <AddToCartButton 
                productId={product.id} 
                incrementProductQuantity={incrementProductQuantity}/>
            </div>
        </div>
    );
}
import { Product } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import PriceTag from "./priceTag"

interface ProductCardProps {
    product: Product
}


export default function ProductCard({product}: ProductCardProps) {

    const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 *24 *7;

    return(
        <Link 
        href={"/products/" + product.id}
        className="card w-full bg-white hover:scale-110 hover:shadow-xl transition-shadow"
        >
            <figure>
                <Image 
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={200}
                    className="h-48 object-cover px-8"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-neutral font-extrabold">{product.name}
                </h2>
                {isNew && <div className="badge badge-success">NEW</div>}
                <p className="text-black">{product.description}</p>
                <PriceTag price={product.price} className={""}></PriceTag>
                {product.country == "Japan" &&
                    <div className="my-2">
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/510px-Flag_of_Japan.svg.png"
                            alt="Japan"
                            width={50}
                            height={30}
                            className="bordered border-gray-200 border-2"/>
                    </div>
                }
                {product.country == "Mexico" &&
                    <div className="my-2">
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/400px-Flag_of_Mexico.svg.png"
                            alt="Mexico"
                            width={50}
                            height={30}
                            className="bordered border-gray-200 border-2"/>
                    </div>
                }
                {product.country == "France" &&
                    <div className="my-2">
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/510px-Flag_of_France.svg.png"
                            alt="France"
                            width={50}
                            height={30}
                            className="bordered border-gray-200 border-2"/>
                    </div>
                }
                {product.country == "Korea" &&
                    <div className="my-2">
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/510px-Flag_of_South_Korea.svg.png"
                            alt="Korea"
                            width={50}
                            height={30}
                            className="bordered border-gray-200 border-2"/>
                    </div>
                }
                {product.country == "Philippines" &&
                    <div className="my-2">
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/510px-Flag_of_the_Philippines.svg.png"
                            alt="Philippines"
                            width={50}
                            height={30}
                            className="bordered border-gray-200 border-2"/>
                    </div>
                }
                </div>
        </Link>
    )
}
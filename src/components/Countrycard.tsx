import { Country } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

interface CountryCardProps {
    country: Country
}


export default function ProductCard({country}: CountryCardProps) {

    return(
        <Link 
        href={"/countries/" + country.id}
        className="card w-full bg-gray-200 hover:scale-110 transition-shadow"
        >
            <figure>
                <Image 
                    src={country.flag}
                    alt={country.name}
                    width={400}
                    height={200}
                    className="h-48 object-cover px-6"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-neutral font-extrabold">{country.name}
                </h2>
                <p className="text-black">{country.description}</p>
            </div>
        </Link>
    )
}
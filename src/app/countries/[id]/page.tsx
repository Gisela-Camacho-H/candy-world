import { notFound } from "next/navigation"
import Image from "next/image"
import { cache } from "react"
import { Metadata } from "next"
import { prisma } from "@/lib/db/prisma"

interface CountryPageProps {
    params: {
        id: string,
    }
}

const getCountry = cache(async (id: string) => {
    const country = await prisma.country.findUnique({where: {id}})
    if (!country) notFound();
    return country;
});

export async function generateMetadata({
    params: {id},
}: CountryPageProps): Promise<Metadata> {
    const country = await getCountry(id);
    return {
        title: country.name + " - Candies Around the world",
        description: country.description,
        openGraph: {
            images: [{ url: country.flag}]
        },
    };
}

export default async function CountryPage(
    {params: {id}} : CountryPageProps
) {
    const country = await getCountry(id);
    return(
        <div className="flex flex-col lg:flex-row gap-x-10 lg:gap-20 lg:px-16 lg:items-center mx-2">
            <Image 
            src={country.flag}
            alt={country.name}
            width={500}
            height={500}
            className="rounded-lg"
            priority
            />
            <div className="rounded-2xl p-4 lg:mr-4">
                <h1 className="lg:text-5xl text-4xl text-warning font-bold text-center lg:my-10">{country.name}</h1>
                <p className="xl:py-8 py-4 mt-2 lg:text-xl">{country.description}</p>
                <p className="xl:py-6 py-2 mt-2 lg:text-xl"> Area: {country.area}</p>
                <p className="xl:py-6 py-2 mt-2 lg:text-xl"> Capital: {country.capital}</p>
                <p className="xl:py-6 py-2 mt-2 lg:text-xl"> Location: {country.location}</p>
                <p className="xl:py-6 py-2 mt-2 lg:text-xl"> Official Language: {country.offLanguage}</p>
                <p className="xl:py-6 py-2 mt-2 lg:text-xl"> Population: {country.population}</p>
            </div>
        </div>
    );
}
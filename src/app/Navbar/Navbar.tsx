import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/candy-shop.png"
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Session } from "next-auth";

async function searchProducts(formData: FormData) {
    "use server";
    const searchQuery =  formData.get("searchQuery")?.toString();
    
    if(searchQuery) {
        redirect("/search?query=" + searchQuery);
    }
}

interface NavbarProps {
    session: Session | null;
  }

export default async function Navbar() {

    const cart = await getCart();
    const session = await getServerSession(authOptions)
    const user = session?.user;

    return (
        <div className="bg-base-100">
            <div className="navbar max-w-[1300px] flex-col md:flex-row xs:flex-row lg:gap-60 gap-4 md:gap-56 lg:px-10">
                <div className="flex-1 mr-4">
                    <Link href="/" className="btn btn-ghost text-xl normal-case">
                        <Image
                            src={logo} alt="logo"
                            width={40} height={40}
                             /> Candies around the world
                            
                    </Link>
                </div>
                <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold text-lg">
                    <li><a href="/products">Products</a></li>
                    <li><a href="/countries">Countries</a></li>
                    {user ? (
                        <li><a href="/add-product">Add Product</a></li>
                        ) : (
                        <li><a href="/about-us">About Us</a></li>
                    )}
                </ul>
                </div>
                <div className="flex-none">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input 
                                name="searchQuery"
                                placeholder="Search"
                                className="input input-bordered w-full min-x-[80px]"
                            />
                        </div>
                    </form>
                    <ShoppingCartButton cart={cart} />
                    <UserMenuButton session={session}></UserMenuButton>
                </div>
            </div>
        </div>
    )
}
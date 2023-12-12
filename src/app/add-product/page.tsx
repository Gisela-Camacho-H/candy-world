import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product - Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);
  const country = formData.get("country")?.toString(); 

  if (!name || !description || !imageUrl || !price || !country) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price, country },
  });

  redirect("/");
}

export default async function AddProductPage() {

    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/add-product");
      }

    return(
        <div>
            <h1 className="text-2xl text-primary mb-3 font-bold text-center lg:pt-10">Add Product</h1>
            <form  className="md:mx-56 xl:mx-60" action={addProduct}>
                <input
                required
                name="name"
                placeholder="Name"
                className="mb-6 w-full input input-bordered"
                />
                <textarea
                required
                name="description"
                placeholder="Description"
                className="textarea-bordered textarea mb-6 w-full"
                />
                <input
                required
                name="imageUrl"
                placeholder="Image URL"
                type="url"
                className="mb-6 w-full input input-bordered"
                />
                <input
                required
                name="country"
                placeholder="Country"
                className="mb-6 w-full input input-bordered"
                />
                <input
                required
                name="price"
                placeholder="Price"
                type="number"
                className="mb-6 w-full input input-bordered"
                />
                <FormSubmitButton 
                className="btn-block mb-6">
                    Add Product
                </FormSubmitButton >
            </form>
        </div>
    )
}
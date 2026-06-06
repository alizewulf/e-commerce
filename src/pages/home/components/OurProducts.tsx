import PrimaryButton from "../../../base/button/ButtonPrimary"
import type { Product } from "../../../interfaces/interface"
import ProductCard from "../../../ui/cards/ProductCard"
import Heading from "./Heading"

type Props = {
    products: Product[]
}

function OurProducts({products}:Props) {
    return (
        <section className="flex flex-col gap-15">
            <Heading textContent="Our Products" subTitle="Explore Our Products"/>
            <div className="grid grid-cols-4 gap-7.5">
                {products.slice(8, 16).map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
            <div className="flex justify-center">
                <PrimaryButton className="w-fit">View All Products</PrimaryButton>
            </div>
        </section>
    )
}

export default OurProducts
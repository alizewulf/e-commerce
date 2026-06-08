import PrimaryButton from "../../../base/button/ButtonPrimary"
import type { HomePageProps } from "../../../interfaces/interface"
import ProductCard from "../../../ui/cards/ProductCard"
import { ourProductsTranslation } from "../../../utils/translations/homepage/ourProducts"
import Heading from "./Heading"

function OurProducts({products, state}:HomePageProps) {
    if (!state?.lang || !products) return null;
    const t = ourProductsTranslation[state.lang as keyof typeof ourProductsTranslation];
    return (
        <section className="flex flex-col gap-15">
            <Heading textContent={t.ourProducts} subTitle={t.exploreOurProducts}/>
            <div className="grid grid-cols-4 gap-7.5">
                {products.slice(8, 16).map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
            <div className="flex justify-center">
                <PrimaryButton className="w-fit">{t.viewAllProducts}</PrimaryButton>
            </div>
        </section>
    )
}

export default OurProducts
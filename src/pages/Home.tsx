import { useEffect, useState } from "react"
import { getProducts } from "../services/getProducts"
import type { Product } from "../interfaces/interface"
import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES } from "../shared/styles/textVariables"
import MobilePNG from '../assets/mobile.png'
import AppleSVG from '../assets/Icon-Apple.svg'
import SecondaryArrowSVG from "../ui/icons/SecondaryArrow"
function HomePage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    (async () => {
      const data = await getProducts()
      setProducts(data[0].products)
    })()
  }, [])

  const categories = Object.entries(
    products.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)

  return (
    <section className="py-10 px-33.75 flex flex-1 justify-between gap-15">
    <ul className="flex flex-col gap-4">
      {categories.map(([category]) => (
        <li className={`${TITLE_TEXT_STYLES.md} capitalize`} key={category}>
          {category}
        </li>
      ))}
    </ul>
      <div className="bg-black w-full text-white h-87.5 relative">
        <div className="flex flex-col w-fit gap-5 px-16 pt-15 h-fit">
            <div className="flex flex-row items-center gap-6">
                <img src={AppleSVG} alt="Apple Icon"/>
                <p className={TITLE_TEXT_STYLES.md}>iPhone 14 Series</p>
            </div>
            <h2 className={HEADING_TEXT_STYLES.xl}>Up to 10% <br/> off Voucher</h2>
                <button className={`${TITLE_TEXT_STYLES.md} w-40 cursor-pointer flex items-center gap-3 underline`}>Shop Now <SecondaryArrowSVG/></button>
        </div>
        <img src={MobilePNG} alt="Mobile Icon" className="absolute right-0 top-0"/>
      </div>
    </section>
  )
}

export default HomePage
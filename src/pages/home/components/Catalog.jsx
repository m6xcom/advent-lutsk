import ProductsSlider from "@components/ProductsSlider"

export default function Catalog({parentClass}) {
  return (
    <section className={parentClass + ' catalog section'}>
        <div className="catalog__container container">
            <ProductsSlider/>
        </div>
    </section>
  )
}

import Modal from "./Modal";
import ProductDetails from "./ProductDetails";

function ProductCard({parentClass , modalRef , isOpen, toggleModal}) {
  return (
    <>
        <div className={'product-card'}>
            <picture className="product-card__picture">
                <img className="product-card__img" src="/img/products/product1.png" alt="advent-lutsk" />
            </picture>
            <div className="product-card__footer">
                <h3 className="product-card__title">
                    Ведмідь в носках
                </h3>
                <p className="product-card__description">
                    Бюджетний подарунковий бокс для хлопця🎁 Часто обрати дарунок буває досить важко. День народження, дата відносин, День святого Валентина чи будь-яке інше свято - треба подарунки. З часом ти сидиш та думаєш: "Що йому ще не вистачає?😢".
                </p>
                <div className="product-card__wrap">
                    <p className="product-card__price">
                        160 грн
                    </p>
                    <button className="product-card__order-button" type="button">
                        Замовити
                    </button>
                </div>
                <button type="button" onClick={toggleModal} className="product-card__more">
                    Детальніше
                </button>
            </div>
        </div>
        <ProductDetails parentClass={parentClass} modalRef={modalRef} isOpen={isOpen} toggleModal={toggleModal}/>
    </>
  )
}

export default Modal(ProductCard);
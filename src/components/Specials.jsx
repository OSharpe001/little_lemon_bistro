import { greek_salad, bruchetta, lemon_dessert, moped_icon } from "../assets/images";


export default function Specials() {
    return (
        <section className="specials">
            <article>
                <img
                    className="specials-img"
                    src={greek_salad}
                    alt="salad"
                    />
                <div className="name-price">
                    <h4>Greek Salad</h4>
                    <p className="price">$8.00</p>
                </div>
                <div className="specials-text">
                    <p className="specials-text-p">The famous greek salad of crispy lettuce, peppers, olives and our New York style feta cheese garnished with crunchy garlic and rosemary croutons.</p>
                    <a aria-label="On Click" className="specials-a" href="/order" >Order a delivery
                        <img
                            className="moped"
                            src={moped_icon}
                            alt="moped"
                        />
                    </a>
                </div>
            </article>
            <article>
                <img
                    className="specials-img"
                    src={bruchetta}
                    alt="platter of toasted bread topped with tomatoes and seasoning"
                    />
                <div className="name-price">
                    <h4>Bruchetta</h4>
                    <p className="price">$5.00</p>
                </div>
                <div className="specials-text">
                    <p className="specials-text-p">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <a aria-label="On Click" className="specials-a" href="/order">Order a delivery
                    <img
                        className="moped"
                        src={moped_icon}
                        alt="moped"
                        />
                    </a>
                </div>
            </article>
            <article>
                <img
                    className="specials-img"
                    src={lemon_dessert}
                    alt="slice of lemon cake with lemons in the background"
                    />
                <div className="name-price">
                    <h4>Lemon Dessert</h4>
                    <p className="price">$7.00</p>
                </div>
                <div className="specials-text">
                    <p className="specials-text-p">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <a aria-label="On Click" className="specials-a" href="/order">Order a delivery
                        <img
                            className="moped"
                            src={moped_icon}
                            alt="moped"
                        />
                    </a>
                </div>
            </article>
        </section>
    );
};
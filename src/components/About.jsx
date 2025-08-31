import Mario_and_Adrian_1 from "../assets/images/Mario_and_Adrian_1.jpg";
import Mario_and_Adrian_2 from "../assets/images/Mario_and_Adrian_2.jpg";


export default function About() {
    return (
        <section className="about">
            <div className="description">
                <h2>Little Lemon</h2>
                <p>New York City</p>
                <article>
                    Little Lemon is a charming (imaginary) neighborhood bistro that serves
                    simple food and classic cocktails in a lively but casual
                    environment. The restaurant features a locally-sourced menu
                    with daily specials.
                </article>
            </div>
            <div className="about-pics">
                <img
                    className="pic2"
                    src={Mario_and_Adrian_2}
                    alt="Mario and Adrian discussing the menu"
                    />
                <img
                    className="pic1"
                    src={Mario_and_Adrian_1}
                    alt="Mario and Adrian smiling over a new dish"
                    />
            </div>
        </section>
    );
};
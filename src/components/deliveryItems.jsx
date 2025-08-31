import {
    bruchetta,
    falafel,
    fries,
    clams,
    greek_salad,
    lemon_dessert,
    lemon_chicken_platter,
    onion_rings,
    pasta_salad,
    salmon,
    seared_fish,
    spicy_pasta
} from "../assets/images";


export const Menu = [
    {
        name:"Clams",
        image:<img
            className="item-image"
            src={clams}
            alt="clams"
        />,
        description:"Clams.",
        price:11.00
    },
    {
        name:"Greek Salad",
        image:<img
                className="item-image"
                src={greek_salad}
                alt="salad with red onions and olives and your choice of mozzarella or Feta cheese"
            />,
        description:"Salad with red onions and olives and your choice of mozzarella or Feta cheese.",
        price:8.00
    },
    {
        name:"Little Lemon Chicken",
        image:<img
                className="item-image"
                src={lemon_chicken_platter}
                alt="a plate of chicken chunks with bell peppers, beans with lemon and lime slices"
            />,
        description:"Grilled chicken chunks with bell peppers, beans.",
        price:7.00
    },
    {
        name:"Pasta Salad",
        image:<img
                className="item-image"
                src={pasta_salad}
                alt="pasta salad"
            />,
        description:"Pasta salad.",
        price:8.00
    },
    {
        name:"Salmon",
        image:<img
                className="item-image"
                src={salmon}
                alt="Baked salmon filets"
            />,
        description:"Baked salmon filets.",
        price:10.00
    },
    {
        name:"Seared Fish",
        image:<img
                className="item-image"
                src={seared_fish}
                alt="fish with a lemon on top searing on a grill with potatoes and tomatoes"
            />,
        description:"fish with a lemon on top searing on a grill with potatoes and tomatoes.",
        price:10.00
    },
    {
        name:"Spicy Pasta",
        image:<img
                className="item-image"
                src={spicy_pasta}
                alt="pasta in tomato sauce"
            />,
        description:"Our signature spicy pasta in zesty tomato sauce.",
        price:8.00
    },
    {
        name:"Falafel",
        image:<img
                className="item-image"
                src={falafel}
                alt="falafel balls and salad in a pita bread"
            />,
        description:"Falafel balls and salad in a pita bread.",
        price:6.00
    },
    {
        name:"Bruchetta",
        image:<img
                className="item-image"
                src={bruchetta}
                alt="sliced and toasted italian bread topped with mozzarella, tomatoes, basil and olive oil"
            />,
        description:"Sliced and toasted italian bread topped with mozzarella, tomatoes, basil and olive oil.",
        price:5.00
    },
    {
        name:"Little Lemon Fries",
        image:<img
                className="item-image"
                src={fries}
                alt="french fries"
            />,
        description:"Our signiture zesty french fries.",
        price:7.00
    },
    {
        name:"Onion Rings",
        image:<img
                className="item-image"
                src={onion_rings}
                alt="a plate of onion rings"
            />,
        description:"Onion rings.",
        price:6.00
    },
    {
        name:"Little Lemon Dessert",
        image:<img
                className="item-image"
                src={lemon_dessert}
                alt="slice of lemon cake with lemons in the background"
            />,
        description:"A slice of our signature lemon cake.",
        price:7.00
    },
];
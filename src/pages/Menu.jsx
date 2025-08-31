import { MenuCard } from "../components";
import {
    Appetizers,
    Entrees,
    Soups,
    Off_the_Grill,
    Fish,
    Side_Orders,
    Flame_Brick_Oven,
    Salads,
    Pasta,
    Shish_Kebab,
    Desserts,
    Beverages,
    Liquor
    } from "../components/menuItems";


export default function Menu() {
    return (
        <section className="menu">
            <section className="menu-section">
                <h1>In-House Menu</h1>
                <h2>Appetizers</h2>
                <ul className="menu-list">
                    {Appetizers.map(item =>
                        <li key={item.name}>
                            <MenuCard
                                name={item.name}
                                description={item.description}
                                price={item.price}
                            />
                        </li>
                    )}
                </ul>
                <h2>Entrees</h2>
                <ul className="menu-list">
                {Entrees.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>Soups</h2>
                <ul className="menu-list">
                {Soups.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>Off the Grill</h2>
                <ul className="menu-list">
                {Off_the_Grill.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>Fish</h2>
                <ul className="menu-list">
                {Fish.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>Side Orders</h2>
                <ul className="menu-list">
                {Side_Orders.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>Flame Brick Oven</h2>
                <ul className="menu-list">
                {Flame_Brick_Oven.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>Salads</h2>
                <ul className="menu-list">
                {Salads.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>Pasta</h2>
                <ul className="menu-list">
                {Pasta.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>Shish Kebab</h2>
                <ul className="menu-list">
                {Shish_Kebab.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>Desserts</h2>
                <ul className="menu-list">
                {Desserts.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>Beverages</h2>
                <ul className="menu-list">
                {Beverages.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h1>~~Liquor~~</h1>
                <h2>Wines by the Glass</h2>
                <ul className="menu-list">
                <h3>REDS</h3>
                {Liquor["WINES BY THE GLASS"].REDS.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>WHITES</h3>
                {Liquor["WINES BY THE GLASS"].WHITES.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>ROSÉ</h3>
                {Liquor["WINES BY THE GLASS"].ROSÉ.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>COCKTAILS</h2>
                <ul className="menu-list">
                {Liquor.COCKTAILS.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>WINES BY THE BOTTLE</h2>
                <ul className="menu-list">
                <h3>CABERNET SAUVIGNON</h3>
                {Liquor["WINES BY THE BOTTLE"]["CABERNET SAUVIGNON"].map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>CHIANTI</h3>
                {Liquor["WINES BY THE BOTTLE"].CHIANTI.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>PINOT NOIR</h3>
                {Liquor["WINES BY THE BOTTLE"]["PINOT NOIR"].map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>RED BLEND</h3>
                {Liquor["WINES BY THE BOTTLE"]["RED BLEND"].map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>MALBEC</h3>
                {Liquor["WINES BY THE BOTTLE"].MALBEC.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>CHARDONNAY</h3>
                {Liquor["WINES BY THE BOTTLE"].CHARDONNAY.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>PINOT GRIGIO</h3>
                {Liquor["WINES BY THE BOTTLE"]["PINOT GRIGIO"].map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>SAUVIGNON BLANC</h3>
                {Liquor["WINES BY THE BOTTLE"]["SAUVIGNON BLANC"].map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>ROSÉ</h3>
                {Liquor["WINES BY THE BOTTLE"].ROSÉ.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>PROSECCO & CHAMPAGNE</h3>
                {Liquor["WINES BY THE BOTTLE"]["PROSECCO & CHAMPAGNE"].map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <h2>BEERS</h2>
                <ul className="menu-list">
                {Liquor.BEERS.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
            </section>
        </section>
    );
};

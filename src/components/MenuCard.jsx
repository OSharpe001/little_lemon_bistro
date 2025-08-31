export default function MenuCard({ name, description, price }) {

  return (
    <section className="menu-item" >
      <div className="item" >
          <h4 className="item-name" >{name}</h4>
          <p className="item-description" >{description}</p>
      </div>
        <p className="item-price" >{price}</p>
    </section>
  );
};

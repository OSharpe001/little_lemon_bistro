export default function MenuCard(props) {

  return (
    <section className="menu-item" >
      <div className="item" >
          <h4 className="item-name" >{props.name}</h4>
          <p className="item-description" >{props.description}</p>
      </div>
        <p className="item-price" >{props.price}</p>
    </section>
  );
};

import { useReducer } from "react";


const reducer = (state, action) => {
  if (action.type === "add") return {amount: state.amount + 1};
  if (state.amount>0 && action.type === "subtract") return {amount: state.amount - 1};
};

export default function DeliveryCard({
  price,
  setOrder,
  name,
  image,
  description
}) {
  const initialState = {amount: 0};
  const [state, dispatch] = useReducer(reducer, initialState);
  const cost = price*state.amount;

  const changeAmount = (e) => {
    if (e.target.value==="+") {
      dispatch({type: "add"});
      setOrder([name, state.amount+1, cost+price]);
    } else if (e.target.value==="-") {
      dispatch({type: "subtract"});
      setOrder([name, state.amount-1, cost-price]);

    };
  };

  return (
    <section className="menu-item" >
      <div className="image-and-item">
        {image}
        <div className="item" >
            <h4 className="item-name" >{name}</h4>
            <p className="item-description" >{description}</p>
        </div>
      </div>

        <div className="item-price-amount" >
          <p className="item-price" >${(price).toFixed(2)}</p>
          <div className="item-amount">
            <button className="button" value="+" onClick={state.amount<10?changeAmount:null}>
              +
            </button>

            <h1>{state.amount}</h1>

            <button className="button" value="-" onClick={state.amount>0?changeAmount:null}>
              -
            </button>
          </div>
        </div>
    </section>
  );
};

import {useReducer} from "react";

const reducer = (state, action) => {
  if (action.type === "add") return {amount: state.amount + 1};
  if (state.amount>0 && action.type === "subtract") return {amount: state.amount - 1};
};

export default function DeliveryCard(props) {

  const initialState = {amount: 0};
  const [state, dispatch] = useReducer(reducer, initialState);
  const cost = props.price*state.amount;

  const changeAmount = (e) => {
    if (e.target.value==="+") {
      dispatch({type: "add"});
      props.setOrder([props.name, state.amount+1, cost+props.price]);
    } else if (e.target.value==="-") {
      dispatch({type: "subtract"});
      props.setOrder([props.name, state.amount-1, cost-props.price]);

    };
  };

  return (
    <section className="menu-item" >
      <div className="image-and-item">
        {props.image}
        <div className="item" >
            <h4 className="item-name" >{props.name}</h4>
            <p className="item-description" >{props.description}</p>
        </div>
      </div>

        <div className="item-price-amount" >
          <p className="item-price" >${(props.price).toFixed(2)}</p>
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

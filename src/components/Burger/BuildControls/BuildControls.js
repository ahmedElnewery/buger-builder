import React from "react";
import style from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { type: "meat", label: "Meat" },
  { type: "cheese", label: "Cheese" },
  { type: "bacon", label: "Bacon" },
  { type: "salad", label: "Salad" },
];

const BuildControls = (props) => {
  return (
    <div className={style.buildControls}>
      <p><strong>{props.price.toFixed(2)} $ </strong> </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.type}
            label={ctrl.label}
            increase={() => props.increase(ctrl.type)}
            decrease={() => props.decrease(ctrl.type)}
            type={ctrl.type}
            disabled={props.disabledInfo[ctrl.type]}
          />
        );
      })}
      <button className={style.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>
        Order Now
      </button>
    </div>
  );
};
export default BuildControls;

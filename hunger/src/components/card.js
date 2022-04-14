import React from "react";
import "./Card.css";
import { BiRupee } from "react-icons/bi";
export const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className="product">
        <div className="pro1">
          <img src={props.element.images} alt="imgtag" />
        </div>
        <div className="pro2">
          <div className="prod22">
            <div className="name">{props.element.name}</div>
            <div className="ftype">{props.element.food_type}</div>
            <div className="costone">
              Cost <BiRupee />
              {props.element.cost_for_one} for one
            </div>
          </div>
          <div className="pro23">
            <div className="rating">{props.element.rating}</div>

            <div className="votes">votes {props.element.votes}</div>
            <div className="reviwes">reviwes {props.element.reviews}</div>
          </div>

          <div className="">{props.element.payment_methods.cash}</div>
          <div className="">{props.element.payment_methods.card}</div>
          <div className="">{props.element.payment_methods.upi}</div>
        </div>
      </div>
    </>
  );
};

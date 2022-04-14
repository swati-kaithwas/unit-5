import React, { useState, useEffect } from "react";
import { Card } from "./card";
import uuid from "react-uuid";
import "./display.css";

export const Display = () => {
  const [first, setFirst] = useState([]);
  useEffect(() => {
    Getthedata();
  }, []);

  async function Getthedata() {
    const response = await fetch("http://localhost:3000/data");
    setFirst(await response.json());
  }

  return (
    <>
      <button
        onClick={() => {
          setFirst(first.filter((e) => e.rating >= 4));
        }}
      >
        4 star
      </button>
      <button
        onClick={() => {
          setFirst(first.filter((e) => e.rating >= 3));
        }}
      >
        3 star
      </button>
      <button
        onClick={() => {
          setFirst(first.filter((e) => e.rating >= 2));
        }}
      >
        2 star
      </button>
      <button
        onClick={() => {
          setFirst(first.filter((e) => e.rating >= 1));
        }}
      >
        1 star
      </button>
      <button
        onClick={() => {
          setFirst(first.sort((a, b) => a.rating - b.rating));
        }}
      >
        Price High to Low
      </button>
      <button
        onClick={() => {
          setFirst(first.sort((a, b) => b.rating - a.rating));
        }}
      >
        Price Low to High
      </button>
      <div className="box">
        {first.map((element, i) => (
          <>
            <Card element={element} key={uuid()} />
          </>
        ))}
      </div>
    </>
  );
};

import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>Grandpa: {money}</p>
      <section className="flex">
        <Cousin>Nabila</Cousin>
        <Cousin>Sabila</Cousin>
      </section>
    </div>
  );
};

export default Uncle;

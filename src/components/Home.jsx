/* eslint-disable no-unused-vars */
import { useState } from "react";
import weeklyData from "../assets/data.json";
import Spending from "./Spending";
import Balance from "./Balance";

export default function Home() {
  const [data, setData] = useState(weeklyData);

  return (
    <div className="home">
      <Balance />
      <Spending data={data} />
    </div>
  );
}

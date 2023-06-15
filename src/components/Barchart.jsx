/* eslint-disable react/prop-types */

import Bar from "./Bar";
export default function Barchart({ data }) {
  const maxValue = Math.max(...data.map((item) => item.amount));

  return (
    <div className="bar-chart">
      {data.map((item) => (
        <Bar key={item.day} maxValue={maxValue} item={item} />
      ))}
    </div>
  );
}

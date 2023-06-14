/* eslint-disable react/prop-types */
export default function Barchart({ data }) {
  const maxValue = Math.max(...data.map((item) => item.amount));

  return (
    <div className="bar-chart">
      {data.map((item) => (
        <div className="bar-chart-bar" key={item.day}>
          <div className="bar-chart-label">{item.day}</div>
          <div
            className={`bar-chart-progress${
              item.amount === maxValue ? " max-value" : ""
            }`}
            style={{ height: `${(item.amount / maxValue) * 100}%` }}
          ></div>
        </div>
      ))}
    </div>
  );
}

/* eslint-disable react/prop-types */
import Barchart from "./Barchart";

export default function Spending({ data }) {
  return (
    <div className="spending-card">
      <h2>Spending - Last 7 days</h2>
      <Barchart data={data} />
      <div className="horizontal-line"></div>
      <div className="spending-total">
        <div className="spending-this-month">
          <span>Total this month</span>
          <h2>$478.33</h2>
        </div>
        <div className="spending-last-month">
          <h3>+2.4%</h3>
          <span>from last month</span>
        </div>
      </div>
    </div>
  );
}

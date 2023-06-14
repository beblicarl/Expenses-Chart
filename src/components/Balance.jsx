import logo from "../assets/logo.svg";

export default function Balance() {
  return (
    <div className="balance">
      <div>
        <h2>My balance</h2>
        <span>$921.48</span>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}

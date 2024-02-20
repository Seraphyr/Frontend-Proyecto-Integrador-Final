import arrow from "../../assets/images/homepage/arrow.png";
import "./header.css";

export default function Header({ titulo }) {
  return (
    <div className="header">
      <img src={arrow} alt="arrow" className="arrow" />
      <div className="header__titulo">
        <p>{titulo}</p>
      </div>
    </div>
  );
}

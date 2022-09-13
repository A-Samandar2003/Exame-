import "../assets/btn.scss";
import { Link } from "react-router-dom";
const Btn = ({ name, onclick }) => {
  return (
    <>
      <Link to={name === "Register" ? '/register' : "/login"}>
        <button onClick={onclick} className="btn">{name}</button></Link>
    </>
  );
};

export default Btn;

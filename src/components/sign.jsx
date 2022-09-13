import "../assets/sign.scss";
import Btn from "./btn";
import { Link } from "react-router-dom";
const Sign = ({ formData }) => {
  return (
    <div className="modal-container">
      <h1>LOGIN</h1>

      <form>
        {formData.map((item, idx) => (
          <div key={idx}>
            <label htmlFor={item.label}>{item.label}</label>
            <input
              className="input mt-5"
              placeholder={item.placeHolder}
              type="text"
            />
          </div>
        ))}
      </form>
      <Btn name="Login" />
      <Link to={'/'}><button className="btn btn-primary">back</button></Link>
    </div>
  );
};

export default Sign;

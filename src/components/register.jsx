import { Link } from "react-router-dom";
import "../assets/register.scss";
import Btn from "./btn";

const Register = ({ registerData }) => {
  return (
    <div className="modal-container">
      

      <h1>LOGIN</h1>

      <form>
        {registerData.map((item, idx) => (
          <div key={idx}>
            <label htmlFor={item.label}>{item.label}</label>
            <input
              className="input"
              placeholder={item.placeHolder}
              type="text"
            />
          </div>
        ))}
      </form>
      <Btn name="Register" />
      <Link to={'/'}><button className="btn">back</button></Link>
    </div>
  );
};

export default Register;

import "../assets/modal.scss";
import Btn from "./btn";

const Modal = (props) => {
  return (
    <div className="modal-container">
      <h1 className="title">Hello There</h1>
      <p className="subtext">Welcome to React User App</p>

      <div className="btn-wrapper">
        <Btn name={"Login"} />
        <Btn
          name={"Register"}
          onclick={() => (props.location.pathname = "/register")}
        />
      </div>
    </div>
  );
};

export default Modal;

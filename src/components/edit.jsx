import "../assets/edit.scss";
import Btn from "./btn";

const Edit = ({ data }) => {
  console.log(data);
  return (
    <div className="modal-container">
      <button>log out</button>
      <h1>My profile</h1>

      <form>
        {data.map((item, idx) => (
          <div key={idx}>
            <h3>{item.label}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </form>
      <Btn name="Edit" />
    </div>
  );
};

export default Edit;

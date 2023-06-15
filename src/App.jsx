import { useState } from "react";
import "./App.css";

function App() {
  const [inputFields, setInputFields] = useState([{ name: "" }]);

  const handleFormChange = (i, e) => {
    const data = [...inputFields];
    data[i][e.target.name] = e.target.value;
    setInputFields(data);
  };

  const addFormFields = () => {
    const newfield = { name: "" };
    setInputFields([...inputFields, newfield]);
  };

  const removeFormFields = (i) => {
    const data = [...inputFields];
    data.splice(i, 1);
    setInputFields(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputFields));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputFields.map((element, index) => (
          <div className="form-inline" key={index}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={element.name}
              placeholder="what do you want"
              onChange={(e) => handleFormChange(index, e)}
            />
            {index ? (
              <button
                type="button"
                className="button remove"
                onClick={() => removeFormFields(index)}
              >
                X
              </button>
            ) : null}
          </div>
        ))}
        <div className="button-section">
          <button
            className="button add"
            type="button"
            onClick={() => addFormFields()}
          >
            + Fields
          </button>
          <button className="button submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;

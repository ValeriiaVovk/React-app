import React, { useState } from "react";

function Form() {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    date: "",
    name: "",
  });

  const [formData, setFormData] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormData([
      ...formData,
      {
        // title: `Name of employer: ${formValues.title}`,
        // description: `Role description: ${formValues.description}`,
        // date: `Dates of employment: ${formValues.date}`,
        // name: `Job title: ${formValues.name}`,
        title: `${formValues.title}`,
        description: `${formValues.description}`,
        date: `${formValues.date}`,
        name: `${formValues.name}`,
      },
    ]);
    setFormValues({
      title: "",
      description: "",
      date: "",
      name: "",
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name of employer: <br />
        <input
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Dates of employment: <br />
        <input
          type="text"
          name="date"
          value={formValues.date}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Job title: <br />
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Role description: <br />
        <textarea
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" className="button-submit">
        Add a new job position
      </button>
      <div className="new-job-section">
        {formData.map((data, index) => (
          <div key={index}>
            <p className="new-job">
              Name of employer: 
              <span className="new-job-span">{data.title}</span>
            </p>
            <p className="new-job">
              Dates of employment: 
              <span className="new-job-span">{data.date}</span>
            </p>
            <p className="new-job">
              Job title: 
              <span className="new-job-span">{data.name}</span>
            </p>
            <p className="new-job new-job-last">
              Role description: 
              <span className="new-job-span">{data.description}</span>
            </p>
          </div>
        ))}
      </div>
    </form>
  );
}

export default Form;

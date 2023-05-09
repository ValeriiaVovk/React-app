import './App.css';
import { Contacts } from './components/contacts';
// import { Experience } from './components/experience/experience';
import Image from './components/image';
import photo from "./components/photo.jpg";
import { Counter } from './components/counter';
import { OtherExperience } from './components/experience/experience-render';
import { useState } from "react";
import Form from './components/form';



function App() {
  
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h1 className="heading-name">
          Valeriia <br />
          <span className="heading-surname">Vovk</span>
        </h1>
        <Image
          // path='http://localhost:3000/static/media/photo.f35cdc37784fc2bbf2d2.jpg'
          path={photo}
          alt="my-photo"
        />
        <Contacts />
      </aside>
      <main className="main-content">
        <section className="adaptive">
          <h2 className="heading">Work experience</h2>
          <OtherExperience />
          <Counter />
          {/* <div>
            {formData.map((data, index) => (
              <div key={index}>
                <p className="new-job-title">{data.title}</p>
                <p>{data.date}</p>
                <p>{data.name}</p>
                <p>{data.description}</p>
              </div>
            ))}
          </div> */}
        </section>
        <section className="adaptive">
          <h2 className="form-add">Add a new job position</h2>

          <Form onFormSubmit={handleFormSubmit} />
          
        </section>
      </main>
    </div>
  );
}

export default App;

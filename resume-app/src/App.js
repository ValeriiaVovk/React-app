import './App.css';
import { Contacts } from './components/contacts';
import { Experience } from './components/experience';
import Image from './components/image';
import photo from "./components/photo.jpg";


function App() {
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
        <Experience />
      </main>
    </div>
  );
}

export default App;

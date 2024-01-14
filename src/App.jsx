/* App.jsx */
import React from 'react'; // Asegúrate de importar React
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="d-flex flex-wrap justify-content-around"> 
        <MyCard
          image="https://placedog.net/500/320"
          title="Bartolo"
          colorButton="success"
          textButton="Adoptar"
          description="Lleno de energía y listo para jugar. Dale a Bartolo el hogar amoroso que se merece."
        />

        <MyCard
          image="https://placedog.net/500/310"
          title="Messi"
          colorButton="primary"
          textButton="Alimentar"
          description="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
        />

        <MyCard
          image="https://placedog.net/500/350"
          title="Gohan"
          colorButton="danger"
          textButton="Alimentar"
          description="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional."
        />

        <MyCard
          image="https://placedog.net/500/327"
          title="Princesa"
          colorButton="warning"
          textButton="Alimentar"
          description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!."
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
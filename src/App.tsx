import { Formik } from 'formik';
import React from 'react';
import './App.scss';
import secure from './assets/gl_shield.png'
import illustration from './assets/Illustration-1.png'
import Input from './components/Input';

interface MyFormValues {
  docType: string;
  docNumber: string;
  birthdate: string;
  phoneNumber: string;
}

function App() {

  const initialValues: MyFormValues = {
    docType: '',
    docNumber: '',
    birthdate: '',
    phoneNumber: ''
  }



  return (
    <div className="wrapper-container">
      <div className="side_container">
        <svg className="side_container--shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1014.857 849.225">
          <path id="Path_1" data-name="Path 1" d="M0,0H1014.857s-5.082,370.98-23.694,577.674-25.825,229.565-50.755,249.1-71.546,22.449-71.546,22.449L0,848.326Z" fill="#2f80ed" />
        </svg>

        <img className="side_container--illustration" src={illustration} alt="" />

        <div className="side_container--banner">
          <h1 className="side_container--title">Seguro de <br /> <span>Salud</span></h1>

          <ul className="side_container--list">
            <li className="side_container--list_item">
              <img src={secure} alt="logo" />
              Cómpralo de manera fácil y rápida
            </li>
            <li className="side_container--list_item">
              <img src={secure} alt="logo" />
              Cotiza y compra tu seguro 100% digital
            </li>
            <li className="side_container--list_item">
              <img src={secure} alt="logo" />
              Hasta S/ 12 millones de cobertura anual
            </li>
            <li className="side_container--list_item">
              <img src={secure} alt="logo" />
              Más de 300 clínicas en todo el Perú
            </li>
          </ul>

          <p className="side_container--copy">&copy; RIMAC Seguros y Reaseguros.</p>
        </div>

      </div>

      <div className="main_container">
        <h1>Óbten tu <span>seguro ahora</span></h1>
        <p>Ingresa los datos para comenzar</p>

        <div className="form-container">
          <Formik initialValues={initialValues} onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Input label='Celular' type='text' name='phoneNumber' />
              </form>
            )}
          </Formik>
        </div>

      </div>
    </div>
  );
}

export default App;

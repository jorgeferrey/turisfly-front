
import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col, Form, Button } from 'react-bootstrap';


// URL de la API Laravel


const API_URL = 'http://turisfly.com/public/api/set-usuario';


const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    domicilio: '',
    telefono: '',
    email: '',
    contenido:'',
  });
  
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  
// Function for clearing the form after successful registration
const clearForm = () => {
  setFormData({
    nombre: '',
    apellido: '',
    domicilio: '',
    telefono: '',
    email: '',
    contenido: '',
  });
};


  // Función para manejar el cambio de valores en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // Función para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(API_URL, formData);

      // Si la solicitud es exitosa
      if (response.status === 201) {
        setSuccess(true);
        setErrors([]);
        clearForm(); // Clear the form after successful registration
             
      } else {
        throw new Error('Error al registrar usuario');
      }
    } catch (error) {
      // Si la solicitud falla
      console.log(error);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <>
    <div class="titulo-registro">
                  <p></p>
              </div>
    <div className="contenedor-registro">
        <div className="registro-formulario">
            <div className="registro-titulo">
                <h1>Registrate con nosotros</h1>
            </div>   
            <div className="registro-subtitulo">   
                <p>...Y obten importantes descuentos!!!</p>
            </div>

            {success && <p className="respuesta-back">¡Usuario registrado exitosamente!</p>}
      
            <Form onSubmit={handleSubmit}>
                <Row>
                      <Col xs={12} md={6}>
                        <Form.Group controlId="nombre">
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control type="text" name="nombre" value={formData.name} onChange={handleChange} />
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={6}>
                        <Form.Group controlId="apellido">
                          <Form.Label>Apellido</Form.Label>
                          <Form.Control type="text" name="apellido" value={formData.name} onChange={handleChange} />
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={6}>
                        <Form.Group controlId="domicilio">
                          <Form.Label>Domicilio</Form.Label>
                          <Form.Control type="text" name="domicilio" value={formData.name} onChange={handleChange} />
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={6}>
                        <Form.Group controlId="telefono">
                          <Form.Label>Telefono</Form.Label>
                          <Form.Control type="text" name="telefono" value={formData.name} onChange={handleChange} />
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={6}>
                        <Form.Group controlId="email">
                          <Form.Label>Correo electrónico</Form.Label>
                          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={30}>
                        <Form.Group controlId="contenido">
                          <Form.Label>Tu Mensaje</Form.Label>
                          <Form.Control type="text" name="contenido" value={formData.name} onChange={handleChange} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button variant="primary" type="submit">
                      Registrarse
                    </Button>
                    </Form>

                    {errors.length > 0 && (
                    <ul>
                      {errors.map((error) => (
                        <li key={error}>{error}</li>
                      ))}
                    </ul>
                  )}
              </div>
    
    <div className="registro-imagen">
      <img src="./assets/playa_640.jpg" className="registro-imagen" alt="Imagen página de Registro"/>
    </div>
  </div>  
    </>
   
  );
};

export default Registro

import React, { useState } from 'react';
import styles from "./Formulario.css";

function Formulario() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    photo_url: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();

    // Make a POST request with the form data
    await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Clear the form after submission
    setFormData({
      name: '',
      price: '',
      description: '',
      photo_url: '',
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div className='container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <h1>Novo Produto</h1>
        <h3>Nome</h3>
        <input
          className='input-data'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Nome'
        />

        <h3>Preço</h3>
        <input
          className='input-data'
          type='text'
          name='price'
          value={formData.price}
          onChange={handleInputChange}
          placeholder='Preco'
        />

        <h3>Descrição</h3>
        <input
          className='input-data'
          type='text'
          name='description'
          value={formData.description}
          onChange={handleInputChange}
          placeholder='Descricao'
        />

        <h3>Imagem</h3>
        <input
          className='input-data'
          type='text'
          name='photo_url'
          value={formData.photo_url}
          onChange={handleInputChange}
          placeholder='Img'
        />

        <button className='buttonEnviar' type='submit'>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;

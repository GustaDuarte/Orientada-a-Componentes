import React, { useState } from 'react';
import styles from './Formulario.css';
import usePost from '../hooks/usePost';

function Formulario() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    photo_url: '',
  });

  // Use o hook usePost
  const postRequest = usePost;

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!formData.name || !formData.price || !formData.description || !formData.photo_url) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    // Faz a requisição POST com os dados do formulário usando o hook usePost
    const result = await postRequest('http://localhost:3001/products', formData);

    // Verifica o resultado da requisição
    if (result.success) {
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        name: '',
        price: '',
        description: '',
        photo_url: '',
      });
      alert('Dados enviados com sucesso!');
    } else {
      // Mostra uma mensagem de erro se a requisição falhar
      alert(`Erro ao enviar os dados: ${result.error}`);
    }
  };

  // Função para lidar com mudanças nos inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
          required
        />

        <h3>Preço</h3>
        <input
          className='input-data'
          type='text'
          name='price'
          value={formData.price}
          onChange={handleInputChange}
          placeholder='Preço'
          required
        />

        <h3>Descrição</h3>
        <input
          className='input-data'
          type='text'
          name='description'
          value={formData.description}
          onChange={handleInputChange}
          placeholder='Descrição'
          required
        />

        <h3>Imagem</h3>
        <input
          className='input-data'
          type='text'
          name='photo_url'
          value={formData.photo_url}
          onChange={handleInputChange}
          placeholder='Img-url'
          required
        />

        <button className='buttonEnviar' type='submit'>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;

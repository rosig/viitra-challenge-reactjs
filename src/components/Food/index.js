import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

import { Link } from 'react-router-dom';

const Food = ({ food, handleDelete, handleEditFood, handleUpdateFood }) => {
  const [isAvailable, setIsAvailable] = useState(food.available);

  async function toggleAvailable() {
    // TODO UPDATE STATUS (available)

    // o ideal seria atualizar apenas a propriedade "available",
    // mas não consegui, então enviei o objeto inteiro
    const updatedFood = { ...food, available: !isAvailable };
    handleUpdateFood(updatedFood);
    setIsAvailable(!isAvailable);
  }

  function setEditingFood() {
    // TODO - SET THE ID OF THE CURRENT ITEM TO THE EDITING FOOD AND OPEN MODAL

    // o TODO do handleEditFood é semelhante, logo eu centralizei lá
    // o que deveria ser feito ao clicar em uma comida (setar a comida e abrir o modal)
    handleEditFood(food);
  }

  return (
    <Container available={isAvailable}>
      <Link to={`/food/${food.id}`}>
        <header>
          <img src={food.image} alt={food.name} />
        </header>
        <section className="body">
          <h2>{food.name}</h2>
          <p>{food.description}</p>
          <p className="price">
            R$ <b>{food.price}</b>
          </p>
        </section>
      </Link>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => setEditingFood()}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(food.id)}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};

export default Food;

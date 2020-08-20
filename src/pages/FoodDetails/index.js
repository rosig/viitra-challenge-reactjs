import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FoodDetailsContainer } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const FoodDetails = () => {
  let { foodId } = useParams();
  const [food, setFood] = useState();

  useEffect(() => {
    async function fetchFood() {
      const res = await api.get(`foods/${foodId}`);
      setFood(res.data);
    }

    fetchFood();
  }, [foodId]);

  if (food) {
    return (
      <FoodDetailsContainer>
        <h1>Food</h1>
        <Link to={"/"}>
          <div className="food-icon">
            <AiOutlineArrowLeft size={35} />
          </div>
        </Link>
        <div className="food-wrap">
          <div className="food-infos">
            <h1>{food.name}</h1>
            <h3 className="food-description">{food.description}</h3>
            <h3 className="food-price">{`R$ ${food.price}`}</h3>
            <h3>{`Quantidade: ${food.quantity}`}</h3>
            <h3>{`Tempo de preparo: ${food.timeToCook}`}</h3>
            <h4>
              Disponibilidade:
              <span style={{ color: food.available ? "#39b100" : "#ff0000" }}>
                {food.available ? " Disponível" : " Indisponível"}
              </span>
            </h4>
          </div>
          <div className="food-img">
            <img src={food.image} alt="Food" />
          </div>
        </div>
      </FoodDetailsContainer>
    );
  } else {
    return (
      <FoodDetailsContainer>
        <h1>Food</h1>
        <h2>Carregando ... </h2>
      </FoodDetailsContainer>
    );
  }
};

export default FoodDetails;
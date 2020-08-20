import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

const Dashboard = () => {
  const [foods, setFoods] = useState([]);
  const [editingFood, setEditingFood] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function fetchFoods() {
      const res = await api.get('foods');
      setFoods(res.data);
    }

    fetchFoods();
  }, []);

  async function updateListFoods() {
    const res = await api.get('foods');
    setFoods(res.data);
  }

  async function handleAddFood(food) {
    const newFood = { ...food, id: getNewId(), available: true };

    try {
      // TODO ADD A NEW FOOD PLATE TO THE API
      await api.post('foods', newFood);
      updateListFoods();

    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food) {
    // TODO UPDATE A FOOD PLATE ON THE API
    try {
      await api.put(`foods/${food.id}`, food);
      updateListFoods();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFood(id) {
    // TODO DELETE A FOOD PLATE FROM THE API
    try {
      await api.delete(`foods/${id}`);
      updateListFoods();
    } catch (err) {
      console.log(err);
    }
  }

  function getNewId() {
    let newId = null;
    let found = null;

    for (let id = 1; found !== undefined; id++) {
      found = foods.find(food => food.id === id);
      newId = id;
    }

    return newId;
  }

  //alterei o nome para identificar o modal "Add"
  function toggleAddModal() {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food) {
    // TODO SET THE CURRENT EDITING FOOD ID IN THE STATE
    setEditingFood(food);
    setEditModalOpen(true);
  }

  return (
    <>
      <Header openModal={toggleAddModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleAddModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
              handleUpdateFood={handleUpdateFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;

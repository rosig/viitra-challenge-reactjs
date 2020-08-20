import React, { useRef } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalEditFood = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}) => {
  const formRef = useRef(null);

  // checa se dois objetos são iguais, é uma chegagem bem simples,
  // apenas leva em consideração a ordem das propriedades
  function checksObjectsAreEqual(updatedFood, editingFood) {
    const updatedFoodValues = Object.values(updatedFood).toString();
    const editingFoodValues = Object.values(editingFood).toString();

    if (updatedFoodValues === editingFoodValues) return true;

    return false;
  }

  function handleSubmit(data) {
    // EDIT A FOOD PLATE AND CLOSE THE MODAL
    const updatedFood = { ...data, id: editingFood.id, available: editingFood.available };

    const objectsAreEqual = checksObjectsAreEqual(updatedFood, editingFood);

    // se os objetos foram iguais, não há necessidade de fazer uma solicitação para o servidor,
    // logo basta apenas fechar o modal e o usuário nem vai perceber
    if (!objectsAreEqual) {
      handleUpdateFood(updatedFood);
      setIsOpen();
    } else {
      setIsOpen();
    }
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <Input name="quantity" placeholder="Quantidade de pratos" />
        <Input name="timeToCook" placeholder="Tempo de preparo" />

        <button type="submit">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;

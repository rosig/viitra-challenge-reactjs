import React, { useRef, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalAddFood = ({ isOpen, setIsOpen, handleAddFood }) => {
  const formRef = useRef(null);
  const [warningOpen, setWarningOpen] = useState(false);

  function handleSubmit(data) {
    // TODO ADD A NEW FOOD AND CLOSE THE MODAL

    // checa se alguma string é vazia
    const checkEmptyString = Object.values(data).find(item => item.trim().length === 0);

    if (checkEmptyString === undefined) {
      handleAddFood(data);
      setWarningOpen(false);
      setIsOpen();
    } else { // emite um aviso no formulário
      setWarningOpen(true);
    }
  }

  const ShowWarning = () => {
    if (warningOpen) return <p className="form-warning">Está faltando algo no formulário!</p>;
    else return null;
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <Input name="quantity" placeholder="Quantidade de pratos" />
        <Input name="timeToCook" placeholder="Tempo de preparação" />
        <ShowWarning />
        <button>
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;

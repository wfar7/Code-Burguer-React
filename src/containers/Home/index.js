import React, { useState, useRef,} from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import Logo1 from '../../assets/Logo1.svg'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import {
  Container,
  Imagem,
  InputLabel,
  Input,
 
} from './styles'

function App() {
  //const orders = [];
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  const inputOrder = useRef()
  const inputName = useRef()



  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3001/orders", {
      order: inputOrder.current.value,
      name: inputName.current.value
    })

    setOrders([...orders, newOrder]);
    navigate('/orders')

  }

  return (
    <Container>
      <Imagem alt="Logo-imagem" src={Logo1} />
      <H1>Faça seu Pedido</H1>
      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Digite seu Pedido" />
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome" />
        <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>
    </Container>)

}

export default App
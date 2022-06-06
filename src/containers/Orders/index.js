import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import Logo2 from '../../assets/Logo2.svg'
import Lixeira from '../../assets/Lixeira.svg'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'

import {
  Container,
  Imagem,
  Button,
  Order
 
} from './styles'

function Orders() {
  //const orders = [];
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  

  useEffect(() => {

    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3001/orders")

      setOrders(newOrders);
    }
    fetchOrders()
  }, [])


  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`)
    const newOrder = orders.filter(order => order.id !== orderId)

    setOrders(newOrder)
  }

  function goBackPage(){
    navigate("/")
  }



  return (
    <Container>
      <Imagem alt="Logo-imagem" src={Logo2} />
      <H1>Orders</H1>
      <ContainerItens>

      <ul>
          {orders.map(order => (
            <Order key={order.id}>
              <div><p>{order.order}</p> <p><b>{order.name}</b></p></div>
              <button onClick={() => deleteOrder(order.id)}><img src={Lixeira} alt="lixeira"/></button>
            </Order>
          ))}
        </ul>

        <Button onClick={goBackPage}>Voltar</Button> 
     
      </ContainerItens>
    </Container>)

}

export default Orders
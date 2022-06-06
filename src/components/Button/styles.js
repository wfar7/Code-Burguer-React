import styled from 'styled-components'

export const Button = styled.button`

background: #D93856;
border: none;
width: 342px;
height: 58px;
color: white;
font-size:20px;
outline: none;
cursor:pointer;
margin-top:40px;
display: flex;
align-items: center;
justify-content: center;

&:hover{
    opacity:0.8;
}

&:active{
    opacity: 0.4;
}

`;

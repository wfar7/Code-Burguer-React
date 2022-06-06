import styled from 'styled-components'




export const Container = styled.div`

    background-color: black;
    color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height:100%;
    min-height: 100vh;    

`;

export const Imagem = styled.img`
   
   height:300px;
   margin-top:30px;

`;

export const ContainerItens = styled.div`

    background-color: black;
    padding: 10px 36px;
    display: flex;
    flex-direction: column;
    height:100%;
    min-height: calc(100vh - 170px);
    
`;



export const Button = styled.button`

background: rgba(255, 255, 255, 0.14);
border: none;
width: 342px;
height: 58px;
color: white;
font-size:20px;
outline: none;
cursor:pointer;
margin-top:85px;
display:flex;
justify-content: space-around;
align-items: center;

&:hover{
    opacity:0.8;
}

&:active{
    opacity: 0.4;
}

`;

export const Order = styled.li `

 
    display:flex;
    justify-content: space-around;
    align-items: center;
   
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    width: 342px;
    height: 101px;
    outline:none;
    border:none;
    margin-top:20px;
    padding-top: 15px;
    padding-bottom:15px;
    padding-left:15px;
 
    p{
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        width: 200px;
        margin-bottom:10px;
        
    }

    button{
        background: none;
        border: none;
        cursor: pointer;

    }




`



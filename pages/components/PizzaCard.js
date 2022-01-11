import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import pizza from '../../public/img/PIZ0167.jpg';
function PizzaCard() {
  return (
    <Pizzacard>
        <Image className="pizza__img" src={pizza} alt="" height="250" width="250" />
      <h1 >FIORI DI ZUCCA</h1>
      <span>$19.90</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </Pizzacard>
  )
}

export default PizzaCard

const Pizzacard = styled.div`
    width:22%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    h1{
        font-size:18px;
        font-weight:bold;
        color:#d1411e;
    }

    span{
        font-size:16px;
        color:#666;
    }
    p{
        font-size:16px;
        color:#777; 
        text-align:center;
    }

    @media screen and (max-width: 768px) {
        width:100%;
        padding:5px;
        .pizza__img{
            height:250px;
            width:250px;
            margin:10px;
        }

        h1{
            font-size:26px;
            padding:10px 0;
        }
        p,span{
            font-size:22px;
        }
    }
`;
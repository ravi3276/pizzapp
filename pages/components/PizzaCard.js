import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

function PizzaCard({pizza}) {
  return (
    <Pizzacard>
        <Link href={`/product/${pizza._id}`} passHref>
        <Image className="pizza__img" src={pizza.image} alt="" height="250" width="250" />
        </Link>
      <h1 >{pizza.title}</h1>
      <span>${pizza.prices[0]}</span>
      <p>
        {pizza.description}
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
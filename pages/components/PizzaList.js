import React from 'react'
import styled from 'styled-components'
import PizzaCard from './PizzaCard';
function PizzaList() {
  return (
    <Pizzalist>
        <h1>the best pizza in town</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
        </p>
        <div className="pizza__card">
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>
    </Pizzalist>
  )
}

export default PizzaList

const Pizzalist= styled.div`
        padding:15px 10px;
        display:flex;
        flex-direction:column;
        align-items:center;

        h1{
            text-transform:capitalize;
            font-size:26px;
            font-weight:600;
        }
        p{
            width:70%;
            font-size: 24px;
            color: #444;
            padding:10px 0; 
        }

        .pizza__card{
            display:flex;
            align-items: center;
            justify-content: center;
            width:100%;
            flex-wrap:wrap; 
        }
    @media screen and (max-width: 768px) {
        h1{
            font-size:22px;
            font-weight:600;
            text-align:center;
        }
        p{
            width:90%;
            text-align:center;
        }
    }

`;

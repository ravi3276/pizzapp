import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pizzaImg from '../../public/img/pizza.png';
import pizzasize from '../../public/img/size.png';
import styled from 'styled-components'
import Image from 'next/image';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
function Product({ pizza }) {
    const [pizzaSize, setPizzaSize] = useState(0)
    const dispatch = useDispatch();

    const handleClick = (e, types) => {
        const checked=e.target.checked;

    }

    const addToCart=()=>{
        dispatch(addProduct({...pizza}))
    }
    return (
        <div className="product__container">
            <Navbar />
            <ProductInfo>
                <ProductLeft>
                    <Image src={pizza.image} alt="" width="100%" height="50%" layout="responsive" objectFit="contain" />
                </ProductLeft>

                <ProductRight>
                    <h1>{pizza.title}</h1>
                    <span className="product__price">${pizza.prices[pizzaSize]}</span>
                    <p style={{ paddingTop: 10 }}>{pizza.description}</p>
                    <h1 className="product__size">choose the size</h1>

                    <PizzaSize>
                        <Sizes onClick={() => setPizzaSize(0)}>
                            <Image src={pizzasize} alt="" width="30" height="30" />
                            <span className="number">Small</span>
                        </Sizes>

                        <Sizes onClick={() => setPizzaSize(1)}>
                            <Image src={pizzasize} alt="" width="40" height="40" />
                            <span className="number">Medium</span>
                        </Sizes>

                        <Sizes onClick={() => setPizzaSize(2)}>
                            <Image src={pizzasize} alt="" width="50" height="50" />
                            <span className="number">Large</span>
                        </Sizes>
                    </PizzaSize>

                    <h1 className="product__size">choose additional ingredients</h1>

                    <CheckBoxes>
                        {
                            pizza.extraOption.map((types) => (
                                <div key={types._id}>
                                    <input
                                        className="checkbox"
                                        type="checkbox" id={types.text} name={types.text} onClick={(e) => handleClick(e, types)} />
                                    <span>{types.text}</span>
                                </div>
                            ))
                        }
                    </CheckBoxes>

                    <Quantity>
                        <input type="number" defaultValue={1} />
                        <button onClick={addToCart}>Add to cart</button>
                    </Quantity>
                </ProductRight>
            </ProductInfo>
            <Footer />
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `http://localhost:3000/api/product/${params.id}`
    );
    return {
        props: {
            pizza: res.data,
        },
    };
};

export default Product

const ProductInfo = styled.div`
    display:flex;
    padding:40px 0;

    @media screen and (max-width: 768px) {
        display:flex;
        flex-direction:column;
        align-items: center;
        text-align:center;
    }
`;

const ProductLeft = styled.div`
    flex:0.5;
    width: 80%;
    height: 80%;
    object-fit:"contain";

`;

const ProductRight = styled.div`
    flex:0.5;
    padding:10px;

    .product__price{
        color: #d1411e;
        font-size: 24px;
        font-weight: 400;
        border-bottom: 1px solid #d1411e;
    }

    .product__size{
        text-transform: capitalize;
        font-size:18px;
        font-weight: 600;
        padding:15px 0;
    }
`;

const PizzaSize = styled.div`
    display:flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0px 20px;
    }
   
`;

const Sizes = styled.div`
position:relative;
margin:0 30px;
cursor: pointer;
    .number{
        position: absolute;
        top: -5px;
        right: -20px;
        background-color: teal;
        color: white;
        font-size: 12px;
        padding: 0 5px;
        border-radius: 10px;
        
    }
`;

const CheckBoxes = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        display:flex;
        flex-direction:column;
    }

    div{
        padding:0 10px;
        display:flex;
        align-items: center;

    }
    
    @media screen and (max-width: 768px) {
       div{
        //   background-color:red;
          margin:10px;
          padding-left:auto;
       } 
    }
    .checkbox{
        height:20px;
        width:20px;
        margin-right:3px;
    }
`

const Quantity = styled.div`
    input{
        width:50px;
        height:30px;
    }
    button{
        height:30px;
        color:white;
        border:0;
        background-color:#d1411e;
        margin-left:15px;
        border-radius:5px;
        cursor: pointer;
    }
`

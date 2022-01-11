import React from 'react'
import Navbar from './components/Navbar';
import styled from 'styled-components';
import Image from 'next/image';
import pizzaImg from '../public/img/pizza.png';
import Footer from './components/Footer';

function cart() {
    const pizza = {
        id: 1,
        img: pizzaImg,
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
    };
    return (
        <Cart>
            <Navbar />
            <CartContainer>
                <CartLeft>
                    <Table>
                        <tr className="header">
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <tr className="trbody">
                            <td>
                                <Image src={pizzaImg} alt="" width="100" height="100" />
                            </td>
                            <td>
                                <span className="name">CORALZO</span>
                            </td>
                            <td>
                                <span>Double ingredient, spicy sauce</span>
                            </td>
                            <td>
                                <span>$19.90</span>
                            </td>
                            <td>
                                <span>2</span>
                            </td>
                            <td>
                                <span className="total">$39.80</span>
                            </td>
                        </tr>
                    </Table>
                </CartLeft>

                <CartRight>
                    <div className="cart__info">
                        <h2>cart total</h2>
                        <h4>
                            <b>Subtotal:</b> $79.60
                        </h4>
                        <h4>
                            <b>Discount:</b> $00.00
                        </h4>
                        <h4>
                            <b>Total:</b> $79.60
                        </h4>
                    </div>
                    <button>checkout now</button>
                </CartRight>
            </CartContainer>
            <Footer />
        </Cart>
    )
}

export default cart

const Cart = styled.div``;

const CartContainer = styled.div`
    padding:50px;
    display:flex;

    @media (max-width: 768px) {
        flex-direction: column;  
        padding:20px;   
        background-color: whitesmoke;   
    }
`;


const CartLeft = styled.div`
    flex:0.7;
    .name{
    font-weight: 500;
    color: #d1411e;
    font-size: 18px;
    }

    .total{
        font-weight:500;
        font-size: 18px;
    }
`;

const CartRight = styled.div`
    flex:0.3;
    background-color: #333;
    height:300px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;

    @media screen and (max-width: 768px) {
        padding:20px;
    }

    button{
        height: 30px;
        color: #d1411e;
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;
        border:0;
        border-radius:10px;
    }

    .cart__info{
        color:white;
        h2{
            font-size: 24px;
            font-weight: 600;
            padding:20px;
            font-family: "Helvetica Neue",
            text-transform: uppercase;
        }
        h4{
            padding-bottom:10px;
        }

    }
`;


const Table = styled.table`
    width:100%;
    border-spacing:20px;

    @media screen and (max-width: 768px) {
        .header{
            display:none;
        }
        .trbody{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }
    }
`;
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import payment from '../../public/img/paid.png';
import bake from '../../public/img/bake.png';
import bike from '../../public/img/bike.png';
import delivery from '../../public/img/delivered.png';
import check from '../../public/img/checked.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Order() {
    const status=0;

    const statusClass=(index)=>{
        if(index-status < 1) return 'done';
        if(index-status === 1) return 'inProgress';
        if(index-status > 1) return 'undone';
    }
    return (
        <>
            <Navbar />
        <OrderContainer>
            <Left>
                <Table>
                    <tr className="header">
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr className="trbody">
                        <td>
                            <span>12786453324</span>
                        </td>
                        <td>
                            <span>John dean</span>
                        </td>
                        <td>
                            <span>Elite 2nd,street</span>
                        </td>
                        <td>
                            <span>$39.80</span>
                        </td>
                    </tr>
                </Table>
                <OrderProcess>
                    <div className={statusClass(0)}>
                        <Image src={payment} alt="" width="32" height="32"/> 
                        <span>Payment</span>
                        <div>
                        <Image src={check} alt="" width="20" height="20"/> 
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src={bake} alt="" width="32" height="32"/> 
                        <span>Preparing</span>
                        <div>
                        <Image src={check} alt="" width="20" height="20"/> 
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src={bike} alt="" width="32" height="32"/> 
                        <span>On the way</span>
                        <div>
                        <Image src={check} alt="" width="20" height="20"/> 
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src={delivery} alt="" width="32" height="32"/> 
                        <span>Delivered</span>
                        <div>
                        <Image src={check} alt="" width="20" height="20"/> 
                        </div>
                    </div>
                </OrderProcess>
            </Left>
            <Right>
                <div className="order__info">
                    <h2>Cart Total</h2>
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
                <button>Paid</button>
            </Right>
        </OrderContainer>
        <Footer />
        </>
    )
}

export default Order;


const OrderContainer = styled.div`
padding:50px;
display:flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

const Left = styled.div`
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


const Right = styled.div`

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
    color: teal;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    border:0;
    border-radius:10px;
}

.order__info{
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
    // width:100%;
    border-spacing:20px;
    th,td{
        padding:0 50px;
    }
    @media screen and (max-width: 768px) {
        .header{
            display:none;
        }
        .trbody{
            display: flex;
            flex-direction: column;
            text-align: center;
            // align-items: center;
            // justify-content: center;
            margin-bottom: 10px;

            td{
                padding-bottom:10px;
                font-size:18px;
            }
        }
    }
`;

const OrderProcess= styled.div`
    display:flex;
    align-items: center;
    padding-top:30px;
    padding-left:40px;

    div{
        padding:0 45px;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding:5px 0;
        div{
            padding:3px 0;
        }
    }
.done {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .inProgress {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: inProgress 1s ease infinite alternate;
  }
  
  @keyframes inProgress {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .undone {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.3;
  }
  
  .undone .checkedIcon,
  .inProgress .checkedIcon {
    display: none;
  }
  
`;
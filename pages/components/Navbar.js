import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import telephone from '../../public/img/telephone.png';
import cart from '../../public/img/cart.png';
function Navbar() {
    return (
        <Nav>
            <NavLeft>
                <div className="nav__icon">
                    <Image src={telephone} alt="" width="32" height="32" />
                </div>
                <div className="nav__info">
                    <p>order now!</p>
                    <p>8877990011</p>
                </div>
            </NavLeft>
            <NavMiddle>
                <Ul>
                    <li>Homepage</li>
                    <li>Products</li>
                    <li>Menu</li>
                    <h1>magicBox</h1>
                    <li>Events</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </Ul>
            </NavMiddle>
            <NavRight>
                <Image className="nav__cart" src={cart} alt="" width="32" height="32" />
                <div>2</div>
            </NavRight>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    height:100px;
    background-color: #d1411e;
    padding:0 50px; 
    display:flex;
    align-items: center;
   justify-content: space-between;
   position: sticky;
   top:0;
   z-index:1;
   width:100%;

   @media screen and (max-width: 768px) {
    padding:0 10px; 
   }
`;

const NavLeft = styled.div`
    display:flex;
    align-items: center;
    // flex:0.3;
.nav__icon{
    background-color: #fff;
    width:50px;
    height:50px;
    border-radius:999px;
    padding:10px;
}
.nav__info{
    padding-left:10px;
    color:#fff;
    font-size:18px;
    font-weight:300;
    font-family:"arial";

    p{
        line-height:30px;
    }

    @media screen and (max-width: 768px) {
        font-size:14px;
        p{
        line-height:20px;
        }
       }

}
`;

const NavMiddle = styled.div`
    @media screen and (max-width: 768px){
        display:none;
    }
`;

const Ul = styled.ul`
display:flex;
justify-content: center;
place-items: center;

li{
    list-style:none;
    color:white;
    padding:0 10px;
    cursor:pointer;
}

h1{
    font-size:45px;
    font-weight:500;
    font-family:Bradley Hand;
}
h1:hover{
    cursor:pointer;
    color: #0D2538;
    transition: 0.3s ease-in-out;

}

`;




const NavRight = styled.div`
@media screen and (max-width: 768px){
    margin-right:10px;  
}
        position:relative;
    div{
        position:absolute;
        top:-10px;
        right:-10px;
        background-color: #fff;
        padding:3px;
        border-radius:10px;
    }

   
`;

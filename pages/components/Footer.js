import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import bg from '../../public/img/bg.png';

function Footer() {
  return (
    <FooterContainer>
      <div className="footer__img">
        <Image src={bg} alt="" height="300" width="300" objectFit='cover' />
      </div>
      <FooterContainerRight>
        <div className="box1">
          <h2>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className="box2">
          <h1>FIND OUR RESTAURANTS</h1>
          <p>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className="box3">
          <h1>WORKING HOURS</h1>
          <p>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </FooterContainerRight>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
    display:flex;
    background-color: #222;

    .footer__img{
        padding-top:7px;
    }

    @media screen and (max-width: 768px) {

        .footer__img{
            display:none;
        }
    }
`;

const FooterContainerRight = styled.div`
display:flex;
flex:1;
padding-top:5px;
    .box1{
        flex:0.5;
        width:250px;
        color:white;
        font-size:16px;
        padding-left:30px;
        font-weight:600;
    }
    .box2,.box3{
        flex:0.5;
        display:flex;
        align-items:center;
        flex-direction:column;

        h1{
            color:#b7903c;
            font-size:18px;
        }
        p{
            color:lightgrey;
            padding:10px 0;
        }
    }
   
    @media screen and (max-width: 768px) {
        flex-direction:column;
        align-items: center;

        .box1{
        padding:10px 0;
        font-size:14px;
        padding-left:20px;
        width:100%;
        text-align:center;
    }
    .box2,.box3{
        h1{
            font-size:14px;
        }
        p{
            font-size:12px;
        }
    }
    }
`;


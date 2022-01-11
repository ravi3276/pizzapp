import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';



function BannerSlider() {
    const p1 = "https://images.dominos.co.in/new_veg_extravaganza.jpg"
    const p2 = "https://images.dominos.co.in/edv/edvmedium_right_4.jpg"
    const p3 = "https://images.dominos.co.in/new_veg_extravaganza.jpg"
    const p4 = "https://images.dominos.co.in/BEV0119_1.jpg"

    const banners = [p1, p2, p3, p4]
    const [track, setTrack] = useState(0);
    const settimeoutRef = useRef(null)

    const clearTime = () => {
        if (settimeoutRef.current) {
            clearTimeout(settimeoutRef.current)
        }
    }

    useEffect(() => {
        clearTime();
        settimeoutRef.current = setTimeout(() =>
            setTrack((prevIndex) => prevIndex === banners.length - 1 ? 0 : prevIndex + 1)
            , 2500);
    }, [track])
    return (
        <Bannerslider>
            <div>
                <Silder style={{ transform: `translate3d(${-track * 100}%, 0, 0)` }}>
                    {
                        banners.map((data, i) => (
                            <Silde
                                key={i}
                                style={{
                                    backgroundImage: `url(${data})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                }}
                            >
                            </Silde>
                        ))
                    }
                </Silder>
                <SliderBtns>
                    {banners.map((_, i) => (
                        <div key={i}
                            className={`btns ${track === i ? 'active' : ''}`}
                            onClick={() => setTrack(i)}>
                        </div>
                    ))}
                </SliderBtns>
            </div>
        </Bannerslider>
    )
}

export default BannerSlider;

const Bannerslider = styled.div`
    margin:0 auto;
    overflow:hidden;
    div{
        position:relative;
        height:450px;
    }

    @media screen and (max-width: 768px){
        div{
            height:300px;
        }
    }
`;

const Silder = styled.div`
    white-space:nowrap;
    transition: ease 1000ms;
`;

const Silde = styled.div`
    height:450px;
    width:100vw;
    display:inline-block;
`;

const SliderBtns = styled.div`
    text-align: center;
    top:-100px;
    .btns{
        display: inline-block;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        cursor: pointer;
        margin: 15px 7px 0px;
        background-color: #c4c4c4;
        top:0;
        right:0;
    }

    .btns.active{
        background-color: grey;
    }
`;





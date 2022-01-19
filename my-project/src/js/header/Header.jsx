import React from "react";
import styled from "styled-components";
import img1 from "../header/Ellipse 92.png"
import img2 from "../header/search.png"
import img3 from "../header/notification.png"
import img4 from "../header/Taskool 1 1.png"


const Header =()=>{
    return(
        <HeaderDiv>
            <HeaderLeft>
                <img className="img4" src={img4} alt="" />
            </HeaderLeft>
            <HeaderRight>
                <div className="header-line"></div>
                <img className="img1" src={img2} alt="" />
                <img className="img2" src={img3} alt="" />
                <img className="img3" src={img1} alt="" />
            </HeaderRight>

        </HeaderDiv>
    )
}
export default Header;

const HeaderDiv =styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    display: flexs;
    justify-content: space-between;
    border: 0;
    border-bottom: 1px solid #e0e0e0;

    .header-line{
        width: 1px;
        width: 1px;
        height: 25px;
        background-color: #e0e0e0;
        position: absolute;
        margin-left: 12px;
        
    }
    
    

`
const HeaderLeft = styled.div`
    width: 15%;
    height: 88px;
    margin-left: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    


`
const HeaderRight = styled.div`
    width: 17%;
    height: 88px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .img1{
        width: 20px;
        height: 20px;
    }
    .img2{
        width: 17px;
        height: 20px;
        margin-left: 20px;
    }
    .img3{
        width: 40px;
        height: 40px;
        margin-left: 30px;
        position: relative;
    }
    
    
`
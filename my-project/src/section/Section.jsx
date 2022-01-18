import React from "react";
import styled from "styled-components";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";
import img1 from "../section/sectionImg/arrow-left.png"

const Section =()=>{
    return(
        <SectionDiv>
            <Back>
                
                <SectionP> <img src={img1} alt="" /> Back to cources</SectionP>
            </Back>
 {/************* SectionBotoom un icerisine clihild elementleri olan seyfenin sag ve sol hisselerni import etdim  ***********/}
           <SectionBottom>
               <SectionLeft/>
               <SectionRight />

           </SectionBottom>
        </SectionDiv>

    )
}
export default Section;

const SectionDiv =styled.div`
width: 100%;
height: 600px;
@media screen and (max-width: 1000px)  {
        display: flex;
        justify-content: center;
   }


img{
    width: 24px;
    height: 24px;
}
   
`
const Back = styled.div`
    display: flex;
    @media screen and (max-width: 1000px)  {
        display: none;
   }
`

const SectionP =styled.p`
    color: #4f4f4f;
    margin-left: 80px;
    font-family: Euclid Circular A;
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-left: 105px;
`

const SectionBottom =styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    
`

import React ,{useState,useRef,useEffect}from "react";
import styled from "styled-components";
import img1 from "../section/sectionImg/arrow-ios-down.png"

const SectionLeft =()=>{
    


    return(
        <StyLeftDiv>
            <StyleLeftTop>
            <div className="Resource-hover">
             <div className="overview leftsmall" >
             <div className="leftsmall2"></div>
             <p>Overview</p> 
             <img src={img1} alt="" />
             </div>
             <div className="leftDrop1 leftDrop" >
                <p>Week 1</p>
                <p>Week 2</p>
                <p>Week 3</p>
                <p>Week 4</p>
             </div>
             </div>

             
             <div className="Resource-hover">
             <div className="grades leftsmall">
             <div className="leftsmall2"></div>
                 <p>Grades</p>
                 <img src={img1} alt="" />
             </div>
             <div className="leftDrop2 leftDrop" >
                <p>Week 1</p>
                <p>Week 2</p>
                <p>Week 3</p>
                <p>Week 4</p>
             </div>
             </div>

             

             <div className="Resource-hover">
             <div className="discussion leftsmall">
                 <div className="leftsmall2"></div>
                 <p>
                 Discussion forums
                 <img src={img1} alt="" />
                 </p>
             </div>
             <div className="leftDrop3 leftDrop" >
                <p>Week 1</p>
                <p>Week 2</p>
                <p>Week 3</p>
                <p>Week 4</p>
             </div>
             </div>


             <div className="Resource-hover">
             <div className="Resources leftsmall">
             <div className="leftsmall2"></div>
                 <p>Resources</p>
                 <img src={img1} alt="" />
             </div>
             <div className="leftDrop4 leftDrop" >
                <p>Week 1</p>
                <p>Week 2</p>
                <p>Week 3</p>
                <p>Week 4</p>
             </div>
             </div>
             
            </StyleLeftTop>
            <StyleLeftBottom>

            </StyleLeftBottom>

        </StyLeftDiv>
    )
}
export default SectionLeft;

const StyLeftDiv =styled.div`
@media screen and (min-width: 900px){
    width: 30%;
    padding: 1px;
    margin-left: 20px;
    margin-top:20px;
    font-family: Euclid Circular A;
    
}
@media screen and (max-width: 1000px)  {
        display: none;
   }
`
const StyleLeftTop = styled.div`
@media screen and (min-width: 900px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .leftsmall {
        width: 307px;
        height: 58px;
        background-color: #F2F8FF;
        margin-top: 10px;
        position: relative;
        border: 0;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .leftsmall img{
        position: absolute;
        right: 18px;
        top: 20px;
        width: 20px;
        height: 20px;
        transform: rotate(-90deg);
        transition: 0.2s;
    }
    .Resource-hover:hover .leftsmall img{
        transform: rotate(0deg);
    }
    .leftsmall2{
        
        width: 0px;
        height: 100%;
        position: absolute;
        background-color: #2A72CC;
        top: 0px;
        left: 0px;
        border: 0;
        border-top-left-radius:5px;
        border-bottom-left-radius: 5px;
        transition: 0.3s;
    }
    .leftsmall:hover .leftsmall2{
        display: block;
        width: 7px;
    }
   

    .leftsmall p{
        margin-left: 30px;
    }
    
    .leftDrop{
        width: 230px;
        height: 0px;
        background-color: #fff;
        transition: 0.5s;
        

    }
    .leftDrop p{

        font-family: Euclid Circular A;
        color: #4f4f4f;
        font-size: 0px;
    }
    .Resource-hover:hover .leftDrop{
        height: 150px;

        
    }
    .Resource-hover:hover .leftDrop p{
        
        font-family: Euclid Circular A;
        color: #4f4f4f;
        font-size: 14px;
        transition: 0.3s;
        
        
    }
    /* .leftsmall:hover .leftDrop{
         background-color: red;
    
    } */
}
    
`
const StyleLeftBottom = styled.div`
    
`


import React, { useRef,useState } from "react";
import styled from "styled-components";
import img1 from "../section/sectionImg/arrow-ios-down.png"
import img2 from "../section/sectionImg/Group 5631.jpg"
import img3 from "../section/sectionImg/Group 5630.png"
import img4 from "../section/sectionImg/Group 5629.png"
import img5 from "../section/sectionImg/Group 5630.png"



const SectionRight = ()=>{
   
    
    return(
        
        <SectionRightDiv>
            <div className="rightSmallDiv1">
                <div className="rightChild" >
                <span className="rightChild-span1">UX Design Process: Empathize, Define, and Ideatetion</span> 
                <span className="rightChild-span2">by Gunel Mammadova</span>
                </div>
                <button>Başla</button>
            </div>
            <div className="rightSmallDiv2 rightSmallDiv">
                <div className="rightSmallDiv2_top" >
                <div className="rightSmallDiv2_top_small">
                        <p className="rightSmallDiv2_top_p1">Week 1</p>
                        <p className="rightSmallDiv2_top_p2">Introduction to UX research</p>
                    </div>
                    <img src={img1} alt="" />
                </div>
                <div className="rightSmallDiv2_bottom" >
                    <div className="bottom1">
                        <div className="weekSmall">
                            <img src={img2} alt="" />
                            <p>Videos </p>
                            <div className="circle"></div>
                        </div>
                        <div className="weekSmall">
                        <img src={img3} alt="" />
                            <p>Quizs  </p>
                            <div className="circle"></div>
                        </div>
                        <div className="weekSmall">
                        <img src={img4} alt="" />
                            <p>Readings  </p>
                            <div className="circle"></div>
                        </div>
                        
                    </div>
                    <div className="bottom2">
                        <div className="bottom2-div1">
                            <p>Tələb olunan tapşırıqlar</p>
                            <p>Qiymət</p>
                        </div>
                        <div className="bottom2-div2">
                            <img src={img5} alt="" />
                            <p className="bottom2-div2-p1">Quizs :  </p>
                            <p className="bottom2-div2-p2">Nəsə tapşırıq mövzusu </p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="rightSmallDiv2 rightSmallDiv">
                <div className="rightSmallDiv2_top">
                <div className="rightSmallDiv2_top_small">
                        <p className="rightSmallDiv2_top_p1">Week 2</p>
                        <p className="rightSmallDiv2_top_p2">Introduction to UX research</p>
                    </div>
                    <img src={img1} alt="" />
                </div>
                <div className="rightSmallDiv2_bottom">
                    <div className="bottom1">
                        <div className="weekSmall">
                            <img src={img2} alt="" />
                            <p>Videos </p>
                            <div className="circle"></div>
                        </div>
                        <div className="weekSmall">
                        <img src={img3} alt="" />
                            <p>Quizs  </p>
                            <div className="circle"></div>
                        </div>
                        <div className="weekSmall">
                        <img src={img4} alt="" />
                            <p>Readings  </p>
                            <div className="circle"></div>
                        </div>
                        
                    </div>
                    <div className="bottom2">
                        <div className="bottom2-div1">
                            <p>Tələb olunan tapşırıqlar</p>
                            <p>Qiymət</p>
                        </div>
                        <div className="bottom2-div2">
                            <img src={img5} alt="" />
                            <p className="bottom2-div2-p1">Quizs :  </p>
                            <p className="bottom2-div2-p2">Nəsə tapşırıq mövzusu </p>
                        </div>
                    </div>
                </div>
            </div>
            




            <div className="rightSmallDiv2 rightSmallDiv">
                <div className="rightSmallDiv2_top">
                    <div className="rightSmallDiv2_top_small">
                        <p className="rightSmallDiv2_top_p1">Week 3</p>
                        <p className="rightSmallDiv2_top_p2">Introduction to UX research</p>
                    </div>
                    <img src={img1} alt="" />
                </div>
                <div className="rightSmallDiv2_bottom">
                    <div className="bottom1">
                        <div className="weekSmall">
                            <img src={img2} alt="" />
                            <p>Videos </p>
                            <div className="circle"></div>
                        </div>
                        <div className="weekSmall">
                        <img src={img3} alt="" />
                            <p>Quizs  </p>
                            <div className="circle"></div>
                        </div>
                        <div className="weekSmall">
                        <img src={img4} alt="" />
                            <p>Readings  </p>
                            <div className="circle"></div>
                        </div>
                        
                    </div>
                    <div className="bottom2">
                        <div className="bottom2-div1">
                            <p>Tələb olunan tapşırıqlar</p>
                            <p>Qiymət</p>
                        </div>
                        <div className="bottom2-div2">
                            <img src={img5} alt="" />
                            <p className="bottom2-div2-p1">Quizs :  </p>
                            <p className="bottom2-div2-p2">Nəsə tapşırıq mövzusu </p>
                        </div>
                    </div>
                </div>
            </div>
            
            
            

        </SectionRightDiv>
    )
}
export default SectionRight;

const SectionRightDiv = styled.div`
   @media screen and (min-width: 1000px){
    width: 875px;
    height: auto;
    margin-right: 80px;
    margin-top: 20px;
    font-family: Euclid Circular A;
   
   .rightSmallDiv1{
       width: 875px;
       height: 60px;
       display: flex;
       justify-content: space-between;
       align-items: flex-end;
       padding-bottom: 20px;
   }
   .rightSmallDiv1 button{
       width: 134px;
       height: 48px;
       border: 0;
       border-radius: 5px;
       background-color: #FFE01B;
   }
   .rightChild{
       display: flex;
       flex-direction: column;
   }
   .rightChild-span1{
       font-size: 18px;
   }
   .rightChild-span2{
       font-size: 15px;
       color: #4f4f4f;
   }
   .rightSmallDiv{
       width: 875px;
       height: auto;
       border: 1px solid #8f8f8f;
       border-radius: 4px;
       margin-top: 20px;
   }
   .rightSmallDiv2_top{
       width: 100%;
       height: 23%;
       display: flex;
       justify-content: space-between;
   }
   .rightSmallDiv2_top p{
       margin-left: 20px;
   }
   .rightSmallDiv2_top img{
       width: 35px;
       height: 35px;
       margin-right: 20px;
       margin-top: 15px;
       transform: rotate(-90deg);
       transition: 0.5s;
   }

   .rightSmallDiv2_bottom{
       width: 100%;
       height: 0px;
       display: flex;
       align-items: center;
       transition: 0.5s;
   }
   /* todo list start */
   .rightSmallDiv:hover .rightSmallDiv2_bottom{
     height: 250px;

   }
   .rightSmallDiv:hover .bottom1{
       display: block;
       width: 50%;
       height: 60%;
       display: flex;
       flex-direction: column;
       align-items: flex-end;
       justify-content: center;
   }
   .rightSmallDiv:hover .bottom2{
       display: block;
       width: 50%;
       height: 90%;
   }
   .rightSmallDiv:hover .rightSmallDiv2_top img{
       transform: rotate(0deg);
   }
   
    /* todo list end */
   .bottom1{
       width: 50%;
       height: 60%;
       display: flex;
       flex-direction: column;
       align-items: flex-end;
       justify-content: center;
       display: none;
       transition: .5s;
       
       
   }
   .weekSmall{
       width: 110px;
       height: 30px;
       margin-top: 10px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       font-size: 12px;
       margin-right: 30px;
   }
   .weekSmall img {
       width: 25px;
       height: 25px;
   }
   .circle{
       width: 24px;
       height: 24px;
       border: 1px solid #8f8f8f;
       border-radius: 50%;
   }
   .bottom2{
       width: 50%;
       height: 90%;
       display: none;
       transition: .5s;
   }
   .bottom2-div1{
       width: 90%;
       height: auto;
       display: flex;
       justify-content: space-between;
   }
   .bottom2-div2{
       width: 100%;
       height: 25px;
       display: flex;
       align-items: center;
       

   }
   
   
   .bottom2-div2 img{
       width: 24px;
       height: 24px;
       margin-right:10px;
   }
   }
   @media screen and (max-width: 1000px) and (min-width: 300px){
    width: 100%;
    height: auto;
    margin-top: 20px;
    font-family: Euclid Circular A;
    display: flex;
    flex-direction: column;
    align-items: center;
   
   .rightSmallDiv1{
       width: 95%;
       height: 60px;
       display: flex;
       justify-content: space-between;
       align-items: flex-end;
       padding-bottom: 20px;
   }
   .rightSmallDiv1 button{
       width: 93px;
       height: 40px;
       border: 0;
       border-radius: 5px;
       background-color: #FFE01B;
   }
   .rightChild{
       display: flex;
       flex-direction: column;
   }
   .rightChild-span1{
       font-size: 18px;
   }
   .rightChild-span2{
       font-size: 15px;
       color: #4f4f4f;
   }
   .rightSmallDiv{
       width: 95%;
       height: auto;
       border: 1px solid #8f8f8f;
       border-radius: 4px;
       margin-top: 20px;
       display: flex;
       flex-direction: column;
   }
   .rightSmallDiv2_top{
       width: 100%;
       height: 23%;
       display: flex;
       justify-content: space-between;
   }
   .rightSmallDiv2_top_small{
       width: 100%;
   }
   .rightSmallDiv2_top_p1{
       margin-left: 20px;
   }
   .rightSmallDiv2_top_p2{
      margin-left: 20px;
   }
   
   
   .rightSmallDiv2_top img{
       width: 35px;
       height: 35px;
       margin-right: 20px;
       margin-top: 15px;
       transform: rotate(-90deg);
       transition: 0.5s;
   }

   .rightSmallDiv2_bottom{
       width: 100%;
       height: 0px;
       display: flex;
       align-items: center;
       flex-direction: column;
       transition: 0.5s;
   }
   /* todo list start */
   .rightSmallDiv:hover .rightSmallDiv2_bottom{
     height: 250px;

   }
   .rightSmallDiv:hover .bottom1{
       display: block;
       width: 50%;
       height: 60%;
       display: flex;
       flex-direction: column;
       align-items: flex-end;
       justify-content: center;
   }
   .rightSmallDiv:hover .bottom2{
       display: block;
       width: 50%;
       height: 90%;
   }
   .rightSmallDiv:hover .rightSmallDiv2_top img{
       transform: rotate(0deg);
   }
   
    /* todo list end */
   .bottom1{
       width: 20%;
       height: 60%;
       display: flex;
       flex-direction: column;
       align-items: flex-end;
       justify-content: center;
       display: none;
       transition: .5s;
       margin-right:  25%;
       margin-bottom: 20px;
       
   }
   .weekSmall{
       width: 110px;
       height: 30px;
       margin-top: 10px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       font-size: 12px;
       margin-right: 30px;
   }
   .weekSmall img {
       width: 25px;
       height: 25px;
   }
   .circle{
       width: 24px;
       height: 24px;
       border: 1px solid #8f8f8f;
       border-radius: 50%;
   }
   .bottom2{
       width: 100%;
       height: 90%;
       display: none;
       transition: .5s;
       margin-left: 4%;
   }
   .bottom2-div1{
       width: 90%;
       height: auto;
       display: flex;
       justify-content: space-between;
   }
   .bottom2-div2{
       width: 100%;
       height: 25px;
       display: flex;
       align-items: center;
       

   }
   
   
   .bottom2-div2 img{
       width: 24px;
       height: 24px;
       margin-right:10px;
   }
   }
   

   /* @media screen and (max-width: 1000px) {
       width: 100%;
       height: auto;
       display: flex;
       flex-direction: column;
       align-items: center;
       font-family: Euclid Circular A;
       
       .rightSmallDiv{
           width: 90%;
           height: auto;
       }
       .rightSmallDiv1{
           width: 90%;
           position: relative;
       }
       .rightSmallDiv1 button{
           width: 94px;
           height: 40px;
           position: absolute;
           top: 20%;
           right: 20%;
       }

       .rightSmallDiv2_bottom{
           width: 100%;
           height: auto;
           display: flex;
           flex-direction: column;
       }
       .bottom1{
          width: 100%;
          height: 20px;
          font-size: 14px;
          margin-top: 10px;
       }
       .bottom2{
        font-size: 14px;
        margin-top: 10px;
       }

    
       /* todo list start */
   /* .rightSmallDiv:hover .rightSmallDiv2_bottom{
     height: 250px;

   }
   .rightSmallDiv:hover .bottom1{
       display: block;
       width: 50%;
       height: 60%;
       display: flex;
       flex-direction: column;
       align-items: flex-end;
       justify-content: center;
   }
   .rightSmallDiv:hover .bottom2{
       display: block;
       width: 50%;
       height: 90%;
   }
   .rightSmallDiv:hover .rightSmallDiv2_top img{
       transform: rotate(0deg);
   } */ 
   
   
   
   
    /* todo list end */
   /* } */
   
`
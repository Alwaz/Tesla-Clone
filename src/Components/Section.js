import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({title, desc, leftBtnText, rightBtnText, backgroundImg}) => {
    console.log(backgroundImg)
    return (
        <Wrap bgImg={backgroundImg}>

            <Fade bottom>

            <ItemText>
                <h1>{title}</h1>
                <p>{desc}</p>
            </ItemText>
            </Fade>


            
            <Button>

            <Fade bottom>
             <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {/* if the right button text exists then show the right button */}
                { rightBtnText &&
                  <RightButton>
                      {rightBtnText}
                  </RightButton>   
                }
                
             </ButtonGroup>
             </Fade>

            <JumpingArrow src="images\down-arrow.svg"/>
            
            </Button>
        </Wrap>
    )
}

export default Section

const Wrap=styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   background-image: ${props => `url("/images/${props.bgImg}")`}; 
`

const ItemText=styled.div`
     padding-top: 15vh;
     text-align: center;
 `

const ButtonGroup=styled.div`
   display: flex;
   margin-bottom: 8px;
   @media (max-width: 768px) {
       flex-direction: column;
   }    
`
const Button=styled.div`

`

const LeftButton=styled.div`
 background-color: rgba(23,26,32, 0.8);
 width: 256px;
 height: 40px;
 color: white;
 display: flex;
 cursor: pointer;
 justify-content: center;
 align-items: center;
 border-radius: 100px;
 opacity: 0.85;
 text-transform: uppercase;
 font-size: 12px;
 margin: 7px;
`
const RightButton=styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;`

const JumpingArrow=styled.img`
   margin-top: 20px;
   height: 40px;
   overflow-x: hidden;
   animation: animateDown infinite 1.5s;
`
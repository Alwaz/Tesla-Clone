import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import {selectCars} from '../features/carSlice/carSlice';
import {useSelector } from 'react-redux';;

const Header = () => {

    // initiallyy setting the burgernav status to close
    const[burgerStatus, setBurgerStatus]=useState(false); 
    const cars = useSelector(selectCars)

    
    return (
        <Container>
            {/* Logo */}
            <a>
                <img src="images\logo.svg" alt="Tesla logo"/>
            </a>

            {/* Menu */}
            <Menu>
                {cars && cars.map((car, index)=>(
                     <a key={index} href='#'>{car}</a>
                ))}        
            </Menu>

            <RightMenu>
               <a href='#'>Shop</a>
               <a href='#'>Tesla Account</a>
             <CustomMenu onClick={()=>setBurgerStatus(true)}/>

            </RightMenu>

           

            <BurgerNav show={burgerStatus}>
               <CloseWrap>
                   <CustomClose onClick={()=>setBurgerStatus(false)}/>
               </CloseWrap>

               {cars && cars.map((car, index)=>(
                     <li><a key={index} href='#'>{car}</a></li>
                ))}  
                
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-In</a></li>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Commercial Energy</a></li>
                <li><a href='#'>Utilities</a></li>
            </BurgerNav>  
             

        </Container>
    )
}

const Container = styled.div`
     min-height: 60px;
     position: fixed;
     padding: 0 20px;
     top: 0;
     left: 0;
     right: 0;
     z-index: 99;
     display: flex;
     align-items: center;
     justify-content:space-between;
`
const Menu = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;


  a {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
  }

  @media(max-width: 768px) {
      display:none;
  }
    
`
const RightMenu=styled.div`
display: flex;
align-items: center;
top: 0;

a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
} 
  
`
const CustomMenu=styled(MenuIcon)`
      cursor: pointer;
`
const BurgerNav=styled.div`
   position: fixed;
   top: 0;
   left: 1;
   right: 0;
   background: white;
   width: 300px;
   height: 100vh;
   z-index: 16;
   list-style: none;
   padding: 20px;
   display: flex;
   text-align: start;
   flex-direction: column;
   transition: transform 0.2s ease-in;
   transform: ${props => props.show ? `translateX(0)`:`translateX(100%)`};

   li {
       padding: 15px 0;
       border-bottom: 1px solid black;
   }

   a {
       font-weight: 600
   }


`
const CustomClose=styled(ClearIcon)`
      cursor: pointer;
`


const CloseWrap=styled.div`
   display: flex;
   justify-content: flex-end;
`
export default Header

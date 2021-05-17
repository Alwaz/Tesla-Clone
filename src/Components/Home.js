import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
           <Section
              title='Model S'
              desc='Order Online for touchless delivery'
              backgroundImg='model-s.jpg'
              leftBtnText='Custom Order'
              rightBtnText='Exisiting Inventory'
            />

           <Section
             title='Model X'
             desc='Order Online for touchless delivery'
             backgroundImg='model-x.jpg'
             leftBtnText='Custom Order'
             rightBtnText='Exisiting Inventory'
           />

           <Section 
             title='Model Y'
             desc='Order Online for touchless delivery'
             backgroundImg='model-y.jpg'
             leftBtnText='Custom Order'
             rightBtnText='Exisiting Inventory'
           />

           <Section
               title='Model 3'
               desc='Order Online for touchless delivery'
               backgroundImg='model-3.jpg'
               leftBtnText='Custom Order'
               rightBtnText='Exisiting Inventory'
           />

             <Section
               title='Lowest Cost Solar Panels in America'
               desc='Money-back guarantee'
               backgroundImg='solar-panel.jpg'
               leftBtnText='Order Now'
               rightBtnText='Learn More'
             />

           <Section
               title='Solar for New Roofs'
               desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
               backgroundImg='solar-roof.jpg'
               leftBtnText='Order Now'
               rightBtnText='Learn More'
             />

           <Section
               title='Accessories'
               desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
               backgroundImg='accessories.jpg'
               leftBtnText='Shop Now'
             />







        </Container>
    )
}

export default Home

const Container=styled.div`
    height: 100vh;
`
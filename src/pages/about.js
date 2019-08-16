import React, { Component } from 'react'
import Layout from '../components/layout'
import dwight from '../images/DwightPicture.jpg'
import styled from 'styled-components'

export default class About extends Component {
  render() {
    return (
      <Layout>
        <AboutWrapper>
          <h2>About Inman's</h2>
          <p>Born in the Shenandoah Valley of Virginia I have spent my entire life living and working in the Southeast. Places I have called home include Virginia, North Carolina, Tennessee, Georgia, and South Carolina. I even spent about two years in Dallas, Texas. Most of my career has been spent in the hospitality industry. From small 'mom and pop" restaurants to regional and even nationally recognized chains. My dad grew up on a farm in rural North Carolina and I can still remember spending time with my grandparents working in the fields during the summers and enjoying large family gatherings during the holidays. One thing that was always present was my grandmothers southern style cooking. And yes like many I grew up thinking my grandmother was the best cook in the world. I have also been influenced through my own travels both in the United States and abroad. Having a mother that is German enabled me to travel throughout Europe. When I did I was sure to take notes about the local foods and flavors along the way. My travels in America began when I graduated from college. At that time I threw several items in the back of an old station wagon and headed west. I did a big loop of the country. Again I would stop along the way and take in the local foods and flavors. My travels haven't stopped and I'm still looking for unique ideas. A lot of what I've learned is shared in these pages and I have more to come. I wanted to create food items that can be shared and passed around to bring people together just as my family and friends did and still do. </p>
          <p>-Dwight</p>
          <img src={dwight} alt="Dwight Inman" />
        </AboutWrapper>
      </Layout>
    )
  }
}

const AboutWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 8px 0 8px;
  @media only screen and (max-width: 600px) {
    padding: 40px 4px 0 4px;
  } 
  img {
    margin: 20px auto 0 auto; 
    display: block;
  }
`




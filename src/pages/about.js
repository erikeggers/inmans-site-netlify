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
          <img src={dwight} alt="Dwight Inman" />
          <p>
            Born in the Shenandoah Valley of Virginia I have spent my entire
            life living and working in the Southeast. Places I have called home
            include Virginia, North Carolina, Tennessee, Georgia, and South
            Carolina. I even spent about two years in Dallas, Texas. Most of my
            career has been spent in the restaurant industry. From small 'mom
            and pop" restaurants to regional and even nationally recognized
            chains.
          </p>

          <p>
            My dad grew up on a farm in rural North Carolina and I can still
            remember spending time with my grandparents working in the fields
            during the summers and enjoying large family gatherings during the
            holidays. One thing that was always present was my grandmothers
            southern style cooking. Her cooking was a big influence to me. I
            have also been influenced through my own travels both in the United
            States and abroad.
          </p>
          <p>
            My Mother is German and this enabled me to travel throughout Europe
            while visiting with my Grandparents. When I did I was sure to take
            notes about the local foods and flavors along the way. After I
            graduated from college I traveled throughout the United States. At
            that time I threw my camping gear in the back of an old station
            wagon and headed west. I spent over a month on the road basically
            doing a big loop of the country. Again I would stop along the way
            and take in the local foods and flavors. My travels haven't stopped
            and I'm always looking for unique ideas.
          </p>
          <p>
            A lot of what I've learned is shared in these pages and I have more
            to come. I wanted to create food items that can be shared and passed
            around to bring people together just as my family and friends did
            and still do.
          </p>
          <p>-Dwight</p>
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
    padding: 40px 8px 0 8px;
  }
  img {
    margin: 20px auto 20px auto;
    display: block;
  }
`

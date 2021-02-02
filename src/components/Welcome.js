import React from 'react';

function Welcome() {
  return (<Wrapper>
    <p>Welcome to Let's Go!</p>
    <section>
      <h3>Let's Go is an innovative way to plan travel for those who like living a little spontaneously.<br/>
      You enter your origin, an array of destinations, and your preferred travel date. Using the SkyScanner API,
      Let's Go gives you the prices of flights to those locations on that date so you can see which 
      is the cheapest option. 
      
      Future plans: Expand functionality to include an email alert when flights 
      to any location dip below a certain price point.</h3>
    </section>
  </Wrapper>);
}; 
export default Welcome;
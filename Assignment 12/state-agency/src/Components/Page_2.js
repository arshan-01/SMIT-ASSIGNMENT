import React from 'react';
import "../App.css";
import page_2_card_1 from '../img/page-2-card-1.png';
import page_2_card_2 from '../img/page-2-card-2.png';
import page_2_card_3 from '../img/page-2-card-3.png';
import Page_1_footer from "../img/Page-1-footer.png";
import Page_1_footer_resp from "../img/Page-1-footer-resp.png";
import { useState } from 'react';

export const Page_2 = () => {
    const [width, setwidth] = useState(window.innerWidth);
    

    
  return <div className='container-fluid Page-2-Body-Content'>

      <div className='container Page-2-Header-container'>
      <img src = {width < 900?Page_1_footer_resp:Page_1_footer} alt = "Page 2 Header"></img>
        </div>
      <div className='container Page-2-Heading'>
          What Can We Help You Find?
      </div>
      <div className='container row Page-2-Cards-Container'>
          <div className='container Page-2-Card col-md-4'>
              <div className='Page-2-Card-Img'>
                  <img src = {page_2_card_1} alt = "Card Image"></img>
              </div>
              <div className='Page-2-Card-Heading'>
                  Buy a Home
              </div>
              <div className='Page-2-Card-Body'>
                With over 1 million+ homes for sale available on the website, Trulia can
                match you with a house.
              </div>
          </div>

          <div className='container Page-2-Card col-md-4'>
              <div className='Page-2-Card-Img'>
                  <img src = {page_2_card_2} alt = "Card Image"></img>
              </div>
              <div className='Page-2-Card-Heading'>
                  Rent a Home
              </div>
              <div className='Page-2-Card-Body'>
                With 35+ filters and keywords search, Trulia can find you a home.
              </div>
          </div>

          <div className='container Page-2-Card col-md-4'>
              <div className='Page-2-Card-Img'>
                  <img src = {page_2_card_3} alt = "Card Image"></img>
              </div>
              <div className='Page-2-Card-Heading'>
                  See Neighborhood
              </div>
              <div className='Page-2-Card-Body'>
                More with neighborhood insight than any other real
                estate site.
              </div>
          </div>
      </div>
  </div>;
};

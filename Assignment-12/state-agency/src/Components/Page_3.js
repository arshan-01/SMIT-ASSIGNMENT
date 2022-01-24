import React from 'react';
import "../App.css"
import page_3_card_1 from '../img/page-3-card-1.png'
import page_3_card_2 from '../img/page-3-card-2.png'
import page_3_card_3 from '../img/page-3-card-3.png'
import page_3_card_4 from '../img/page-3-card-4.png'

export const Page_3 = () => {
  return <div className='container Page-3-Body-Content'>
      <div className='container row Page-3-Header'>
          <div className='container col-md-5'>
              <div className='Page-3-Heading'>
                Our trending Latest Property.
              </div>
              <div className='Page-3-Body'>
                  Our unique process gives you peace of mind from home
                  rent to services.
              </div>

          </div>
          <div className='container col-md-2'></div>
          <div className='container col-md-5'>
            <div className='button-box row '>
                <div className='col-md-6 container'>
                <button className='btn-proto btn ' >Proto type</button>
                </div>
                <div className='col-md-6 container'>

                <button className='btn-see-all btn btn-primary' >See All Property</button>
                </div>
            </div>
              
          </div>
      </div>


      <div className='container-fluid Page-3-Card-Container'>
          <div className='container row'>
              <div className='Page-3-Card-Row row'>
                  <div className='Page-3-Card col-md-6 row'>
                    <div className='col-md-5'>
                        <img src = {page_3_card_1} alt = "card image">
                        </img>
                    </div>
                    <div className='col-md-7 Page-3-Card-Text'>
                        <div className='Page-3-Card-Price my-2'>$259,000</div>
                        <div className='Page-3-Card-Heading my-1'>Casa Alda</div>
                        <div className='Page-3-Card-Body'>Co Rd Tribune</div>
                        <div className='Page-3-Card-Icons row my-2'>
                            <div className='col-md-6'>
                            <i class="fa fa-bed Page-3-Card-Icon"> 2 Beds</i>
                            </div>
                            <div className='col-md-6'>
                            <i class="fa fa-bath Page-3-Card-Icon" aria-hidden="true">2 Baths</i>
                            </div>
                        </div>
                        <div className='Page-3-Card-Button my-2'>
                            <button className='Page-3-Card-Btn btn btn-primary'>View Details</button>
                        </div>
                    </div>
                    </div>


                    <div className='col-md-6 Page-3-Card row'>

                    <div className='col-md-5'>
                        <img src = {page_3_card_2} alt = "card image">
                        </img>
                    </div>
                    <div className='col-md-7 Page-3-Card-Text'>
                        <div className='Page-3-Card-Price my-2'>$229,000</div>
                        <div className='Page-3-Card-Heading my-1'>Langas Beach House</div>
                        <div className='Page-3-Card-Body'>37 Highland Ave</div>
                        <div className='Page-3-Card-Icons row my-2'>
                            <div className='col-md-6'>
                            <i class="fa fa-bed Page-3-Card-Icon"> 2 Beds</i>
                            </div>
                            <div className='col-md-6 '>
                            <i class="fa fa-bath Page-3-Card-Icon " aria-hidden="true">2 Baths</i>
                            </div>
                        </div>
                        <div className='Page-3-Card-Button '>
                            <button className='Page-3-Card-Btn my-2 btn btn-primary'>View Details</button>
                        </div>
                    </div>
                    </div>





              </div>
          </div>






          <div className='container row'>
              <div className='Page-3-Card-Row row'>
                  <div className='Page-3-Card col-md-6 row'>
                    <div className='col-md-5'>
                        <img src = {page_3_card_3} alt = "card image">
                        </img>
                    </div>
                    <div className='col-md-7 Page-3-Card-Text'>
                        <div className='Page-3-Card-Price my-2'>$289,000</div>
                        <div className='Page-3-Card-Heading my-1'>Super Delux Home</div>
                        <div className='Page-3-Card-Body'>1398 Linford st.</div>
                        <div className='Page-3-Card-Icons row my-2'>
                            <div className='col-md-6'>
                            <i class="fa fa-bed Page-3-Card-Icon"> 2 Beds</i>
                            </div>
                            <div className='col-md-6'>
                            <i class="fa fa-bath Page-3-Card-Icon" aria-hidden="true">2 Baths</i>
                            </div>
                        </div>
                        <div className='Page-3-Card-Button my-2'>
                            <button className='Page-3-Card-Btn btn btn-primary'>View Details</button>
                        </div>
                    </div>
                    </div>


                    <div className='col-md-6 Page-3-Card row'>

                    <div className='col-md-5'>
                        <img src = {page_3_card_4} alt = "card image">
                        </img>
                    </div>
                    <div className='col-md-7 Page-3-Card-Text'>
                        <div className='Page-3-Card-Price my-2'>$329,000</div>
                        <div className='Page-3-Card-Heading my-1'>Clington Villa</div>
                        <div className='Page-3-Card-Body'>365 Albert st.</div>
                        <div className='Page-3-Card-Icons row my-2'>
                            <div className='col-md-6'>
                            <i class="fa fa-bed Page-3-Card-Icon"> 2 Beds</i>
                            </div>
                            <div className='col-md-6 '>
                            <i class="fa fa-bath Page-3-Card-Icon" aria-hidden="true">2 Baths</i>
                            </div>
                        </div>
                        <div className='Page-3-Card-Button my-2'>
                            <button className='Page-3-Card-Btn btn btn-primary'>View Details</button>
                        </div>
                    </div>
                    </div>





              </div>
          </div>
      </div>
  </div>;
};

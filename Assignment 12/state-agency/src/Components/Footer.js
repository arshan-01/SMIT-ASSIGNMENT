import React from 'react';
import '../App.css'
import logo from '../img/logo.png'
export const Footer = () => {
    return <div className='Footer-Body-Content'>

        <div className=' row Footer-Contact-Section'>
            <div className='container col-md-7 Footer-Section-1-Text'>
                <div className='container  Footer-Heading-1'>
                    Talk to a Redfin Agent
                    </div>
                <div className='container Footer-Body-1'>
                    Start your search with an expert local agent-there's no
                    pressure or obligation.
                
                </div>
            </div>
            
            <div className='container col-md-5'>
                <div class="input-group Footer-Search-Box">
                    <div class="form-outline ">
                    <label class="form-label form-label-footer" for="form1">Where do you want to look for?</label>
                        <input type="search" id="form1" class="form-control Footer-Search" placeholder='City,Address,ZIP' />
                        <button type="button" class="btn btn-primary">
                        <i class="fa fa-search"></i>
                    </button>
                    </div>
                    
                </div>
            </div>
        </div>

       <div className='container row my-5 mx-auto'>
            <div className='container col-md-3 text-center'>
                <div className='Footer-Heading-2'>
                Popular searches
                </div>
                <div className='Footer-Body-2'>
                Appartment for rent<br/>
                Appartment Low to hide<br/>
                Office to buy<br/>
                Office for rent
                </div>
            </div>
            <div className='container col-md-3 text-center'>
                <div className='Footer-Heading-2'>
                About us
                </div>
                <div className='Footer-Body-2'>
                    Our story<br/>
                    Team Members<br/>
                    Careers<br/>
                    Contact us
                </div>
            
            </div>
           


            <div className='container col-md-3 text-center'>
                <div className='Footer-Heading-2'>
                Quick Links
                </div>
                <div className='Footer-Body-2'>
                        Terms of use<br/>
                        Privacy Policy<br/>
                        Contact Support<br/>
                        FAQ's
                </div>
            </div>
            <div className='container col-md-3 text-center'>
                <div className='Footer-Heading-2'>
                Support
                </div>
                <div className='Footer-Body-2'>
                    Help Center<br/>
                    Loan support<br/>
                    Privacy Policy<br/>
                    Management

            </div>
            
            </div>
            </div>

        <div className = "Footer-Section-3 row container">
            <div className='Footer-Section-3-Logo col-md-3 container'>
                <img src = {logo} ></img>
            </div>
            <div className='col-md-6'></div>
            <div className='Footer-Section-3-CopyRt col-md-3 container'>
                &copy; 2021 Besnik, All Rights Reserved<br/>
                Website created by Anas Jamal
            </div>
        
    </div>
    </div>
};


import React from 'react';
import '../App.css'
import grp_img_center from '../img/grp-img-center.png'
import grp_img_right from '../img/grp-img-left.png'
import grp_img_left from '../img/grp-img-right.png'
import rating from '../img/ratings.png'
export const Page_4 = () => {
  return <div className = "container-fluid Page-4-Body-Content">
      <div className='container-fluid row'>
          <div className='col-md-4 Page-4-Grp-Img-Side'>
              <img className='Page-4-Grp-Img-Side' src = {grp_img_left}></img>
          </div>
          <div className='col-md-4 Page-4-Center-Section'>
              <div className='Page-4-Heading'>
                  TESTIMONIALS
              </div>
              <div className='Page-4-Body'>
                  Our clients send us a bunch of smiles with our service 
                  and we love them
              </div>
              <div className='Page-4-Center-Img-Container'>
                  <img src = {grp_img_center}></img>
              </div>
              <div className='Page-4-Body'>
                  "We are very pleased with the way Besnik handled our purchase of Lake home
                  He was prompt friendly and very knowledgeable. He followed up on any and all
                  concerns."
              </div>
              <div className='Page-4-Nametag'>
                  Becky Nelson
              </div>
              <div className='Page-4-Rating'>
                  <img src = {rating}></img>
              </div>
          </div>
          <div className='col-md-4 Page-4-Grp-Img-Side'>
          <img className = "Page-4-Grp-Img-Side " src = {grp_img_right}></img>

          </div>
      </div>
  </div>;
};

import React from 'react';
import page_1_background from "../img/Page-1.png"
import "../App.css"
export const Page_1 = () => {
  return <div className='Page-1-Body-content container-fluid'>
    <div className='container row'>
      <div className='col-md-6'>
        <div className='Page-1-Heading'>
          Search for Homes in your Neighborhood.
        </div>
        <div className='Page-1-Body'>
          Online state agency, the modern way to sell your own home.
          You can use griffin residential to market your property.
        </div>
        <div className='Page-1-Search-box '>

          <form class="row g-3">
            <div class="col-md-3">
              <input type="text" className="form-control-plaintext Page-1-sb-Body" value="Address"></input>
            </div>
            <div class="col-md-3">
              <input type="text" className="form-control-plaintext Page-1-sb-Body" value="City"></input>
            </div>
            <div class="col-auto">
              <button type="submit" className="btn btn-primary mb-3">Search</button>
            </div>
          </form>

        </div>

      </div>
      <div className='col-md-6 container Page-1-img-container'>
        <img src={page_1_background} alt="image"></img>

      </div>

    </div>
    

  </div>;
};

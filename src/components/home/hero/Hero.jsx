import React from 'react'
import './hero.css'
import herobanner from "../../../assets/image/hero.png"
import bannerpattern from "../../../assets/image/bg-pattern.png"
function Hero() {
  return (
  
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                    <h1 className="headline-large hero-title">
                        Find a place where you can be yourself.
                    </h1>
                    <p className="body-large hero-text">
                       If you're looking for a place where you can be yourself,don't give
                       up keep searching until you find a place that like home.
                    </p>
                    <form action="./" method="get" class="search-bar">
  <label class="search-item">
    <span class="label-medium label">Want to</span>
    <select name="want-to" class="search-item-field body-medium">
      <option value="buy" selected>Buy</option>
      <option value="sell">Sell</option>
      <option value="rent">Rent</option>
    </select>
    <span class="material-symbols-rounded" aria-hidden="true">real_estate_agent</span>

  </label>

  <label class="search-item">
  <span class="label-medium label">Property type</span>
  <select name="property-type" class="search-item-field body-medium">
    <option value="any" selected>Any</option>
    <option value="houses">Houses</option>
    <option value="apartments">Apartments</option>
    <option value="villa">Villa</option>
    <option value="townhome">Townhome</option>
    <option value="bungalow">Bungalow</option>
    <option value="loft">Loft</option>
  </select>
  <span class="material-symbols-rounded" aria-hidden="true">gite</span>
</label>
<label class="search-item">
  <span class="label-medium label">Location</span>
  <input type="text" name="location" placeholder="Street, City, Zip..." 
         class="search-item-field body-medium"/>
  <span class="material-symbols-rounded" aria-hidden="true">location_on</span>
</label>
<button type="submit" class="search-btn">
  <span class="material-symbols-rounded" aria-hidden="true">search</span>
  <span class="label-medium">Search</span>
</button>

</form>
</div>

<img src={herobanner} width="816" height="659" role="presentation" class="hero-banner"/>
<img src={bannerpattern} width="1240" height="840" role="presentation" class="bg-pattern"/>

                </div>
            </section>
       
     
  )
}

export default Hero

import React from 'react'
import './feautres.css'
import featurebanner1 from "../../../assets/image/feature-banner-1.jpg"
import featurebanner2 from "../../../assets/image/feature-banner-2.jpg"
function Features() {
  return (
    <div>
      <section class="section feature " aria-labelledby="feature-label-1">
  <div class="container">
    <figure class="feature-banner">
      <img src={featurebanner1} width="1620" height="690" loading="lazy" alt="feature banner" class="img-cover"/>
    </figure>
    <div class="feature-content">
      <h2 class="headline-medium" id="feature-label">
        We Specialize In Quality Home Renovations
      </h2>
      <p class="body-large feature-text">
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus temporibus numquam ut error iste quae repudiandae voluptas. Neque saepe impedit repellendus 
     veritatis accusamus labore nulla rerum nemo eveniet error laboriosam ratione vero voluptatum, aliquid quia.
      </p>
      <ul class="feature-list">
  <li class="feature-item">
    <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
    <span class="body-medium">Smart Home</span>
  </li>
  <li class="feature-item">
    <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
    <span class="body-medium">Smart Home</span>
  </li>
  <li class="feature-item">
    <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
    <span class="body-medium">Smart Home</span>
  </li>
</ul>
    </div>
    

  </div>
</section>
<section class="section feature " aria-labelledby="feature-label-2">
  <div class="container">
    
    <div class="feature-content">
      <h2 class="headline-medium" id="feature-label">
        We Specialize In Quality Home Renovations
      </h2>
      <p class="body-large feature-text">
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus temporibus numquam ut error iste quae repudiandae voluptas. Neque saepe impedit repellendus 
     veritatis accusamus labore nulla rerum nemo eveniet error laboriosam ratione vero voluptatum, aliquid quia.
      </p>
      <ul class="feature-list">
  <li class="feature-item">
    <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
    <span class="body-medium">Smart Home</span>
  </li>
  <li class="feature-item">
    <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
    <span class="body-medium">Smart Home</span>
  </li>
  <li class="feature-item">
    <span class="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
    <span class="body-medium">Smart Home</span>
  </li>
</ul>
    </div>
    <figure class="feature-banner">
      <img src={featurebanner2} width="1620" height="690" loading="lazy" alt="feature banner" class="img-cover"/>
    </figure>
   

  </div>
</section>
    </div>
  )
}

export default Features

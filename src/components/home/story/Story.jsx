import React from "react";
import "./story.css";
import avatarstory1 from "../../../assets/image/story-avatar-1.jpg";
import avatarstory2 from "../../../assets/image/story-avatar-2.jpg";
import avatarstory3 from "../../../assets/image/story-avatar-3.jpg";
import avatarstory4 from "../../../assets/image/story-avatar-4.jpg";
import avatarstory5 from "../../../assets/image/story-avatar-5.jpg";
import avatarstory6 from "../../../assets/image/story-avatar-6.jpg";
import avatar1 from "../../../assets/image/avatar-1.jpg";
import avatar2 from "../../../assets/image/avatar-2.jpg";
import avatar3 from "../../../assets/image/avatar-3.jpg";
import avatar4 from "../../../assets/image/avatar-4.jpg";
import story1 from '../../../assets/image/story-1.jpg'
import story2 from '../../../assets/image/story-2.jpg'
import story3 from '../../../assets/image/story-3.jpg'
import story4 from '../../../assets/image/story-4.jpg'
import story5 from '../../../assets/image/story-5.jpg'
import story6 from '../../../assets/image/story-6.jpg'

function Story() {
  return (
    <section class="section story">
      <div class="container">
        <div class="title-wrapper">
          <div>
            <p class="section-subtitle title-medium">Our Customers</p>
            <h2 class="section-title headline-medium">
              We Help 1000+ Family Find Their True Home
            </h2>
            <ul class="avatar-list">
              <li class="avatar">
                <img
                  src={avatar1}
                  width="128"
                  height="88"
                  loading="lazy"
                  alt="John Smith"
                  class="img-cover"
                />
              </li>
              <li class="avatar">
                <img
                  src={avatar2}
                  width="128"
                  height="88"
                  loading="lazy"
                  alt="John Smith"
                  class="img-cover"
                />
              </li>
              <li class="avatar">
                <img
                  src={avatar3}
                  width="128"
                  height="88"
                  loading="lazy"
                  alt="John Smith"
                  class="img-cover"
                />
              </li>

              <li class="avatar">
                <img
                  src={avatar4}
                  width="128"
                  height="88"
                  loading="lazy"
                  alt="John Smith"
                  class="img-cover"
                />

                <div class="overlay-content">
                  <span class="label-medium">99+</span>
                </div>
              </li>
            </ul>
          </div>

          <a href="#" class="btn btn-outline">
            <span class="label-medium">View All Stories</span>
            <span class="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </a>
        </div>

        <ul class="story-list">
          <li
            class="story-card"
            style={{
              backgroundImage: `url(${story1})`,
            }}
          >
           <a href="#" class="overlay-content">
              <div>
              <h3 class="title-small">Chris Traeger</h3>
                <div class="rating-wrapper">
                
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <data class="title-small rating-text" value="5">
                  5.0
                </data>
                </div>
                </div>
              <figure class="card-avatar">
                <img
                  src={avatarstory1}
                  width="56"
                  height="56"
                  loading="lazy"
                  alt="Chris Traeger"
                  class="img-cover"
                />
              </figure>
            </a>
          </li>

          <li
            class="story-card"
            style={{
              backgroundImage: `url(${story2})`,
            }}
          >
           <a href="#" class="overlay-content">
              <div>
              <h3 class="title-small">Chris Traeger</h3>
                <div class="rating-wrapper">
                
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <data class="title-small rating-text" value="5">
                  5.0
                </data>
                </div>
                </div>
              <figure class="card-avatar">
                <img
                  src={avatarstory2}
                  width="56"
                  height="56"
                  loading="lazy"
                  alt="Chris Traeger"
                  class="img-cover"
                />
              </figure>
            </a>
          </li>

          <li
            class="story-card"
            style={{
              backgroundImage: `url(${story3})`,
            }}
          >
          <a href="#" class="overlay-content">
              <div>
              <h3 class="title-small">Chris Traeger</h3>
                <div class="rating-wrapper">
                
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <data class="title-small rating-text" value="5">
                  5.0
                </data>
                </div>
                </div>
              <figure class="card-avatar">
                <img
                  src={avatarstory3}
                  width="56"
                  height="56"
                  loading="lazy"
                  alt="Chris Traeger"
                  class="img-cover"
                />
              </figure>
            </a>
          </li>

          <li
            class="story-card"
            style={{
              backgroundImage:`url(${story4})`,
            }}
          >
           <a href="#" class="overlay-content">
              <div>
              <h3 class="title-small">Chris Traeger</h3>
                <div class="rating-wrapper">
                
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <data class="title-small rating-text" value="5">
                  5.0
                </data>
                </div>
                </div>
              <figure class="card-avatar">
                <img
                  src={avatarstory4}
                  width="56"
                  height="56"
                  loading="lazy"
                  alt="Chris Traeger"
                  class="img-cover"
                />
              </figure>
            </a>
          </li>

          <li
            class="story-card"
            style={{
              backgroundImage: `url(${story5})`,
            }}
          >
           <a href="#" class="overlay-content">
              <div>
              <h3 class="title-small">Chris Traeger</h3>
                <div class="rating-wrapper">
                
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <data class="title-small rating-text" value="5">
                  5.0
                </data>
                </div>
                </div>
              <figure class="card-avatar">
                <img
                  src={avatarstory5}
                  width="56"
                  height="56"
                  loading="lazy"
                  alt="Chris Traeger"
                  class="img-cover"
                />
              </figure>
            </a>
          </li>

          <li
            class="story-card"
            style={{
              backgroundImage:`url(${story6})`,
            }}
          >
            <a href="#" class="overlay-content">
              <div>
              <h3 class="title-small">Chris Traeger</h3>
                <div class="rating-wrapper">
                
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <span class="material-symbols-rounded" aria-hidden="true">
                    star
                  </span>
                  <data class="title-small rating-text" value="5">
                  5.0
                </data>
                </div>
                </div>
                
             
              
              <figure class="card-avatar">
                <img
                  src={avatarstory6}
                  width="56"
                  height="56"
                  loading="lazy"
                  alt="Chris Traeger"
                  class="img-cover"
                />
              </figure>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Story;

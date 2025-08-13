import React from 'react';
import styles from "./About.module.css";
import guddiImg from '../../assets/image/guddi.png';
import { MdDataExploration, MdOutlineExtensionOff, MdWorkspacesOutline } from 'react-icons/md';
import { RiBookOpenLine } from 'react-icons/ri';
import { ArrowUpRightFromSquareIcon } from 'lucide-react';
import mordenhouse from '../../assets/image/mordenhouse.jpeg'
import communotyengagement from '../../assets/image/communotyengagement.jpeg'
import david from '../../assets/image/david.jpg'
const About = () => {
  return (

    <div className={styles.aboutContainer}>
    {/* Hero Section */}
    <section className={styles.heroSection}>
      <h1>A proficient team with<br />extensive knowledge</h1>
      <img
        src={guddiImg}
        alt="Team of professionals"
        className={styles.heroImage}
      />

        <div className={styles.stats}>
          {[
            { number: "50+", label: "Properties" },
            { number: "10+", label: "Years Experience" },
            { number: "35+", label: "Team Members" },
            { number: "21+", label: "Cities" },
            { number: "15+", label: "Partners" },
          ].map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Flexibility for your lifestyle</h2>
        <div className={styles.featuresGrid}>
          {[
            {
              title: "Exploration",
              description:
                "Find your perfect space with our extensive selection of properties.",
              icon: <MdDataExploration/>,
            },
            {
              title: "Work assignments",
              description:
                "Ideal locations for business travelers and corporate assignments.",
              icon:<RiBookOpenLine/>,
            },
            {
              title: "Extended stays",
              description:
                "Comfortable accommodations for long-term residents.",
              icon: <ArrowUpRightFromSquareIcon/>,
            },
          ].map((feature, index) => (
            <div style={{fontSize:'3rem'}} key={index} className={styles.featureCard}>
             <div>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <a href="#" className={styles.learnMore}>
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.propertySection}>
        <img
          src={mordenhouse}
          alt="Modern housing property"
          className={styles.propertyImage}
        />
        <div className={styles.propertyContent}>
          <h2 className={styles.propertyTitle}>Landing for Corporate Housing</h2>
          <p>Find your perfect temporary home with our extensive selection of properties.</p>
          <a href="#" className={styles.btn}>
            Learn more
          </a>
        </div>
      </section>

      <section className={styles.communitySection}>
        <h2>Elevate community engagement</h2>
        <div className={styles.communityContent}>
          <div className={styles.communityText}>
            <h3>A furnished living experience - not an aggregator</h3>
            <p>
              We provide complete end-to-end solutions for your temporary housing
              needs with a focus on community and comfort.
            </p>
          </div>
          <div className={styles.communityImage}>
            <img
              src={communotyengagement}
              alt="Community engagement"
            />
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2>Meet our awesome team</h2>
        <div className={styles.teamGrid}>
          {[
            { name: "David Brown", role: "CEO & Founder", img: david },
            { name: "Maria Smith", role: "Property Manager", img: david },
            { name: "Robert Wilson", role: "Sales Director", img: david },
            { name: "Thomas Clark", role: "Operations", img: david },
          ].map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.contactSection}>
        <h2>Have any questions?<br/> Contact us.</h2>
        
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="First name" />
          </div>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Last name" />
          </div>
          <div className={styles.formGroup}>
            <input type="email" placeholder="Email" />
          </div>
          <div className={styles.formGroup}>
            <textarea placeholder="Message" rows="4"></textarea>
          </div>
          <button type="submit" className='btn btn-fill'>
            Send 
          </button>
        </form>
      </div>

      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2>Subscribe to our newsletter</h2>
          <p>Stay updated with our latest properties and community news</p>
          <button className={styles.btn}>Subscribe Now</button>
        </div>
        <div className={styles.newsletterImage}>
          <img
            src={mordenhouse}
            alt="Modern property"
          />
        </div>
      </section>
    </div>
  );
};

export default About;

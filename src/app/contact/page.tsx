import Link from "next/link";
import { Navbar } from "../components/navbar";

export default function Contact() {
  const colorPalette = 'earthy-forest';
  return (
    <div className={`${colorPalette}-primary contact-page`}>
      <Navbar colorPalette="earthy-forest" path="Contact" />
      <div className="about-container">
        <div className="glass contact-block">
          <h2>Contact Info</h2>
          <h3><i>Email</i></h3>
          <p>angelpmagallon10@gmail.com</p>
          <h3><i>Quick Links</i></h3>
          <div className="contact-links">
            <Link 
            href='https://www.linkedin.com/in/angel-penaloza-463154271/'
            className={`${colorPalette}-to-bottom-right-gradient contact-link`}
            target="_blank"
          >
            Linkedin
          </Link>
          <Link 
            href='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-menu-homepage'
            className={`${colorPalette}-to-bottom-right-gradient contact-link`}
            target="_blank"
          >
            Indeed
          </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

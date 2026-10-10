import Link from "next/link";
import { Navbar } from "../components/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar colorPalette="deep-sea" path="Contact" />
      <h1>Contact</h1>
      <p>email: angelpmagallon10@gmail.com</p>
      <Link href='/'>Home</Link><br/>
      <Link 
        href='https://www.linkedin.com/in/angel-penaloza-463154271/'
        target="_blank"
        className="link"
      >
        Linkedin
      </Link>
      <h3>work in progress...</h3>
    </div>
  )
}

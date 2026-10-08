import Link from "next/link";

export default function Contact() {
  return (
    <div>
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

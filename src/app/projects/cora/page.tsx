import { ProjectPage } from "@/app/components/projectpage";

export default function Cora() {
  return (
    <ProjectPage
      header="Cora"
      subheader="A community-driven safety app."

      date="August 2025 - May 2026"
      desc={`
        Cora is an application that allows you to view and post incidents within your area. 
        Its goal is to provide a means of safety by spreading awareness.  
      `}

      imageLinks={[
        'cora/firstImage.png', 
        'cora/secondImage.png', 
        'cora/thirdImage.png', 
        'cora/fourthImage.png', 
        'cora/fifthImage.png'
      ]}

      codeSnippet={
        `testing
        testing
        testing\n
        testing`
      }

      challengeDesc="Short description describing challenge."

      techStack={[
        'icons/react.svg', 
        'icons/html.svg',
        'icons/css.svg',
        'icons/database.svg',
        'icons/cloudflare.svg',
        'icons/vercel.svg'
      ]}
      colorPalette="cora"
      darkFont={null}
    />
  )
}
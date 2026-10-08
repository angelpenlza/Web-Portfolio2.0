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
        '/Web-Portfolio2.0/cora/firstImage.png', 
        '/Web-Portfolio2.0/cora/secondImage.png', 
        '/Web-Portfolio2.0/cora/thirdImage.png', 
        '/Web-Portfolio2.0/cora/fourthImage.png', 
        '/Web-Portfolio2.0/cora/fifthImage.png'
      ]}

      codeSnippet={
        `testing
        testing
        testing\n
        testing`
      }

      challengeDesc="Short description describing challenge."

      techStack={[
        '/Web-Portfolio2.0/icons/react.svg', 
        '/Web-Portfolio2.0/icons/html.svg',
        '/Web-Portfolio2.0/icons/css.svg',
        '/Web-Portfolio2.0/icons/database.svg',
        '/Web-Portfolio2.0/icons/cloudflare.svg',
        '/Web-Portfolio2.0/icons/vercel.svg'
      ]}
      colorPalette="cora"
      darkFont={null}
    />
  )
}
import { ProjectPage } from "@/app/components/projectpage";

export default function Wordle() {
    return (
      <ProjectPage 
        header="Wordle Clone"
        subheader="Self explanatory."
        date="July 2025"
        desc="A replica of Wordle, a popular New York Times game."
        imageLinks={[
          '/Web-Portfolio2.0/wordle/firstImage.png',
          '/Web-Portfolio2.0/wordle/secondImage.png',
          '/Web-Portfolio2.0/wordle/thirdImage.png',
        ]}
        codeSnippet="test"
        challengeDesc="test"
        techStack={[
          '/Web-Portfolio2.0/icons/react.svg',
          '/Web-Portfolio2.0/icons/css.svg'
        ]}
        colorPalette="dreamy"
        darkFont='dreamy-dark-font'
      />  
    )
  }
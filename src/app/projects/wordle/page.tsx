import { ProjectPage } from "@/app/components/projectpage";

export default function Wordle() {
    return (
      <ProjectPage 
        header="Wordle Clone"
        subheader="Self explanatory."
        date="July 2025"
        desc="A replica of Wordle, a popular New York Times game."
        imageLinks={[
          '/wordle/firstImage.png',
          '/wordle/secondImage.png',
          '/wordle/thirdImage.png',
        ]}
        codeSnippet="test"
        challengeDesc="test"
        techStack={[
          '/icons/react.svg',
          '/icons/css.svg'
        ]}
        colorPalette="dreamy"
        darkFont='dreamy-dark-font'
      />  
    )
  }
// import Link from "next/link";
// import Bubble from "../components/bubble";

import BubblePage from "../components/bubblepage";

// export default function Projects() {
//   return (
//     <div className="projects-container">
//         <Bubble
//           text={null}
//           size={"500px"}
//           pos={['-40px', '100px']}
//           color={'purple'}
//           opacity="25%"
//         />

//         <Bubble
//           text={null}
//           size={"500px"}
//           pos={['40px', '175px']}
//           color={"purple"}
//           opacity={"30%"}
//         />

//         <div className="project-elements">
//           <Link href='/' className="homepage-link">
//             <img src='/home.svg' alt=""/>
//           </Link>
//           <h1 
//             className="homepage-name"
//             style={{color: 'rgb(255, 245, 255)'}}
//           >
//             Projects
//           </h1>
//           <p 
//             className="homepage-label" 
//             style={{color: 'rgb(255, 210, 255)'}}
//           >
//             Select a project.
//           </p>
//           <Link href='/projects/cora'>
//             <Bubble 
//               text={'Cora'}
//               size="50px"
//               color="purple"
//               opacity="100%"
//               pos={['0px, 0px']}
//             />
//           </Link>
//         </div>
//     </div>
//   )
// }

export default function Project() {
  return (
    <BubblePage 
      header="Projects"
      subheader="Select a Project"
      colorScheme="purple"
      links={[
        ['/projects/cora', 'Cora'], 
        ['/projects/wordle', 'Wordle Clone'],
      ]}
    />
  )
}
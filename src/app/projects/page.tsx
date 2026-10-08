import BubblePage from "../components/bubblepage";

export default function Project() {
  return (
    <BubblePage 
      header="Projects"
      subheader="Select a Project"
      links={[
        ['/projects/cora', 'Cora'], 
        ['/projects/wordle', 'Wordle Clone'],
      ]}
      homeButton={true}
    />
  )
}
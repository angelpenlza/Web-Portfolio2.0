export default function Bubble({ text, size, color, opacity, pos }: {
  text: string | null;
  size: string, 
  color: string, 
  opacity: string, 
  pos: string[],
}) {
  if(!size || !color || !opacity || !pos) 
    return <div>error</div>

  try {
    const bubbleStyle: React.CSSProperties = {
      backgroundColor: color, 
      width: size, 
      height: size, 
      borderRadius: '100%', 
      transform: `translate(${pos[0]}, ${pos[1]})`,
      opacity: opacity, 
      position: 'absolute',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'
      
    }

    return (
      <div style={bubbleStyle}>
        {text}
      </div>
    )
  } catch(err) {
    return (
      <div className="error">
        invalid type: {err as String}
      </div>
    )
  }

}
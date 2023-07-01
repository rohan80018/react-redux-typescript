// interface ChildProps{
//   color: string;
//   onClick: ()=> void;
// }
interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child  = ({color, onClick, children}: ChildProps) =>{
  return <div>
    CHild {color}
    {children}
    <button onClick={onClick}>clik child</button>
  </div>
}



export const ChildAsFc :React.FC<ChildProps> = ({color, onClick, children}) => {
  return (
    <div>
      {children}
      hello child
      <button onClick={onClick}>clik child hdrhj</button>

    </div>
  )
}


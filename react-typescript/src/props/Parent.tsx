import { Child, ChildAsFc } from "./Child"

const Parent = () => {
  return (
    <div>
      <Child color="green" onClick={()=> console.log("cliked")} > ejk</Child>
      <hr></hr>
      <ChildAsFc color='red' onClick={()=> console.log("cliked chilsfc")} > 
        klnmejnfj
      </ChildAsFc>
    </div>
  )
}

export default Parent
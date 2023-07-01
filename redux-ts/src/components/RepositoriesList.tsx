import { useState } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"


const RepositoriesList: React.FC = () => {
  const [ term, setTerm] = useState("")
  const {searchRepositories} = useActions()
  const {data, error, loading} = useTypedSelector((state) => state.repositories)

  const onSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault()

    searchRepositories(term)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder="search repositories" value={term} onChange={(e)=>setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading . . . </h3>}
      {!error && !loading && data.map((name)=> <div key={name}>{name}</div>)}
    </div>
  )
}

export default RepositoriesList


// In the upcoming lecture, we will be adding some code to our RepositoriesList component. You will likely see a big error such as this:

// Argument of type '(dispatch: Dispatch<Action>) => Promise<void>' is not assignable to parameter of type 'AnyAction'

// This is caused by some changes to the React Redux library in the latest versions. The code that is throwing the error will not be used at all and will be refactored in the very next video. So, you are ok to use as any to suppress the TS error for this lecture:

// dispatch(actionCreators.searchRepositories(term) as any);
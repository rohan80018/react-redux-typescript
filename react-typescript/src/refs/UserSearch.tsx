import {useState, useRef, useEffect} from 'react'


const users = [
  {name: "rohan", age:23},
  {name:"kishan", age:25},
  {name: "pankaj", age:27}
]

interface Detail{
  name:string,
  age?:number
}

const UserSeacrh: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>( null)
  const [name, setName] = useState("")
  const [user, setUser] =useState<Detail | undefined>({name:""})

  useEffect(()=> {
    if(!inputRef.current){
      return
    }
    inputRef.current.focus()
  },[])

  const handleClick = () => {
    // for (let u in user) {
    //   if(search === user[u].name){
    //     setDetail(user[u])
    //     return
    //   }
    // }
    const foundUser = users.find((user)=> {
      return user.name === name
    })
    setUser(foundUser)
  }

  return (
    <div>
      <h1>User Search</h1>
      <input ref={inputRef} placeholder='seacrh name' value={name} onChange={(e)=> setName(e.target.value)} />
      <button onClick={handleClick}>Find</button>
      <div>
        { user? 
          <div>
            {user.name}
            {user.age}
          </div> :

          "Couldn't find user"
        }
      </div>
    </div>
  )
}

export default UserSeacrh
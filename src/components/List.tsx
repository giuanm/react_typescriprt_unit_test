import { useState } from "react"

type ListProps = {
  initialLangs: string[]
}

function List({initialLangs}: ListProps) {
  const [list, setList] = useState(initialLangs)
  const [Language, setLanguage] = useState("")

  const send2 = (e) =>{
    e.preventDefault();
    setTimeout(() => {
      setList(state => [...state, Language])
      setLanguage("");
    }, 500);
  }

  const remove = (lang: string) =>{
    setTimeout(() => {
      setList(state => state.filter(l => lang !== l))
    }, 500);
  }

  return (
    <>
      <h1>Programming Languages</h1>
      <form >
        <label className="name" >
          Add New Language
          <input type="text" name="name" placeholder="New language" onChange={(e)=>setLanguage(e.target.value)} value={Language}/>
        </label>
        <input type="submit" value='Send' onClick={send2}/>
      </form>
      <ul>
        {list.map(lang =>
          <li key={lang}>
            {lang}
            <button onClick={() => remove(lang)} >Del</button>
          </li>
        )}
      </ul>
    </>
  )
}

export default List

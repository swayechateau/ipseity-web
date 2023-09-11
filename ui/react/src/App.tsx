import { useState } from "react"
import { lang } from './state'
import { pages } from './state/translated'
import HomeScreen from "./screens/Home/HomeScreen";

function App() {
  const [current, setCurrent] = useState(lang);
  console.log(pages[current])
  return (
    <HomeScreen page={pages[current].home} language={current} setLanguage={setCurrent}/>
  )
}

export default App

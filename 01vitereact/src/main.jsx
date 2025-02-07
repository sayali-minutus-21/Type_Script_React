import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime.js"
//used to get inbuild jsx 

function MyApp(){
return(
  <div>
    <h1>Custom app</h1>
  </div>
)
}

//not runnning because error in parsing
// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'click to visit google'
// }

//directly using html tags,conversion in tree
const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)
const anotheruser="Sayu"
//React .creatElement(used to renderr react directly)
// const reactElement=React.createElement(
//   'a',
//   {href:'https://google.com',
//     target:'_blank'
//   },
//   'click to visit'
//   ,anotheruser
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

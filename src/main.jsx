import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormCustom } from './02-useEffect/FormCustom'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <MultipleCustomHooks/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'

import {Input} from './input'

type Form = {
  name: string
  password: string
}

const App = () => {
  const form = useForm<Form>()

  return (
    <form>
      <Input control={form.control} name="name" />
      <Input control={form.control} name="password" />
    </form>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

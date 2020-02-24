import React from 'react'
import 'antd/dist/antd.less'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Admin}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

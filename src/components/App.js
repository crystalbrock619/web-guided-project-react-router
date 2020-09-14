import React, { useState, useEffect } from 'react'
// 👉 STEP 2 - React Router imports
import { Route, Link, Switch } from 'react-router-dom'

// Components used for the different routes
import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Item'

// Dummy data
import data from '../data'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          {/* <a onClick={evt => {
            evt.preventDefault()
            history.pushState(null, null, '/foo')
          }}href='/'>Home</a> */}

          <Link to='/'>Home</Link>
          <Link to='/items-list'>Shop</Link>
        </div>
      </nav>

      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      <Switch>
        {/* With Switch, order your Routes from "more specific path" to least */}
        {/* With Switch, the first Route "wins" */}
        {/* Without Switch, ALL Routes with paths that match are rendered */}
        <Route path='/items-list/:id'>
          <Item items={stock} />
        </Route>

        <Route path='/items-list'>
          <ItemsList items={stock} />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

        {/* <Route component={Home} path='/' /> */}
        {/* <Route render={props => <Home />} path='/' /> */}
      </Switch>

    </div>
  )
}

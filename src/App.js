import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom'
import ChartSection from "./components/ChartSection"
import BreadCrumbs from './components/BreadCrumbs'
import Item from './components/Item'
import DataTable from './components/Table'

function App() {
    return (<div className='App'>
        <Router>
            <Navbar className="navbar_box"/>
            <BreadCrumbs />
            <Switch>
                <Route path='/' exact />
            </Switch>
        </Router>
            <div className="content">
                <ChartSection className="chart_box" />
                <Item className="item_box" />           
            </div>
        <DataTable />
        </div>)
}

export default App
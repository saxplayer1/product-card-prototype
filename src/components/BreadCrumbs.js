import React from 'react'
import './BreadCrumbs.css'

function BreadCrumbs() {
    return(
        <div>
            <ul className="breadcrumbs">
                <li className="breadcrumbs__item">
                    <a href="" className="breadcrumbs__link"> Home</a>
                </li>
                <li className="breadcrumbs__item">
                    <a href="" className="breadcrumbs__link"> Catalog page</a>
                </li>
                <li className="breadcrumbs__item">
                    <a href="" className="breadcrumbs__link breadcrumbs__link--active"> Active link</a>
                </li>
            </ul>
        </div> )
    }

export default BreadCrumbs;
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <div>
            <ul className="nav_ul">
                <li className="nav_li"><Link style={{textDecoration: 'none', color: 'black'}}to='./'>Home</Link></li>
                <li className="nav_li"><Link style={{textDecoration: 'none', color: 'black'}}to='./Error'>Test ErrorBoundary</Link></li>
                <li className="nav_li"><Link style={{textDecoration: 'none', color: 'black'}}to='./jjj'>404 page</Link></li>

            </ul>
        </div>
    )
}
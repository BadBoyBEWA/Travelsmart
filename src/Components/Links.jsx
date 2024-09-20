import React from 'react'
import { Link } from 'react-router-dom'

export default function Links({active, linkstyle, about, home, directory3, directory4, icon, link1, link2, link3, link4}) {
  return (
    <ul className={linkstyle}>
        <li className={active}><Link to={home}>{link1}</Link></li>
        <li><Link to={about}>{link2}</Link></li>
        <li><a href={directory3} icon={icon}>{link3}</a></li>
        <li><a href={directory4} icon={icon}>{link4}</a></li>
    </ul>
  )
}

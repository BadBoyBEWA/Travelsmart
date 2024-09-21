import React from 'react'
import { Link } from 'react-router-dom'

export default function Links({active, tour, icon, linkstyle, about, home, directory3, link1, link4, link2, link3}) {
  return (
    <ul className={linkstyle}>
        <li className={active}><Link to={home}>{link1}</Link></li>
        <li><Link to={about}>{link2}</Link></li>
        <li><a href={directory3} icon={icon}>{link3}</a></li>
        <li><Link to={tour}>{link4}</Link></li>
    </ul>
  )
}

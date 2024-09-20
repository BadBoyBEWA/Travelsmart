import React from 'react'

export default function Links({linkstyle, directory1, directory2, directory3, directory4, icon, homelink, link1, link2, link3, link4}) {
  return (
    <ul className={linkstyle}>
        <li><a href={directory1} className={homelink} icon={icon}>{link1}</a></li>
        <li><a href={directory2} icon={icon}>{link2}</a></li>
        <li><a href={directory3} icon={icon}>{link3}</a></li>
        <li><a href={directory4} icon={icon}>{link4}</a></li>
    </ul>
  )
}

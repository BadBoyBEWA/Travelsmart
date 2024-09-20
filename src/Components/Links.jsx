import React from 'react'

export default function Links({linkstyle, directory1, directory2, directory3, directory4, homelink}) {
  return (
    <ul className={linkstyle}>
        <li><a href={directory1} className={homelink}>Home</a></li>
        <li><a href={directory2}>About</a></li>
        <li><a href={directory3}>Contact Us</a></li>
        <li><a href={directory4}>Tour Review</a></li>
    </ul>
  )
}

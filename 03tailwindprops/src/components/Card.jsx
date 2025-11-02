import React from 'react'

function Card(props) {
  console.log(props);
  return (
    <> 
       <img src = "https://tailwindcss.com/_next/static/media/cover.de1997f7.png" alt = "" />
       <h1 className = 'text-3xl bg-green-400 p-3 rounded'>My card component</h1>
       <p>userName is {props.userName}</p>
    </>
  )
}

export default Card
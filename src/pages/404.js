import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
     <main className="error-page">
       <div className="error-container">
         <h1>Oops it's a dead end</h1>
         <Link to="/" className="btn">
           Back home
         </Link>
       </div>

     </main>
    </>
  )
}

export default Error

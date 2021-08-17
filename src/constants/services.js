import React from "react"
import { FaCode, FaUserFriends } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Front End",
    text: `Responsive UI utilizing Javascript, JQuery, Bootstrap, Materialize, Flexbox along with HTML and CSS3.`,
  },
  {
    id: 2,
    icon: <FaCode className="service-icon" />,
    title: "Back End",
    text: `Familiarity with HTTP requests and responses, Client/Server Architecture, NoSQL databases such as MongoDB, relational database such as PostgreSQL.  `,
  },
  {
    id: 3,
    icon: <FaUserFriends className="service-icon" />,
    title: "Team Collaboration",
    text: `Effective use of Trello, Figma, and Canva. Version Control with Github.
    Open-mindedness, great Communication skills, and Adaptability. `,
  },
]

export default services

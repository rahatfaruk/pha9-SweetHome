import { useState } from "react"
import { List } from "react-bootstrap-icons"
import { Link, NavLink } from "react-router-dom"

const navLinks = [
  {id: 1, text: 'Home', path: '/'},
  {id: 2, text: 'Update Profile', path: '/update-profile'}
]

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  // testing
  const user = true && {displayName: 'ariq boke', photoURL: '/logo.png'}

  return (
    <nav className="px-4">
      <div className="max-w-screen-xl py-4 mx-auto border-b grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-4">
        <h1 className='text-2xl'>SweetHome</h1>

        {/* toggler + action-btns */}
        <div className="flex items-center justify-end md:order-1 gap-4">
          {user ? 
            <div className="flex gap-3 items-center">
              <figure className="w-8">
                <img src={user.photoURL} alt="" title={user.displayName} className="w-full rounded-full shadow-md" />
              </figure>
              <button className="px-3 py-1 rounded-md text-white bg-red-800 hover:opacity-90">Logout</button>
            </div> 
          : 
            <Link to='/signin' className="inline-block px-3 py-1 rounded-md text-white bg-green-600 hover:opacity-90">Login</Link>
          }

          <button className="md:hidden border p-0.5 text-2xl hover:scale-95" onClick={() => setShowLinks(!showLinks)}> <List/> </button>
        </div>

        {/* links */}
        <ul className={`${showLinks ? 'block': 'hidden'} md:flex justify-center col-span-2 md:col-span-1`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <NavLink to={link.path} className={({isActive}) => 
                `block px-4 py-2 md:bg-transparent hover:underline hover:bg-indigo-100 
                ${isActive ? 'text-indigo-800 bg-indigo-100 font-bold underline' : ''}`
              }>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
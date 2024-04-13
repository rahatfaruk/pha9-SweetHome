import { useContext, useState } from "react"
import { List } from "react-bootstrap-icons"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthProvider"
import { toast } from "react-toastify"

const navLinks = [
  {id: 1, text: 'Home', path: '/'},
  {id: 2, text: 'Update Profile', path: '/update-profile'},
  {id: 3, text: 'Connect', path: '/connect'},
  {id: 4, text: 'Blogs', path: '/blogs'},
]

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const {user, logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    .then(() => toast.info('logged out') )
    .catch(err => toast.error(err.message))
  } 

  return (
    <nav className="px-4">
      <div className="max-w-screen-xl py-4 mx-auto border-b grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-4">
        <h1 className='text-2xl'>SweetHome</h1>

        {/* toggler + action-btns */}
        <div className="flex items-center justify-end md:order-1 gap-4">
          {user ? 
            <div className="flex gap-3 items-center">
              <figure className="w-8 p-0.5 border rounded-full border-green-500">
                <img src={user.photoURL} alt="" title={user.displayName} className="w-full rounded-full shadow-md" />
              </figure>
              <button className="px-3 py-1 rounded-md text-white bg-red-800 hover:opacity-90" onClick={handleLogout}>Logout</button>
            </div> 
          : 
            <Link to='/signin' className="inline-block px-3 py-1 rounded-md text-white bg-green-600 hover:opacity-90">Login</Link>
          }

          <button className="md:hidden border p-0.5 text-2xl hover:scale-95" onClick={() => setShowLinks(!showLinks)}> <List/> </button>
        </div>

        {/* links */}
        {user && 
          <ul className={`${showLinks ? 'block': 'hidden'} md:flex justify-center col-span-2 md:col-span-1`}>
            {navLinks.map(link => (
              <li key={link.id}>
                <NavLink to={link.path} className={({isActive}) => 
                  `block px-4 py-2 rounded-md md:bg-transparent hover:underline hover:bg-green-100  
                  ${isActive ? 'text-green-600 bg-green-100 font-bold underline' : ''}`
                }>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        }
      </div>
    </nav>
  )
}
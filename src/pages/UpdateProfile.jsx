import { useContext, useState } from 'react';
import {Helmet} from 'react-helmet';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { AuthContext } from '../context/AuthProvider';
import { authRef } from '../../firebaseConfig';

function UpdateProfile() {
  const {user, updateProfileInfo, toggleProfile, setToggleProfile} = useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const name = e.target.name.value.trim()
    const photoUrl = e.target.photo.value.trim()

    // update user info
    try {
      await updateProfileInfo(name, photoUrl);
      toast.success('Successfully updated profile!')
      setToggleProfile(!toggleProfile)
    } catch (error) {
      toast.error('update failed! ' + error.message)
    }
  }
  console.log(user);

  return (  
    <section className='px-4'>
      <div className='max-w-screen-lg py-6 mx-auto'>
        <Helmet>
          <title>SweetHome | Update Profile</title>
        </Helmet>

        <h2 className="mb-8 md:mb-6 text-3xl md:text-4xl text-center font-semibold">Update Profile</h2>

        <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
          <figure className='mb-4 w-20 h-20 '>
            <img src={user.photoURL} className='w-full h-full rounded-full' alt="" />
          </figure>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600">Your Name</span>
            <input type="name" name="name" defaultValue={user.displayName} className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="Ali Khan" required />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600">Your Photo url</span>
            <input type="text" name="photo" defaultValue={user.photoURL} className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="https://example.com" required />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600">Your email</span>
            <input type="email" name="email" defaultValue={user.email} className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 text-gray-500" placeholder="example@mail.com" disabled />
          </label>

          <div className="mt-6">
            <button type="submit" className="bg-green-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Update</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UpdateProfile;
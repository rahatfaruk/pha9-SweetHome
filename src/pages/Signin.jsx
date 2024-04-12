import { useContext, useState } from "react";
import { Eye, EyeSlash, Github, Google } from "react-bootstrap-icons";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";

function Signin() {
  const [showPassword, setShowPassword] = useState(false)
  const {user, signInWithEP, signInWithGoogle} = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()
    
    const email = e.target.email.value.trim()
    const password = e.target.password.value.trim()

    const passwordPassRegex = /(?=.*[a-z])(?=.*[A-Z]).{6,}/

    // all fields is not filled
    if (!(email && password)) {
      toast.error('you must fill all fields!')
    }
    // validate password: lenght >= 6, has at least 1 uppercase, 1 lowercase
    else if( !passwordPassRegex.test(password) ) {
      toast.error('password must be at least 6 characters long, contains at least 1 uppercase and 1 lowercase letter')
    }
    // successful
    else {
      const signIn = async () => {
        try {
          await signInWithEP(email, password)
          toast.success('successfully signed in');
        } catch (error) {
          toast.error(error.message)
          console.log(error.message);
        }
      }
      signIn()
    }
  }

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      toast.error(error.message)
    }
  }

  if (user) {
    return <Navigate to='/'/>
  }
  return (  
    <section className="px-4 md:px-6 py-8">
      <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Sign in</h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600">Your email</span>
            <input type="email" name="email" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="example@mail.com" />
          </label>
          <label className="block mb-4 relative">
            <span className="block mb-1 text-sm text-gray-600">Your password</span>
            <input type={showPassword ? "text" : "password"} name="password" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute bottom-1.5 right-1.5 border. p-1 text-xl">
              {showPassword ? <Eye/> : <EyeSlash/>}
            </button>
          </label>

          <div className="mt-6">
            <button type="submit" className="bg-green-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Sign in</button>
          </div>
        </form>

        {/* other login method */}
        <div className="border-t pt-4 mt-6 space-y-4">
          <button onClick={handleSignInWithGoogle} className="bg-blue-600 text-white w-full px-4 py-2 rounded-md flex items-center justify-center gap-3 hover:opacity-90"><Google/> Continue with Google</button>
          <button className="bg-gray-800 text-white w-full px-4 py-2 rounded-md flex items-center justify-center gap-3 hover:opacity-90"><Github/> Continue with Github</button>
        </div>

        <p className="mt-4">Don't have an account? <Link to="/signup" className="text-green-600 hover:underline">Sign up</Link></p>
      </div>
    </section>
  );
}

export default Signin;
import { Github, Google } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Signin() {

  const handleSubmit = e => {
    e.preventDefault()
    toast.error('Error: this is a custom error message')
  }

  return (  
    <section className="px-4 md:px-6 py-8">
      <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign in</h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600">Your email</span>
            <input type="email" name="email" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="example@mail.com" />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600">Your password</span>
            <input type="password" name="password" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" />
          </label>

          <div className="mt-6">
            <button type="submit" className="bg-green-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Sign in</button>
          </div>
        </form>

        {/* other login method */}
        <div className="border-t pt-4 mt-6 space-y-4">
          <button className="bg-blue-600 text-white w-full px-4 py-2 rounded-md flex items-center justify-center gap-3 hover:opacity-90"><Google/> Continue with Google</button>
          <button className="bg-gray-800 text-white w-full px-4 py-2 rounded-md flex items-center justify-center gap-3 hover:opacity-90"><Github/> Continue with Github</button>
        </div>

        <p className="mt-4">Don't have an account? <Link to="/signup" className="text-green-600 hover:underline">Sign up</Link></p>
      </div>
    </section>
  );
}

export default Signin;
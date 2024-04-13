import { useEffect, useState } from "react";
import Blog from "./Blog";
import Loading from "../../comps/Loading";
import { Helmet } from "react-helmet";

function Blogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/blogs.json')
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      setBlogs( data );
    })
    .catch(err => {
      setLoading(false)
      alert(err.message)
      console.log(err.message)
    })
  }, [])

  if (loading) {
    return <Loading />
  }

  return (  
    <section className="px-4 bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-6">
        <Helmet>
          <title>SweetHome | Blogs</title>
        </Helmet>
        
        <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl text-center font-semibold animate__animated animate__fadeInDown">Blogs</h2>

        <div>
          {blogs.map(blog => <Blog key={blog.id} {...blog} />)}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
function Blog({title, category, details, image, writer}) {
  return (
    <div className="lg:flex lg:items-center bg-white p-6 mb-6 rounded-lg animate__animated animate__fadeIn">
      <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={image} alt="" />

      <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
        <p className="mb-1 text-sm text-blue-500 uppercase">{category}</p>
        <h3 className="block mb-3 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 md:text-sm">{details}</p>
        <a href="#" className="inline-block mt-2 text-green-500 underline hover:text-green-400">Read more</a>

        <div className="flex items-center mt-6">
          <img className="object-cover object-center w-10 h-10 rounded-full" src={writer.image} alt="" />

          <div className="mx-4">
            <h1 className="text-sm text-gray-700 dark:text-gray-200">{writer.name}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{writer.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
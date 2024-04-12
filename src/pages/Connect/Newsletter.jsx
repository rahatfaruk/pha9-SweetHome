function Newsletter() {
  return (  
    <div className="bg-gray-100 p-8 my-8 text-center rounded-md animate__animated animate__fadeInLeft">
      <h2 className="text-2xl md:text-3xl mb-2">Newsletter</h2>
      <p className="text-gray-500">Get notification for upcoming events and more! </p>

      <form className="flex justify-center mt-4">
        <input type="email" className="px-2 py-1 rounded-l-md shadow-md" placeholder="example@mail.com" />
        <button type="submit" className="px-3 py-1 text-white bg-green-600 rounded-r-lg shadow-md hover:opacity-85">Join</button>
      </form>
    </div>
  );
}

export default Newsletter;
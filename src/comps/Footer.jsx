import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

function Footer() {
  return (  
    <footer className="bg-gray-900 text-gray-400 px-4">
      <div className="max-w-screen-xl mx-auto py-8">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h2 className="mb-2 font-semibold text-2xl text-white">SweetHome</h2>
            <p className="pb-4">Welcome! Here, you can sale and rent your desired home, apartment etc for yourself and your family. We have different categories and designs estate. Consult with us and choose one which matches with your dream.</p>

            <ul className="flex gap-4">
              <li>
                <a href="" className="inline-block border rounded-full p-1.5 text-xl bg-white text-black hover:opacity-80 cursor-pointer"><Facebook/></a>
              </li>
              <li>
                <a href="" className="inline-block border rounded-full p-1.5 text-xl bg-white text-black hover:opacity-80 cursor-pointer"><Twitter/></a>
              </li>
              <li>
                <a href="" className="inline-block border rounded-full p-1.5 text-xl bg-white text-black hover:opacity-80 cursor-pointer"><Instagram/></a>
              </li>
            </ul>
          </div>

          <ul className="space-y-1">
            <li><h3 className="text-xl text-white mb-2">Company</h3></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Work</a></li>
            <li><a href="#" className="hover:underline">Latest News</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>

          <ul className="space-y-1">
            <li><h3 className="text-xl text-white mb-2">Support</h3></li>
            <li><a href="#" className="hover:underline">Help Desk</a></li>
            <li><a href="#" className="hover:underline">Sales</a></li>
            <li><a href="#" className="hover:underline">Become a Partner</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
          </ul>

          <ul className="space-y-1">
            <li><h3 className="text-xl text-white mb-2">Contact</h3></li>
            <li><a href="#" className="hover:underline">524 Broadway , NYC</a></li>
            <li><a href="#" className="hover:underline">+1 777-978-5570</a></li>
          </ul>
        </div>

        <div className="flex justify-between gap-2 flex-col md:flex-row py-4 mt-4 border-t border-gray-700">
          <p>@<span className="font-bold">SweetHome</span> - All Rights Reserved</p>
          <p>Designed & Developed by <span className="font-bold">Rahat Faruk</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
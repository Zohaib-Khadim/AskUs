import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mx-20 text-white">
        <div className='mt-5 sm:mx-auto md:col-span-1 col-span-2  sm:mb-0 mb-5'>
          <h1 >Logo</h1>
          <p>
            Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmad tempor incididunt ut labour
          </p>
        </div>
        <div className='mt-5 mx-auto '>
          <h1 className='font-bold '>QUICK LINKS</h1>
          <ul className="text-sm leading-8">
            <li>- About Us</li>
            <li>Terms</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className='mt-5 mx-auto'>
          <h1 className='font-bold '>PRODUCTS</h1>
          <ul className="text-sm leading-8">
            <li>Used Cars</li>
            <li>New Cars</li>
            <li>Showroom</li>
            <li>Dealers</li>
            <li>App Design</li>
          </ul>
        </div>
        <div className='mt-5 mx-auto' >
          <h1 className='font-bold '>RESOURCES</h1>
          <ul className="text-sm leading-8">
            <li>Blogs</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Behance</li>
          </ul>
        </div>
        <div className='mt-5 mx-auto '>
          <div className="border w-28 flex items-center px-3 py-2 rounded mt-1 bg-white">
            <FontAwesomeIcon className='text-blue-700' icon={faFacebookF} />
            <h2 className="text-sm ml-3 text-blue-400">Facebook</h2>
          </div>
          <div className="border w-28 flex items-center px-3 py-2 rounded mt-2 bg-white">
            <FontAwesomeIcon className='text-blue-700' icon={faLinkedin} />
            <h2 className="text-sm ml-3 text-blue-400">LinkedIn</h2>
          </div>
          <div className="border w-28 flex items-center px-3 py-2 rounded mt-2 bg-white">
            <FontAwesomeIcon className='text-blue-700' icon={faTwitter} />
            <h2 className="text-sm ml-3 text-blue-400">Twitter</h2>
          </div>
          <div className="border w-28 flex items-center px-3 py-2 rounded mt-2 bg-white">
            <FontAwesomeIcon  icon={faInstagram} />
            <h2 className="text-sm ml-3 text-blue-400">Instagram</h2>
          </div>
        </div>
      </footer>
      <hr className="mx-20 border mt-12"/>
      <p className='text-center py-5 text-white'>&copy; 2024 -Maardhcum</p>
    </>
  );
};

export default Footer;

import { Link, useLocation, useNavigate } from 'react-router-dom'
import YtLogo from '../assets/yt-logo.png'
import { IoIosSearch } from 'react-icons/io'
import { FaMicrophone } from 'react-icons/fa'
import { RiVideoAddLine } from 'react-icons/ri'
import { FiBell } from 'react-icons/fi'
import { RxAvatar } from 'react-icons/rx'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../context/contextApi'
import { AiOutlineMenu } from 'react-icons/ai'

import Loader from '../shared/Loader'

let speech;
if (window.webkitSpeechRecognition) {
  // eslint-disable-next-line
  const SpeechRecognition = webkitSpeechRecognition;
  speech = new SpeechRecognition();
  speech.continuous = true;
} else {
  speech = null;
}

const Header = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();


  const searchQueryHandler = (event) => {
    if ((event.key === 'Enter' || event === 'searchButton') && searchQuery.length > 0)
      navigate(`/searchResult/${searchQuery}`)
  }

  const [isListening, setIsListening] = useState(false);
  // const [text, setText] = useState("");
  const listen = () => {
    setIsListening(!isListening);
    if (isListening) {
      speech.stop();
    } else {
      speech.start();
    }
  };
  useEffect(() => {
    //handle if the browser does not support the Speech API
    if (!speech) {
      return;
    }
    speech.onresult = event => {
      setSearchQuery(event.results[event.results.length - 1][0].transcript);
    };
  }, []);

  const mobleMenuToggle = () => {
    setMobileMenu(!mobileMenu)
  }

  const { pathname } = useLocation();
  const pageName = pathname?.split('/').filter(Boolean)?.[0]

  return (
    <header className='sticky top-0 z-[999] '>
      {loading && <Loader />}
      <div className='wrapper flex justify-between items-center px-4 h-14 bg-black text-white'>
        <div className='h-6 flex items-center gap-4'>
        {pageName !== "video" && (
          <div className='flex cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] active:bg-white/[0.17' onClick={mobleMenuToggle}>
            <AiOutlineMenu className='text-xl'/>
          </div>)}
          <Link to='/'>
            <img src={YtLogo} alt="logo" className='h-6 ' />
          </Link>

        </div>
        <div className='flex gap-8 items-center '>
          <div className='flex items-center group '>
            <div className='flex h-8 md:h-10 md:ml-10 pl-2 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-2 md:group-focus-within:pl-0'>
              <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                <IoIosSearch className="text-white text-xl" />
              </div>
              <input type="text" placeholder='Search' className='px-2 bg-transparent w-44 md:w-64 lg:w-[500px] outline-none h-full'
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                value={searchQuery}
              />
            </div>
            <button className='border border-[#303030] border-l-0 h-8 md:h-10 rounded-r-3xl w-[40px] md:w-[60px] bg-white/[0.1] flex items-center justify-center'
              onClick={() => searchQueryHandler("searchButton")}
            >
              <IoIosSearch className=' text-xl md:text-2xl ' />
            </button>
          </div>
          <div className='cursor-pointer flex items-center justify-center h-10 w-10 rounded-full bg-white/[0.1] active:bg-white/[0.17]'>
            <FaMicrophone className='text-lg ' onClick={listen} />
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='cursor-pointer flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/[0.12] active:bg-white/[0.17]'>
            <RiVideoAddLine className='text-xl md:text-2xl' />
          </div>
          <div className='cursor-pointer flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/[0.12] active:bg-white/[0.17]'>
            <FiBell className='text-xl md:text-2xl' />
          </div>
          <div className='cursor-pointer flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/[0.12] active:bg-white/[0.17]'>
            <RxAvatar className='text-xl md:text-2xl' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
import React, { useContext } from 'react'
import { categories } from '../utils/constant'
import LeftNavMenuItem from './LeftNavMenuItem'
import { Context } from '../context/contextApi'
import { useNavigate } from 'react-router-dom'

const LeftNav = () => {

  const { setSelectedCategory, selectedCategory, mobileMenu } = useContext(Context)

  const navigate = useNavigate()

  const handleClick = (type, name) => {
    switch (type) {
      case "home":
        return setSelectedCategory(name);
      case "category" :
        return setSelectedCategory(name);
        case "menu" :
          return false;
      default:
        break;
    }
  }
  return (
    <div className={`bg-black px-4 pt-3 fixed top-14 hover:overflow-y-auto h-[calc(100vh-56px)] w-[240px] transition-all ${
      mobileMenu ? 'translate-x-0' : 'translate-x-[-240px]'
    }`}>
      <div className=' flex flex-col gap-2 '>
        {
          categories.map((it) => {
            return (
              <React.Fragment key={it.name}>
                <LeftNavMenuItem
                  name={it.type === 'home' ? 'Home' : it.name}
                  icon = {selectedCategory === it.name ? it.filledIcon : it.icon}
                  action={() => {
                    handleClick(it.type, it.name)
                    navigate('/')
                  }}
                  className={`${
                    selectedCategory === it.name
                        ? "bg-white/[0.15] hover:bg-white/[0.25]"
                        : ""
                }`}
                />
                {it.divider && (<hr className='my-5 border-white/[0.2]' />)}
              </React.Fragment>)
          })
        }
      </div>
    </div>
  )
}

export default LeftNav
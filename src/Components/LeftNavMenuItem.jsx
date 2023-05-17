
const LeftNavMenuItem = ({ icon, name, action, className }) => {
  return (
    <div className={'flex items-center text-xl gap-4 p-2 cursor-pointer text-white hover:bg-white/[0.2] rounded-md active:bg-white/[0.25] transition-all ' + className} onClick={action}>
      <span className=''>{icon}</span>
      <span className='text-base'> {name}</span>
    </div>
  )
}

export default LeftNavMenuItem
import img1 from '../images/illustration-woman-online-mobile.svg'
import img2 from '../images/bg-pattern-mobile.svg'
const Header = () => {
  return (
    <div className='flex  justify-center items-center '>
      <img className='w-[75%] translate-y-[-7rem]' src={img1} />
      <img className='w-[75%] translate-y-[-3rem] absolute' src={img2}  />
    </div>
  )
}

export default Header
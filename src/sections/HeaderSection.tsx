import NavBar from "../components/NavBar";
import SearchSection from "./SearchSection";

export default function HeaderSection() {
  return (
    <div>
      <div className='bg-[#6B6B6B] h-[23.8px] lg:h-auto '>
        <div className='lg:ml-[190px] lg:pt-[10px] pb-[1px] flex justify-between h-[23.8px] lg:h-auto lg:items-start items-center'>
          <ul className='flex text-[12px] text-white w-full justify-center lg:justify-end text-center items-center lg:items-start'>
            <li className='hidden  w-[16.6%] border-r-2 h-[23px] lg:flex items-center justify-center'>
              <a
                href='#'
                className='hover:text-[13px] transition-all duration-300 ease-in-out'
              >
                Consulta tu reserva
              </a>
            </li>
            <li className='lg:w-[16.6%] border-r-2 h-[12px] pr-1 lg:p-0 lg:h-[23px] flex items-center justify-center'>
              <a
                href='#'
                className='hover:text-[13px] transition-all duration-300 ease-in-out'
              >
                Garantiza tu reserva
              </a>
            </li>
            <li className='lg:w-[16.6%] pl-1 lg:p-0 lg:border-r-2 h-[12px] lg:h-[23px] flex items-center justify-center'>
              <a
                href='#'
                className='hover:text-[13px] transition-all duration-300 ease-in-out'
              >
                Paga tu reserva
              </a>
            </li>
            <li className=' hidden w-[16.6%] border-r-2 h-[23px] lg:flex items-center justify-center'>
              <a
                href='#'
                className='hover:text-[13px] transition-all duration-300 ease-in-out'
              >
                Vuelo + Hotel
              </a>
            </li>
            <li className='hidden w-[16.6%] border-r-2 h-[23px] lg:flex items-center justify-center'>
              <a
                href='#'
                className='hover:text-[13px] transition-all duration-300 ease-in-out'
              >
                Tours
              </a>
            </li>
          </ul>

          <ul className='hidden lg:flex w-[15.6%] justify-center flex-wrap mb-2'>
            <li className='w-[27px] h-[27px] hover:w-[27.4px] hover:h-[27.4px] border-2 border-white rounded-full flex justify-center items-center mr-2 p-[4px]'>
              <a href=''>
                <img
                  className='w-[22px] h-[15px]'
                  src='/public/images/icons-facebook.png'
                  alt=''
                />
              </a>
            </li>
            <li className='w-[27px] h-[27px] border-2 border-white rounded-full flex justify-center items-center mr-2 p-[4px]'>
              <a href=''>
                <img src='/public/images/icons-twitterx.png' alt='' />
              </a>
            </li>
            <li className='w-[27px] h-[27px] border-2 border-white rounded-full flex justify-center items-center mr-2 p-[4px]'>
              <a href=''>
                <img src='/public/images/icons-youtube.png' alt='' />
              </a>
            </li>
            <li className='w-[27px] h-[27px] border-2 border-white rounded-full flex justify-center items-center  p-[4px]'>
              <a href=''>
                <img src='/public/images/icons-instagram.png' alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <NavBar />

      <SearchSection />
    </div>
  );
}

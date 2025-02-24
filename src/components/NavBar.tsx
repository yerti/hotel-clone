import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<string | null | undefined>(null);
  const [openCountry, setOpenCountry] = useState<string | null>(null);
  const [openCity, setOpenCity] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  const navbarItems = [
    { name: 'Destinos', hasSubMenu: true, type: 'destinos' },
    { name: 'Ofertas', hasSubMenu: false },
    { name: 'Salones y Centros', hasSubMenu: true, type: 'salones' },
    { name: 'Húesped Siempre Estelar', hasSubMenu: false },
    { name: 'Restaurantes', hasSubMenu: false },
    { name: 'Nosotros', hasSubMenu: false },
    { name: 'B2B', hasSubMenu: false },
    { name: 'FAQS', hasSubMenu: false },
  ];

  const destinos = [
    {
      name: 'Colombia',
      ciudades: [
        { name: 'Bogotá', hoteles: ['Hotel Andino', 'Hotel Bogotá Plaza'] },
      ],
    },
    {
      name: 'Perú',
      ciudades: [
        { name: 'Lima', hoteles: ['Hotel Miraflores', 'Hotel San Isidro'] },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 46) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      className={`w-full bg-[#0E3064] flex items-center pl-[3%] h-[76px] transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 z-50 shadow-lg' : 'relative'
      }`}
    >
      <div className='mr-[30px]'>
        <a href='#'>
          <img src='/public/images/logos/logo-1.png' alt='Image logo' />
          <span className='hidden'>Logo</span>
        </a>
      </div>
      <ul className='flex flex-row text-[11.76px] font-medium'>
        {navbarItems.map((item, index) => (
          <li
            key={index}
            className='relative px-[11px]'
            onMouseEnter={() => setOpenMenu(item.type)}
            onMouseLeave={() => {
              setOpenMenu(null);
              setOpenCountry(null);
              setOpenCity(null);
            }}
          >
            <a
              href='#'
              className='w-full flex items-center gap-1 py-[31px] text-white hover:opacity-[.7]'
            >
              {item.name}
              {item.hasSubMenu && <IoIosArrowDown />}
            </a>

            {item.hasSubMenu && openMenu === item.type && (
              <ul className='absolute left-0 top-full bg-[#777777] py-[20px] text-white border w-[240px] '>
                {destinos.map((pais, idx) => (
                  <li
                    key={idx}
                    className='relative px-[20px] h-[40px] flex items-center'
                    onMouseEnter={() => setOpenCountry(pais.name)}
                    onMouseLeave={() => setOpenCountry(null)}
                  >
                    <a
                      href='#'
                      className=' p-2 py-[6px] flex items-center justify-between  px-[20px] hover:bg-[#6b6b6b] w-full hover:opacity-[.7]'
                    >
                      {pais.name}
                      <IoIosArrowDown />
                    </a>

                    {openCountry === pais.name && (
                      <ul className='absolute left-full -top-[21px] bg-[#777777] w-[240px]  py-[20px] border '>
                        {pais.ciudades.map((ciudad, ciudadIdx) => (
                          <li
                            key={ciudadIdx}
                            className='relative px-[20px] h-[40px] flex items-center'
                            onMouseEnter={() => setOpenCity(ciudad.name)}
                            onMouseLeave={() => setOpenCity(null)}
                          >
                            <a
                              href='#'
                              className=' py-[6px]  px-[20px] hover:bg-[#6b6b6b] w-full hover:opacity-[.7] flex items-center '
                            >
                              {ciudad.name}
                              <IoIosArrowDown />
                            </a>

                            {openCity === ciudad.name && (
                              <ul className='absolute left-full -top-[21px] bg-[#777777] border w-[240px] py-[20px] '>
                                {ciudad.hoteles.map((hotel, hotelIdx) => (
                                  <li
                                    key={hotelIdx}
                                    className='px-[20px] h-[40px] '
                                  >
                                    <a
                                      href='#'
                                      className='block py-[6px] px-[20px] hover:bg-[#6b6b6b]  hover:opacity-[.7]'
                                    >
                                      {hotel}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

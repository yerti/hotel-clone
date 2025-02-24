import { IoIosSearch } from 'react-icons/io';

export default function SearchSection() {
  return (
    <section className="w-full h-[500px]  bg-[url('/public/images/hoteles-estelar-background-01-2-scaled.jpg')] py-[54px]  bg-right-top bg-no-repeat bg-cover">
      <div className='mt-[8%] w-[80%] mx-auto bg-white'>
        <div className='flex gap-2.5  p-2.5'>
          <div className='flex'>
            <label htmlFor='' className='text-[14px] font-medium'>
              Selecciona un hotel:
              <input type='text' placeholder='Buscar hotel...'  className='border border-[#ccc] text-[12px] p-2.5  text-center w-full rounded-[5px]'/>
            </label>
          </div>

          <div>
            <label htmlFor='' className='text-[14px] font-medium'>
              Check In / Check Out:
              <input type='text' placeholder='Selecciona tus fechas...' className='border border-[#ccc] text-[12px] p-2.5  text-center w-full rounded-[5px]'/>
            </label>
          </div>

          <div>
            <label htmlFor='' className='text-[14px] font-medium'>
              Viajeros:
              <input type='text' placeholder='Adultos: 1, Niños: 0' />
            </label>
          </div>

          <div>
            <label htmlFor='' className='text-[14px] font-medium'>
              Código de descuento:
              <input type='text' placeholder='Ingresa tu código' />
            </label>
          </div>

          <button>
            <span className='hidden'>search</span> <IoIosSearch />
          </button>
        </div>
      </div>
    </section>
  );
}

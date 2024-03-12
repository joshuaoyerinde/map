
import React, { useRef, useEffect} from 'react'


function NavTest () {
    // let showHide = ''
    let sideNav = useRef(false)
    let sideNav2 = useRef(false)
    function classNames(...classes) {
        console.log(...classes)
        return classes.filter(Boolean).join(' ')
      }
    //   function closeNav (){
    //         sideNav.current.style.display =  'none'
    //         sideNav2.current.style.display= 'none'
    //         // alert("joshua")
    //         // sideNav.current.style.display='none'
    //         console.log("dkvmsdm");
    //   }
      useEffect(()=>{
        if(sideNav && sideNav2){
            sideNav.current.style.display= 'block'
            sideNav2.current.style.display= 'block'
        }else{
            sideNav.current.style.display= 'block'
        }
      })
      
    return(
        <div className='flex font max-h-screen bg-slate-100'>
            <div  ref={sideNav2}  className={classNames(
                sideNav  ? 'bg-[#00000093] w-screen md:w-fit':'bg-transparent w-fit pointer-events-none md:pointer-events-auto', 'flex fixed md:static h-screen z-50 transition-all duration-500'
            )}>
                <div id='hidenav' ref={sideNav} className={classNames(sideNav  ? '' : '-translate-x-full md:translate-x-0','h-full w-60 bg-gray-50 shadow-slate-200 overflowed shadow-sm p-2')}>
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    lorem is here today as u can see it here now
                    {/* <div className='w-full h-full md:hidden' onClick={closeNav}></div> */}
                </div>
                
            </div>
            <div className={classNames(
                sideNav ? '':'', 'h-screen w-full bg-gray-50 overflowed text-[#4F4F4F] dark:bg-dark dark:text-gray-300'
            )}>
                djovji
                <button 
                    className="rounded-full hover:bg-gray-200 transition duration-300 h-8 w-8 inline-flex justify-center items-center text-xl md:hidden">
                   Hide
                </button>
            </div>
           
        </div>
    )
}

export default NavTest
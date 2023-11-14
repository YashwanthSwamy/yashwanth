import { copyright } from "../assets/icons";

const Footer = () => {
  return (
    <div className="absoulte bottom-1">
        <p className="flex flex-row justify-center m-2">
            <img src={copyright} alt="copyright" className="w-4 h-4 mt-1 mr-1"/>
            2023
            <span className='font-semibold pl-2 pr-4 sm:text-small '>
                Yashwanth
            </span> 
            All rights reserved.
         </p>
    </div>
  )
}

export default Footer
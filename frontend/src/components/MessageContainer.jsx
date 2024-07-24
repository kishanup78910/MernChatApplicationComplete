import React, { useEffect } from 'react'
import HomePage from './HomePage'
import SendInput from './SendInput'
import Messages from './Messages'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice'

const MessageContainer = () => {
  const {selectedUser} = useSelector(store=>store.user)
  if(!selectedUser) return <h1 className='md:min-w-[550px] flex flex-col items-center justify-center'>Lets start chat</h1> ; 

  return (
    <div className='md:min-w-[550px]  flex flex-col'>
         <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
     <div className='avatar online'>
        <div className='w-12 rounded-full'>
            <img className='' src={selectedUser?.profilePhoto || "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/42502/281942/1569322022768_Varha_Avtar_Digital_Painting_Vimanika_Arts__73564.1687416435.jpg?c=2"} alt="image" />
        </div>
      </div>
      <div className=' flex flex-col flex-1'>
        <div className='flex gap-2 justify-between items-center flex-1'>
            <p>
              {selectedUser?.fullName || "selected name"}
            

            </p>
        </div>
      </div>
     </div>
    <Messages/>
    <SendInput/>
    </div>
  )
}

export default MessageContainer

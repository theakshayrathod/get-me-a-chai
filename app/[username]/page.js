import React from 'react'

const username = ({ params }) => {
  return (<>
    {params.username}
    <div className='cover w-full relative' >
      <img className='object-cover w-full h-[350px]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/9839843/e5e7fb0714b14f7cbc166ce3d53eb97b/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/6.jpg?token-time=1725408000&token-hash=UWjeVrtSUvLL-l69UpFWGXQPoDBg5KXhaSR_PMa4lZs%3D" alt="" />
      <div className='absolute -bottom-20 right-[45%] border-2 border-white rounded-full '>
        <img className='rounded-full' width={150} height={150} src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/9839843/62bde88d31f34d8ca089fc34ff91c8a4/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/3.jpg?token-time=1724976000&token-hash=2SR2i1gQdTaf52RpjWmlYKHdg7vTa22R9-xEIWcpLdo%3D" alt="" />
      </div>
    </div>
    <div className="info flex justify-center items-center my-24  flex-col gap-2 ">
      <div className='font-bold text-lg ' >

        @{params.username}
      </div>
      <div className='text-slate-400' >
        Just a group of Anime lovers/haters :)
      </div>
      <div className='text-slate-400'>
        15,544 members720 posts</div>
      <div className="payment mt-11 flex gap-3 w-[80%] ">
        <div className="supporters w-1/2 bg-slate-900  rounded-lg p-10e">
          {/* show list of all supporters */}
          <h2 className='text-2xl  font-bold my-5'>
            Supporters
          </h2>
          <ul className='mx-5 text-lg'>
            <li className='my-2 flex items-center gap-2'>
              <img className='rounded-full' width={35} src="avatar.gif" alt="user avatar" /><span>Rohit donated <span className='font-bold'>$50 </span> with a message "Lots of Love"</span></li>

              <li className='my-2 flex items-center gap-2'>
              <img className='rounded-full' width={35} src="avatar.gif" alt="user avatar" /><span>Rohit donated <span className='font-bold'>$50 </span> with a message "Lots of Love"</span></li>

              <li className='my-2 flex items-center gap-2'>
              <img className='rounded-full' width={35} src="avatar.gif" alt="user avatar" /><span>Rohit donated <span className='font-bold'>$50 </span> with a message "Lots of Love"</span></li>

              <li className='my-2 flex items-center gap-2'>
              <img className='rounded-full' width={35} src="avatar.gif" alt="user avatar" /><span>Rohit donated <span className='font-bold'>$50 </span> with a message "Lots of Love"</span></li>




          </ul>
        </div>
        <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
          <h2 className='text-2xl font-bold my-5' >Make a Payment</h2>
          <div className="flex gap-2 flex-col">

            <div>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
            </div>
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />

            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />


            <button type="button" className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>


          </div>
          {/* or choose from this amounts */}
          <div className="flex  gap-2 mt-5">
            <button className='bg-slate-800 p-3 rounded-lg '  >Pay $10</button>
            <button className='bg-slate-800 p-3 rounded-lg '  >Pay $20</button>
            <button className='bg-slate-800 p-3 rounded-lg '  >Pay $30</button>


          </div>


        </div>
      </div>
    </div>
  </>
  )
}

export default username

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'


let user;

const Join = () => {
    const [name, setName] = useState()

    const sendUser = () => {
        user = name
        setName("")
    }

    return (
        <div className={"flex flex-col justify-center items-center bg-zinc-900  w-full h-screen "}>
            <img className='w-40 mb-8' src={logo} alt="logo" />
            <h1 className='text-slate-100 text-5xl tracking-wide uppercase pr-28 pl-28 border-b-2 mb-3'>Chat</h1>
            <input placeholder='Enter Your Name' value={name} type="text" className='py-4 px-5 w-[355px] my-3 outline-none rounded-lg' onChange={(e) => setName(e.target.value)} />
            <Link onClick={(e) => (!name) ? e.preventDefault() : null} to="/chat" >
                <button className={"py-4 px-5 w-[355px] my-3 bg-rose-600 hover:bg-rose-800 transition-all text-white text-xl rounded-full"} onClick={sendUser} >
                    login
                </button>
            </Link>
        </div >
    )
}

export default Join;
export { user };
import React from "react";
import { NavLink } from "react-router-dom";


const Foot = ({onDeleteCompleted}) =>{
    return(
    <footer className="flex justify-content-between bg-secondary bg-gray-300 px-12 ml-2" id="mainFooter">
        <div className=" flex justify-content-between  ">
            <NavLink to="/" className="px-5 py-2 ml-0 m-2 btn-primary font-bold text-xl bg-sky-300 hover:bg-sky-100 rounded-sm" ><i className='text-xl bx bx-list-ul'></i></NavLink>
            <NavLink to="/completed" className="px-5 py-2 m-2 btn-primary font-bold text-xl bg-sky-300 hover:bg-sky-100 rounded-sm " ><i className='text-xl bx bxs-check-square' ></i></NavLink>
            <NavLink to="/add-task" className="px-5 py-2 m-2 btn-primary font-bold text-xl bg-sky-300 hover:bg-sky-100 rounded-sm" ><i className='text-xl bx bxs-add-to-queue'></i></NavLink>
            <button className="px-5 py-2 m-2 btn-primary font-bold text-xl bg-sky-300 hover:bg-sky-100 rounded-sm" onClick={onDeleteCompleted} ><i className='text-xl bx bxs-trash-alt' ></i></button>
        </div>
    </footer>)
}

export default Foot

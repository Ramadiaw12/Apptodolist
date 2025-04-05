import React from "react";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';


const Addtask = (props) =>{
    
    const newTask = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nouvelle tâche :", newTask.current.value); 
        props.onAddTask(newTask.current.value)

        navigate('/Todolist');
        newTask.current.value = ""; // Réinitialise le champ


    };
        return(
            <section className="p-10 pl-0" >
                <h1 className="font-bold p-6 text-5xl text-center ">Nouvelle tâche</h1>
                <div className=" items-center border-2 border-gray-200 p-4  pb-8">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="ml-7 mt-6 ">
                            <label form="taskName" className="text-xl " >Nom de la tâche</label>
                            <input type="text" 
                                className="w-full border-2 my-5 block text-sm/6 font-medium text-gray-900 rounded-lg   items-center   border-gray-300 p-2"  
                                id="taskName" 
                                required 
                                ref={newTask}  />
                        </div>
                        <button type="submit" className=" ml-7 rounded-md bg-sky-300 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-sky-100 ">Créer</button>
                    </form>
                </div>
            </section>

        )
    
}

export default Addtask
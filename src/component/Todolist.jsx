import React from "react";
import Todo  from "./Todo";
import { useParams } from "react-router-dom";

const Todolist = ({tasks, onToggleCompleted}) => {
    const { filter } = useParams();
    console.log("Filtre reçu:", filter)
    
    // Filtrer les taches
    const filterTask = filter === 'completed' ? tasks.filter(task => task.completed) : tasks;
    
    return(
        <>
            <h1 className="text-center p-6 text-5xl font-bold" >Liste des tâches</h1>

            <ul className=" divide-gray-300">
                {
                    filterTask.length === 0 ? (
                        <li className="text-xl font-black border-2 border-gray-300 p-4 rounded-sm">Aucune tâche trouvée</li>
                    ) : (
                        filterTask.map((task) => <Todo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />
                    )
                    )              
                }
             </ul>

        </>
    )
        
}
export default Todolist

  
import React from "react";
import Todolist from "./Todolist";

// Charger d'afficher la liste 
class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            completed: props.task.completed // C'est la tâche que ce composant (state) est chargé d'afficher et qui est envoyé dans ce composant sous la forme d'une propriété (props)
        }
    }
    
    // Il vas modifier la valeur de completed de la propriété completed de l'état de ce composant  
    ToggleCompleted = () => {
        //  Elle permet de créer la nouvelle version de mon état. Elle a acces à l'acienne version de mon état
        this.setState(prevState => ({
            completed: !prevState.completed // Completed sera égal à l'inverse de ça valeur actuelle
        }))

        if (this.props.onToggleCompleted) {
            this.props.onToggleCompleted(this.props.task.id);
          } else {
            console.error("La fonction onToggleCompleted n'est pas définie !");
          }
          
    }

    render(){
        return(
            
            <>
                
                <li className={"flex justify-between items-center border text-xl font-black border-gray-300 p-4 rounded-sm " + (this.state.completed? 'bg-sky-500': 'null')} >
                {this.props.task.name}
                <button className={"btn btn-sm border-2 border-sky-300 px-5 py-2 text-blue-300 hover:bg-sky-500 rounded-md grid-flow-row" + (this.state.completed? 'bg-sky-300': 'btn-outline-success')} onClick={this.ToggleCompleted} >&#x2713;</button>

                </li>
            </>
            
        )
    }
}

export default Todo
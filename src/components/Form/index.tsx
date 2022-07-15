import Button from "../Button";
import style from './form.module.scss';

function Form(){
    return(
        <form className={style.newTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Add new task</label>
                <input type="text" name="task" id="task" placeholder="Wich task do You want to Study?" required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Qual tempo</label>
                <input type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00" required />
            </div>
            <Button text="Add" />
        </form>
    )
}

export default Form
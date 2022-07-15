import style from './button.module.scss';

function Button({text}: {text:string}){
    return(
        <button className={style.button}>{text}</button>
    )
}

export default Button
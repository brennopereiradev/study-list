import Button from "../Button";
import Watch from "./Watch";
import style from "./stopwatch.module.scss";

function StopWatch(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <div>
                <Button text="Start" />
            </div>
        </div>
    )
}
export default StopWatch
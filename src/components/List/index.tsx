import Item from './item';
import style from './list.module.scss';

function List (){
    const tasks = [{
        task: 'react',
        time: '02:00:00'
    },
    {
        task: 'JavaScript',
        time: '01:00:00'
    },{
        task: 'TypeScript',
        time: '01:00:00'
    }]
    return(
        <aside className={style.taskList}>
            <h2>Daily Studies</h2>
            <ul>
                {tasks.map((item, index) =>(
                    <Item key={index} {...item} />
                ))}
            </ul>
        </aside>
    )
}

export default List
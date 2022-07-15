import Form from '../components/Form';
import List from '../components/List';
import StopWatch from '../components/StopWatch';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <StopWatch />
    </div>
  );
}

export default App;

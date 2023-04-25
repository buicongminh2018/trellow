import Task from 'feature/Task/Task';
import './style.scss';



function Column(props) {
    return (
        <div className='column'>
        <header>
          Brain
        </header>
        <ul>
          
          <Task/>
          
         
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
        <footer></footer>

      </div>
    );
}

export default Column;
import AppBars from 'feature/AppBar';
import './App.scss';
import AppBoard from 'feature/AppBoard';
import Column from 'feature/Column';
import AppBoardContent from 'feature/AppBoardContent';


function App() {
  return (
    <div className="app">
      <AppBars/>
      <AppBoard/>
      <AppBoardContent/>

  
    </div>
  );
}

export default App;
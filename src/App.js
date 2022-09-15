import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>React-redux tutorial</h1>
      <Todos />
    </div>
  );
}

export default App;

// step1: install packages
// step2: constants define
// step3: async action creator
// step4: reducer
// step5: create store
// step6: Provide store
// step7: use store -> useSelector
// step8: use dispatch -> useDispatch
// step9: adding css

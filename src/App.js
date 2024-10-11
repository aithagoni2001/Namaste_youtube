
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import AppStore from './utils/AppStore';

function App() {
  return (
    <div>
      <Provider store={AppStore}>
      <Header/>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;

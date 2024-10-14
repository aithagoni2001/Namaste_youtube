import{createBrowserRouter,RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import AppStore from './utils/AppStore';
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {

  const approuter = createBrowserRouter([{
    path : "/",
    element:<Body/>,

    children:[{
      path:"/",
      element: <MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>

    }

    ]
  }])
  return (
    <div>
<Provider store={AppStore}>
  <Header/>
  <RouterProvider router={approuter}/>
</Provider>
    </div>
  );
}

export default App;

import './App.css';
import {ROUTES} from './routes/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModelContextProvider } from './context/ModelContext';
function App() {
  const routes = createBrowserRouter(ROUTES) 
  return (
   <>
   <ModelContextProvider>
   <RouterProvider router={routes}>

   </RouterProvider>
   </ModelContextProvider>
   
   </>
  );
}

export default App;

import './App.css';
import {ROUTES} from './routes/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const routes = createBrowserRouter(ROUTES) 
  return (
   <>
   <RouterProvider router={routes}>

   </RouterProvider>
   
   </>
  );
}

export default App;

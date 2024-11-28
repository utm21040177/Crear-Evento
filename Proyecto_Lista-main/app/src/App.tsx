import react from 'react';
import './App.css';
import { Login } from './components/Login';
import { RegisterParticipants } from './Participantes/RegisterParticipants';
import { CrearEvento } from './admins/CreateEvents';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <RegisterParticipants/>,
  },
  {
    path: "/CreateEvents",
    element: <CrearEvento/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
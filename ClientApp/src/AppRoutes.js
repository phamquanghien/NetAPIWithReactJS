import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import PersonRead from "./components/Persons/PersonRead";
import Student from "./components/Students/Student";
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/ps',
    element: <PersonRead />
  },
  {
    path: '/sinh-vien',
    element: <Student />
  }
];

export default AppRoutes;

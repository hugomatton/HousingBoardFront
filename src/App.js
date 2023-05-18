import AdminPage from "./component/Admin/AdminPage";
import OwnerPage from "./component/Owner/OwnerPage";
import SignupLogin from "./component/SigupLogin/SignupLogin";
import StudentPage from "./component/Student/StudentPage";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Chat from "./component/Chat/Chat";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignupLogin/>
    },
    {
      path: 'student',
      element: <StudentPage/>
    },
    {
      path: 'owner',
      element: <OwnerPage/>
    },
    {
      path: 'admin',
      element: <AdminPage/>
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

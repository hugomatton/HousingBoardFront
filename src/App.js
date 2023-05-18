import AdminPage from "./component/Admin/AdminPage";
import OwnerPage from "./component/Owner/OwnerPage";
import SignupLogin from "./component/SigupLogin/SignupLogin";
import StudentPage from "./component/Student/StudentPage";
import ChatPage from "./component/Chat/Chat";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
    },
    {
      path: 'chat',
      element: <ChatPage/>
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

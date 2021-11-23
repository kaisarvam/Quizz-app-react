import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import YourResults from './Components/Pages/ResultsPagesForUser/YourResults/YourResults';
import Login from './Components/Pages/Login/Login'
import AuthProvider from './Context/AuthProvider';
import RetakeResult from './Components/Pages/ResultsPagesForUser/RetakeResult/RetakeResult';
import PrivateRoute from './Components/Pages/PrivateRoute/PrivateRoute';
import Dashbord from './Components/Pages/Dashbord/Dashbord';
import MakeAdmin from './Components/Pages/Dashbord/MakeAdmin/MakeAdmin';
import TakeTest from './Components/Pages/TakeTest/TakeTest';
import Register from "./Components/Pages/Register/Register";
import ViewUsers from './Components/Pages/AdminPages/ViewUsers/ViewUsers';
import AddQuestion from './Components/Pages/AdminPages/AddQuestion/AddQuestion';
import ViewQuestions from './Components/Pages/AdminPages/ViewQuestions/ViewQuestions';
import UserResultPage from './Components/Pages/AdminPages/UserResultPage/UserResultPage';
import UserTestResult from './Components/Pages/AdminPages/UserTestResult/UserTestResult';
import NotFound from './Components/Pages/NotFound/NotFound';
import UpdateQuestion from './Components/Pages/AdminPages/UpdateQuestion/UpdateQuestion';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>

      <Routes>

        <Route exact path="/" element={<Home/>}>
        </Route>

        <Route  path="/home" element={ <Home/>  }>
        </Route>

        <Route  path="/TakeTest" element={<PrivateRoute><TakeTest/></PrivateRoute>  }>
        </Route>

      

        <Route exact path="/dashbord/" element={<PrivateRoute><Dashbord/></PrivateRoute>}>
          <Route path="/dashbord/makeAdmin" element={<MakeAdmin/>}> </Route>
          <Route path="/dashbord/addQuestion" element={<AddQuestion/>}> </Route>
          <Route path="/dashbord/viewQuestion" element={<ViewQuestions/>}> </Route>
          <Route path="/dashbord/viewQuestion/updateQuestion/:id" element={<UpdateQuestion/>}></Route>
          <Route  path="/dashbord/viewUsers" element={<ViewUsers/>} ></Route>
          <Route  path="/dashbord/viewUsers/UserResultPage/:email" element={<UserResultPage/>} ></Route>
          <Route  path="/dashbord/viewUsers/UserResultPage/:email/:testNumber" element={<UserTestResult/>} ></Route>
          <Route  path="/dashbord/myResult" element={<PrivateRoute><YourResults/></PrivateRoute>}> </Route>
          <Route path="/dashbord/myResult/RetakeResult/:ReId" element={<RetakeResult/>}></Route>
        </Route>

        

        <Route exact path="/login" element={<Login/>}> </Route>

        <Route exact path="/register" element={<Register/>}></Route>

        <Route exact path="*" element={<NotFound/>}></Route>


        

      </Routes>

</BrowserRouter>  
</AuthProvider>   
    </div>
  );
}

export default App;

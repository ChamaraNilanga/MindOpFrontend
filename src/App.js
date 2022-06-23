import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Homestudent from './pages/HomeStudent/HomeStudent';
import Addcourseform from './pages/Addcourse/Addcourse';

import CourseContent from './pages/CourseContent/CourseContent';
import TopicBox from './components/TopicBox/TopicBox';
import ViewVideos from './pages/ViewVideos/ViewVideos';
import AddActivtyResoureses from './pages/AddActivity&Resoureses/AddActivtyResoureses';

import AllcoursesDelUpdlist from './components/AllcoursesDeleteUpdateList/Allcoursesdelupdlist';
import Courseupdatedeletelist from './pages/CoursesUpdateDeleteList/Courseupddellist';

import Searchbar from './components/SearchBar/Searchbar';
import Singlecoursedetails from './components/SingleCourseDetails/Singlecoursedetails';
import Enrollreqlist from './components/EnrollmentRequests/Enrollmentreqlist';
import Conductreqlist from './components/ConductingRequests/Conductingreqlist';

import UpdateCourseDetails from './pages/UpdateCourseDetails/Updatecoursedetails';
import SingleCoursePage from './pages/SingleCoursePage/Singlecoursepage';
import Enrollmentrequestlist from './pages/EnrollmentRequestsList/Enrollmentrequestlist';
import Stuteacherallcourses from './pages/StudentTeacherAllcourses/Stuteacherallcourses';
import Assignteacherformodule from './pages/AssignTeacherForModule/Assignteacherformodule';
import MyBlogs from "./pages/Blog/myblog/MyBlog";
import Post from "./pages/Blog/post/Post";
import SinglePost from "./pages/Blog/singlePost/SinglePost";
import Write from "./pages/Blog/writeblog/Write";
import DeleteBlog from "./pages/Blog/deleteblog/DeleteBlog";

import StripeCheckoutComponent from './pages/Payment/StripeCheckoutComponent';
import EditBlog from "./pages/Blog/editblog/EditBlog";
import ChatComponent from './components/ChatStudent/chat';
import ChatTeacher from "./components/ChatTeacher/chatTeacher";
import StripePaymentSuccess from './pages/Payment/StripePaymentSuccess';


import Addforumcategory from './components/AddForumCategory/Addforumcategory';
import Forumcategory from './pages/FormsCategory/Formscategory';
import Addcategory from './pages/AddCategory/Addcategory';
import Questionlistpage from './pages/QuestionListPage/Questionlistpage';
import Singlequestionforumpage from './pages/SingleQuestionForumPage/Singlequestionforumpage';
import Addforumquestionpage from './pages/AddForumQuestionPage/Addforumquestionpage';
import Forummylist from './pages/ForumMylist/Forummylist';
import Addforumcomments from './pages/AddForumComment/Addforumcomment';
import Addforumsubcomment from './pages/AddForumSubComment/Addforumsubcomment';




function App() {
  const role = 'a';
  const id='194075X';
  // const mod=40;

  return (
    <div className="App">
      
      <Router>
       <Routes>

       {/* <Route exact path="/" element={<Home/>}/> */}
     {/* <Route path="/" element={<Navigationbar/>}/>    */}
     <Route path="/student" element={<ChatComponent/>}/>
     <Route path="/teacher" element={<ChatTeacher/>}/>
     <Route path="/payment" element={<StripeCheckoutComponent />}/>
     <Route path="/stripepaymentsuccess" element={<StripePaymentSuccess/>}/>
     
     {/* <Route exact path="/Blogs/" element={<MyBlog/>}/> */}
     
     
     <Route path="/editblog/" element={<EditBlog/>}/>
     <Route path='/home' element={<Homestudent role={role}/>}/>
     <Route path='/course/addcourse' element={<Addcourseform/>}/>

          <Route path='/home' element={<Homestudent role={role} id={id}/>}/>
          <Route path='/course/addcourse' element={<Addcourseform/>}/>

          <Route path='/coursecontent'element={<CourseContent/>}/>
          <Route path='/viewvideos'element={<ViewVideos/>}/>
          <Route path='/addactivityresourses'element={<AddActivtyResoureses/>}/>

          <Route path='/course/list' element={<Courseupdatedeletelist/>}/>
          <Route path='/updatecourse' element={<UpdateCourseDetails/>}/>
          <Route path='/singlecourse' element={<SingleCoursePage role={role} user={id}/>}/>
          <Route path='/enrollmentrequests' element={<Enrollmentrequestlist  userid={'194101A'} />}/>
          <Route path='/courseswithdetails' element={<Stuteacherallcourses role={role}/>}/>
          <Route path='/assignteacher' element={<Assignteacherformodule user={id}/>}/>
          <Route path='/singlecourse' element={<SingleCoursePage/>}/>
         <Route  path="/Blogs" element={<Post/>}/>
         <Route  path="/Blogs/Blogs" element={<Post/>}/>
         <Route  path="/singlepost" element={<SinglePost/>}/>
         <Route  path="/write" element={<Write/>}/>
         <Route  path="/myblogs/" element={<MyBlogs/>}/>
         <Route  path="Blogs/deleteblog/" element={<DeleteBlog/>}/>
         <Route path='/forums/addcategory' element={<Addcategory/>}/>
         <Route path='/forums' element={<Forumcategory role={role}/>}/>
         <Route path='/forum/questions' element={<Questionlistpage user={id}/>}/>
         <Route path="/forum/single" element={<Singlequestionforumpage user={id}/>}/>
         <Route path="/forum/addforum" element={<Addforumquestionpage/>}/>
         <Route path="/forum/mylist" element={<Forummylist user={id}/>}/>
         <Route path="/forum/reply" element={<Addforumcomments user={id}/>}/>
         <Route path='/forum/subreply' element={<Addforumsubcomment user={id}/>}/>
         


        </Routes>
     </Router> 

   

    </div>

  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import JobDetails from "../Pages/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../Pages/JobApply";
import MyApplications from "../Pages/MyApplications";
import AddJob from "../Pages/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            

            {
                path: "/jobs/:id",
                element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },


            {
                path: "/jobApply/:id",
                element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>,
            },


            {
                path: "/myApplications",
                element: <PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
            },


            {
                path: "/addJob",
                element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
            },


            {
                path: "/myPostedJobs",
                element: <PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
            },


            {
                path: "/viewApplications/:job_id",
                element: <PrivateRoutes><ViewApplications></ViewApplications></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
            },


            {
                path: "/register",
                element: <Register></Register>
            },


            {
                path: "/signin",
                element: <SignIn></SignIn>
            }
        ]
    },
    ]);


export default routes; 
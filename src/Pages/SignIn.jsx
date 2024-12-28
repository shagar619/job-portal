import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signin from './../assets/lottie/signin.json';
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";


const SignIn = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';


    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }


    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result => {
            Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "Successfully Login",
            });
            navigate(from);
        })
        .catch(error => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong E-mail or Password!",
            });
        })
    }

    return (
        <div className="py-32 grid grid-cols-2">
            
        <Lottie className="col-span-1" animationData={signin}></Lottie>

            <div className="col-span-1">
            <h3 className="text-blue-600 text-base font-medium text-center mb-4">Welcome Back!</h3>
            <h1 className="text-4xl font-bold my-4 text-center">Member Login</h1>
            <p className="text-base text-gray-500 font-normal text-center">Access to all features. No credit card required.</p>
            <button 
            onClick={handleSignInWithGoogle}
            className="flex justify-center items-center gap-4 py-3 border w-full py-3text-base font-semibold rounded-sm mt-8 hover:text-blue-600"><FaGoogle className="text-blue-600"></FaGoogle>Sign Up With Google</button>
            <p className="my-8 text-center underline">Or Continue With</p>

            <form onSubmit={handleSignIn} className="space-y-5">

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">E-mail *</span>
                </div>
                    <input type="email" name="email" placeholder="Enter Your email" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Password *</span>
                </div>
                    <input type="password" name="password" placeholder="Enter Your password" className="input input-bordered w-full" />
            </label>

            <button className="my-4 underline text-base text-gray-500 font-normal hover:text-black">Forgot password?</button>

            <input className="bg-[#023047] text-white w-full py-3 rounded cursor-pointer" type="submit" value="login" />

            </form>

            <p className="text-base font-normal text-center my-5">Don't have an account? <Link className="underline text-lg font-bold" to="/register">Sign Up</Link></p>

            

            </div>
        </div>
    );
};

export default SignIn;
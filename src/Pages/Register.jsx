import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import registerLottie from './../assets/lottie/register-lottie.json'
import toast from "react-hot-toast";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Register = () => {

  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const username = form.username.value;
    const password = form.password.value;
    const checkbox = form.checkbox.checked;

    const user = { name, email, username, password, checkbox };

    
    // password validation
    if(!checkbox){
      toast.error('Please accept our terms & conditions.');
      return;
    }

    if(password.length < 6) {
      toast.error('Password should be 6 characters or longer');
      return;
    }

    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if(!(passwordRegex).test(password)){
      toast.error('Password should contain at least one uppercase, one lowercase, one number, one special character!');
      return;
    }


    createUser(email, password)
    .then(result => {
      console.log(result.user);
      Swal.fire("Congratulations! Registration Successfully Completed.");
    })
    .catch(error => {
      console.log(error.message);
    })

    
  }

    return (
    <div className="py-32 grid grid-cols-2 gap-6">

      <Lottie className="col-span-1" animationData={registerLottie}></Lottie>

        <div className="col-span-1">
          <h3 className="text-blue-600 text-base font-medium text-center mb-4">Register</h3>
          <h1 className="text-4xl font-bold my-4 text-center">Start for free Today</h1>
          <p className="text-base text-gray-500 font-normal text-center">Access to all features. No credit card required.</p>
          <button 
          onClick={handleSignInWithGoogle}
          className="flex justify-center items-center gap-4 py-3 border w-full py-3text-base font-semibold rounded-sm mt-8 hover:text-blue-600"><FaGoogle className="text-blue-600"></FaGoogle>Sign Up With Google</button>
            <p className="my-8 text-center underline">Or Continue With</p>
            
          <form onSubmit={handleRegister} className="space-y-3">

            {/* form */}
            
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-normal">Full Name *</span>
              </div>
            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered w-full" />
          </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-normal">E-mail *</span>
              </div>
            <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered w-full" />
          </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-normal">Username *</span>
              </div>
            <input type="text" name="username" placeholder="Enter username" className="input input-bordered w-full" />
          </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-normal">Password *</span>
              </div>
            <input type="password" name="password" placeholder="Enter Your password" className="input input-bordered w-full" />
          </label>

          <div className="form-control flex justify-end my-4">
            <label className="flex items-center gap-3">
                <input type="checkbox" name="checkbox" className="checkbox checkbox-accent" />
                <span className="label-text text-base font-normal">Agree our terms and policy</span>
            </label>
          </div>

          <input className="bg-[#023047] text-white w-full py-3 rounded cursor-pointer" type="submit" value="Submit & Register" />

          </form>
          <p className="text-base font-normal text-center my-5">Already have an account? <Link className="underline text-lg font-bold" to="/signin">Sign In</Link></p>

        </div>
    </div>
    );
};

export default Register;
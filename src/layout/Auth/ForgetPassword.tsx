import React from 'react';
import { useForm } from 'react-hook-form';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Img from '../../asets/images/Screen Shot 2023-02-25 at 9.04.40 PM.png'


const ForgetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    //-----------------------------------------------------------------
    const resetPassword = (data: any) => {
        console.log(data)
    }
    //-----------------------------------------------------------------
    return (
        <div className='grid grid-cols-12 bg-white'>
            <div className='col-span-6 flex justify-start items-start max-w-[85%]'>
                <div className='bg-yellow-10 min-w-[80%] p-3 ml-16 mt-12'>
                    <div className='flex justify-start items-center mb-20 font-semibold text-1xl text-[#a3b1c2]'>
                        <div className=' text-[#a3b1c2]'>
                            <IoIosArrowBack></IoIosArrowBack>
                        </div>
                        <div className='px-2'>
                            <Link to='/'>Back to simmple</Link>
                        </div>
                    </div>
                    <p className='text-4xl font-bold'>Forget Password</p>
                    <p className='pt-2 text-[#a3b1c2] pb-6'>Enter your email to reset password!</p>
                    {/* <button className='w-full py-2 px-5 bg-[#f4f7fe] hover:bg-slate-200 rounded-lg'>
                        <div className='flex justify-center items-center'>
                            <div className='p-2 text-2xl'>
                                <FcGoogle></FcGoogle>
                            </div>
                            <div className='font-semibold'>
                                Sign in with Google
                            </div>
                        </div>
                    </button> */}
                    {/* <div className="divider">or</div> */}
                    <form onSubmit={handleSubmit(resetPassword)}>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email*</span></label>
                            <input
                                placeholder="mail@sammple.com"
                                {...register("email", {
                                    required: "Email Address is required"
                                })} type="email" className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-600 text-sm'></p>}
                        </div>

                        <div className='py-5'>
                            <input className='btn w-full btn-primary' value={'Reset'} type="submit" />
                        </div>
                    </form>
                    <p className='font-bold my-3'>Password reset done?<Link to={'/sign_in'}> <span className='text-[#422afb]'>Sign in</span> </Link></p>
                </div>
            </div>
            {/* ------- */}
            <div className='col-span-6 h-full mb-10'>
                <img src={Img} alt="" />
            </div>
        </div>
    );
};

export default ForgetPassword;
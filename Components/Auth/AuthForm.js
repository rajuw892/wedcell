import { useRouter } from 'next/router'
import { useState } from 'react'
import Styles from '../../styles/Auth/Auth.module.css'
import {login} from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'


const AuthForm = ({ loginPagename }) => {
    const router = useRouter()
    const [active, setActive] = useState('register')
    const [password,setPassword] = useState('')
    const [mobile,setMobile] = useState('')
    const dispatch = useDispatch()


    const handleCustomerLogIn = ()=>{
        dispatch(login(mobile,password))
    }

    return (
        <div className={Styles.form_container}>
            <div className="tab-container d-flex align-items-center">
                <span className={active === 'register' ? "cursor-pointer primary-text  fs-5 w-50 text-center py-3" : 'cursor-pointer fs-5 w-50 text-center py-3'} style={{ backgroundColor: active == 'register' ? 'transparent' : 'rgba(0,0,0,0.10)' }} onClick={() => setActive('register')}>
                    Register
                </span>
                <span className={active === 'login' ? "cursor-pointer primary-text  fs-5 w-50 text-center py-3" : 'cursor-pointer fs-5 w-50 text-center py-3'} onClick={() => setActive('login')} style={{ backgroundColor: active == 'login' ? 'transparent' : 'rgba(0,0,0,0.10)' }}>
                    Login
                </span>
            </div>
            {
                active === 'register' &&
                <div className="register-form-container mt-4 px-4">
                    <div className="form-title">
                        <h5>{loginPagename === 'vendor' ? "Business Register" : 'Customer Register'}</h5>
                    </div>
                    <div className="input-field mb-3">
                        <label className="form-label text-gray">

                            {
                                loginPagename === "vendor" ?
                                    "Join wedcell get your business listed or to claim your listing for FREE!" : 'Join wedcell to get your vendor for your wedding'
                            }
                        </label>
                        <input type="text" placeholder='Phone' className="form-control py-3" />
                    </div>
                    <button className="primary-btn" onClick={()=>loginPagename === 'vendor' ? router.push('/dashboard') : router.push('/user-dashboard')}>Submit</button>
                    <div className="form-footer mt-4 d-flex align-item-center justify-content-between">
                        <span className="text-gray">
                            Have you subscribed?
                            <span className="primary-text ms-2 cursor-pointer" onClick={() => setActive('login')}>
                                Login
                            </span>
                        </span>
                        <span className="text-gray"> Forgot password?</span>
                    </div>
                </div>
            }

            {
                active === 'login' &&
                <div className="register-form-container mt-4 px-4">
                    <div className="form-title">
                        <h5>
                            {loginPagename === 'vendor' ? "Welcom Back Vendor" : 'Customer Login'}
                        </h5>
                    </div>
                    <div className="input-field mb-3">
                        <label className="form-label text-gray">
                            {
                                loginPagename === "vendor" ?
                                    "Join wedcell get your business listed or to claim your listing for FREE!" : 'Join wedcell to get your vendor for your wedding'
                            }
                        </label>
                        <input type="text" placeholder='Enter Mobile' className="form-control py-3" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
                    </div>
                    <div className="input-field mb-3">

                        <input type="password" placeholder='Enter Password' className="form-control py-3" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button className="primary-btn" onClick={loginPagename==='customer'? handleCustomerLogIn:()=>console.log('')}>Submit</button>
                    <div className="form-footer mt-4 d-flex align-item-center justify-content-between flex-wrap">
                        <span className="text-gray">
                            Are you new couple?
                            <span className="primary-text ms-2 cursor-pointer" onClick={() => {
                                setActive('register')
                            }}   >
                                Create a New Account
                            </span>
                        </span>
                        <span className="text-gray"> Forgot password?</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default AuthForm
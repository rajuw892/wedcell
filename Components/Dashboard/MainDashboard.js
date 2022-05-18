import React from 'react'
import Styles from '../../styles/Dashboard/Dashboard.module.css'
import Link from 'next/link'

const MainDashboard = () => {
    return (
        <div>
            <div className={`dashboard-header py-3 px-4 bg-white text-capitalize ${Styles.border_3}`}>
                <h3>Hi, Riya Singh makeup artist</h3>
                <span className="text-gray d-block ">
                    Here’s what’s happening with your wedding venue business today.
                </span>
            </div>
            <div className="cards-container mt-4">
                <div className="row gy-3 px-0">
                    <div className="col-md-4">
                        <div className="box-shadow bg-white py-3 px-5">
                            <span className="fs-1 fw-bold primary-text">
                                6
                            </span>
                            <span className="text-gray d-block">
                                Total Listed Item
                            </span>
                            <Link href={'#'}>
                                <a className='mt-5 text-center d-block'>
                                    View All
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box-shadow bg-white py-3 px-5">

                            <span className="fs-1 fw-bold primary-text">
                                1
                            </span>
                            <span className="text-gray d-block">
                                Your Reviews
                            </span>

                            <Link href={'#'}>
                                <a className='mt-5 text-center d-block'>
                                    View All
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box-shadow bg-white py-3 px-5">
                            <span className="fs-1 fw-bold primary-text">
                                2
                            </span>
                            <span className="text-gray d-block">
                                Request Quote
                            </span>
                            <Link href={'#'}>
                                <a className='mt-5 text-center d-block'>
                                    View All
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards-container mt-4">
                <div className="row gy-3 px-0">
                    <div className="col-md-6">
                        <div className="box-shadow bg-white venues-card py-3 px-4">
                            <div className="venue-card-header d-flex align-items-center justify-content-between">
                            <h5 className="primary-text fw-bold">Venues/Listing</h5>
                                <span className='fs-3 cursor-pointer'>
                                    
                                     +
                                </span>
                            </div>

                            <div className="list-container mt-4">
                                <div className="list-item  mb-3">
                                    <div className="list-item-title d-flex align-items-center justify-content-between">
                                        <span className='fw-semi'>
                                            Beauty Zone
                                        </span>

                                        <Link href={`/dashboard/${'124'}`}>
                                            <a className='primary-text '>
                                                Edit
                                            </a>
                                        </Link>

                                    </div>
                                    <p className='text-gray'>
                                        H.no 5403 gali no 205 parvatiya colony shona road peer baba ne
                                    </p>
                                </div>
                                <div className="list-item  mb-3">
                                    <div className="list-item-title d-flex align-items-center justify-content-between">
                                        <span className='fw-semi'>
                                            Beauty Zone
                                        </span>

                                        <Link href={'#'}>
                                            <a className='primary-text '>
                                                Edit
                                            </a>
                                        </Link>

                                    </div>
                                    <p className='text-gray'>
                                        H.no 5403 gali no 205 parvatiya colony shona road peer baba ne
                                    </p>
                                </div>
                                <div className="list-item  mb-3">
                                    <div className="list-item-title d-flex align-items-center justify-content-between">
                                        <span className='fw-semi'>
                                            Beauty Zone
                                        </span>

                                        <Link href={'#'}>
                                            <a className='primary-text '>
                                                Edit
                                            </a>
                                        </Link>

                                    </div>
                                    <p className='text-gray'>
                                        H.no 5403 gali no 205 parvatiya colony shona road peer baba ne
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-white box-shadow add-video-card py-3 px-4 d-flex alig-items-center">
                            <input type="text" className={`form-control ${Styles.radius_0}`} placeholder='Enter Url Of Video '/>
                            <button className="primary-sm-btn">Add Video</button>
                        </div>

                        <div className="bg-white box-shadow px-4 py-2 payment-container mt-2">
                            <div className="payment-title my-4">
                                <h5 className="primary-text fw-bold">Payments</h5>
                            </div>
                            <div className="payment d-flex align-items-center mb-3">
                                <span className="paid-money text-success">
                                    + 5000
                                </span>
                                <h6 className='mb-0 fw-bold ms-4'>Acro Technologies</h6>
                            </div>
                            <div className="payment d-flex align-items-center mb-3">
                                <span className="paid-money text-success">
                                    + 5000
                                </span>
                                <h6 className='mb-0 fw-bold ms-4'>Acro Technologies</h6>
                            </div>
                            <div className="payment d-flex align-items-center mb-3">
                                <span className="paid-money text-success">
                                    + 5000
                                </span>
                                <h6 className='mb-0 fw-bold ms-4'>Acro Technologies</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDashboard
import React, { Component, useState } from 'react'
import Modal from './Modal'




export class Staking extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }


    openModal = () =>
        this.setState({
            isOpenModal: this.state.isOpenModal = true
        });

    closeModal = () =>
        this.setState({
            isOpenModal: this.state.isOpenModal = false
        });


    render() {

        const { isOpenModal } = this.state;


        return (
            <>
                <div className="container">
                    <h1 className='text-center text-white fw-bold display-2 mb-5 mt-5' ><span><img src="/img/cuchillos.png" width="100" alt="" /></span> TRAINING <span><img src="/img/cuchillos.png" width="100" alt="" /></span> </h1>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <br /> <br />
                        <div className="col">
                            <div className="card text-dark bg-transparent border-0 w-75">
                                <img src="/img/Comun_badger.gif" class="rounded-3 border border-3 border-white" alt="..." />
                                <div className="card-body text-center">
                                    <h2 className='text-white mt-1 mb-3'>Badger Común</h2>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-danger w-50" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="32">33%</div>
                                        <div className="progress-bar bg-warning w-50" role="progressbar" aria-valuenow="100" aria-valuemin="33" aria-valuemax="66">66%</div>
                                        <div className="progress-bar bg-success w-50" role="progressbar" aria-valuenow="100" aria-valuemin="66" aria-valuemax="100">99%</div>
                                    </div>
                                    <button className='btn btn-warning me-3'>Train</button>
                                    <button className='btn btn-warning ' >Feed</button>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className='btn btn-primary position-relative'> Info
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            6+
                                            <span className="visually-hidden">unread messages</span>
                                        </span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-transparent border-0 w-75">
                                <img src="/img/Pcomun_deer.gif" class="rounded-3 border border-3 border-white" alt="..." />
                                <div className="card-body text-center">
                                    <h2 className='text-white mt-1 mb-3'>Deer Poco Común</h2>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-danger w-50" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        <div className="progress-bar bg-warning w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        <div className="progress-bar bg-success w-50" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                    <button className='btn btn-warning me-3'>Train</button>
                                    <button className='btn btn-warning ' >Feed</button>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className='btn btn-primary position-relative'> Info
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            6+
                                            <span className="visually-hidden">unread messages</span>
                                        </span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-transparent border-0 w-75">
                                <img src="/img/Pcomun_lizard.gif" class="rounded-3 border border-3 border-white" alt="..." />
                                <div className="card-body text-center">
                                    <h2 className='text-white mt-1 mb-3'>Pcomun Lizard</h2>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-danger w-50" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        <div className="progress-bar bg-warning w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        <div className="progress-bar bg-success w-50" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                    <button className='btn btn-warning me-3'>Train</button>
                                    <button className='btn btn-warning ' >Feed</button>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className='btn btn-primary'> Info</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card  bg-transparent border-0 w-75">
                                <img src="/img/legendary_dog.gif" class="rounded-3 border border-3 border-white" alt="..." />
                                <div className="card-body text-center">
                                    <h2 className='text-white mt-1 mb-3'>Legendary Dog</h2>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-danger w-50" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        <div className="progress-bar bg-warning w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        <div className="progress-bar bg-success w-50" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                    <button className='btn btn-warning me-3'>Train</button>
                                    <button className='btn btn-warning ' >Feed</button>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className='btn btn-primary'> Info</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card  bg-transparent border-0 w-75">
                                <img src="/img/legendary_deer.gif" class="rounded-3 border border-3 border-white" alt="..." />

                                <div className="card-body text-center">
                                    <h2 className='text-white'>Legendary Deer</h2>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-danger w-50" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        <div className="progress-bar bg-warning w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        <div className="progress-bar bg-success w-50" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                    <button className='btn btn-warning me-3'>Train</button>
                                    <button className='btn btn-warning ' >Feed</button>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className='btn btn-primary position-relative'> Info
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            6+
                                            <span className="visually-hidden">unread messages</span>
                                        </span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card  bg-transparent border-0 w-75">
                                <img src="/img/legendary_owl.gif" class="rounded-3 border border-3 border-white" alt="..." />
                                <div className="card-body text-center">
                                    <h2 className='text-white' >Legendary Owl</h2>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-danger w-50" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        <div className="progress-bar bg-warning w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        <div className="progress-bar bg-success w-50" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                    <button className='btn btn-warning me-2' >Train</button>
                                    <button className='btn btn-warning ' >Feed</button>

                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    {isOpenModal && <Modal closeModal={this.closeModal} />}
                                    <button type="button" onClick={this.openModal} className="btn btn-primary" >Info</button>


                                </div>

                                <br />



                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-white text-center py-3">
                   
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://wildislandnft.com/" className='link-secondary'> WildIsland Game </a>
                   
                </div>
            </>

        )
    }
}

export default Staking

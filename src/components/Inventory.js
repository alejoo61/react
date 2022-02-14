import React, { Component } from 'react'
import App from '../App'


const Inventory = ({coins = []}) => {
    
     function price(item){
         return Math.trunc(70 / item.current_price);
         
     }

    
        
        return (
            <>
            <div className="container">
                <div>
                <h1 className='text-center text-white fw-bold display-2 mb-5 mt-5' ><span><img src="/img/cuchillos.png" width="100" alt="" /></span> ITEMS <span><img src="/img/cuchillos.png" width="100" alt="" /></span> </h1>
                </div>
                
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {coins.map((item, index) => (
                        
                         <div className="col" key={index}>
                         <div className="card mb-3 w-100 bg-transparent border-0">
                             <div className="row g-0">
                                 <div className="col-md-4">
                                     <img src="/img/Comun.png" className="img-fluid rounded-start border border-3 border-warning" alt="..." />
                                 </div>
                                 <div className="col-md-8">
                                     <div className="card-body text-white">
                                         <h5 className="card-title">Cofre Comun</h5>
                                         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                         <div className="card-body">
                                              
                                             <p className='card-text'>PRICE WILD <span> {price(item)} </span></p>
                                             <p className='card-text'>STOCK<span> 0</span></p>
                                             <button className='btn btn-primary me-5'> BUY</button>
                                         </div>
 
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                    ))}
                   
                    <div className="col">
                        <div className="card mb-3 w-100 bg-transparent border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/img/cristal de batalla.png" className="img-fluid rounded-start border border-3 border-warning" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white">
                                        <h5 className="card-title">Cristal de Crianza</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="card-body">
                                            <p className='card-text'>PRICE <span> 0</span></p>
                                            <p className="card-text">STOCK<span> 0</span></p>
                                            <button className='btn btn-primary me-5'> BUY</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 w-100 bg-transparent border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/img/cristal de Crianza.png" className="img-fluid rounded-start border border-3 border-warning" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white">
                                        <h5 className="card-title">Cristal de Crianza</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="card-body">
                                            <p className='card-text'>PRICE <span> 0</span></p>
                                            <p className="card-text">STOCK<span> 0</span></p>
                                            <button className='btn btn-primary me-5'> BUY</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 w-100 bg-transparent border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/img/cristal del olvido.png" className="img-fluid rounded-start border border-3 border-warning" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white">
                                        <h5 className="card-title">Cristal del Olvido</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="card-body">
                                            <p className='card-text'>PRICE <span> 0</span></p>
                                            <p className="card-text">STOCK<span> 0</span></p>
                                            <button className='btn btn-primary me-5'> BUY</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 w-100 bg-transparent border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/img/cristal del tiempo.png" className="img-fluid rounded-start border border-3 border-warning" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white">
                                        <h5 className="card-title">Cristal del Tiempo</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="card-body">
                                            <p className='card-text'>PRICE <span> 0</span></p>
                                            <p className="card-text">STOCK<span> 0</span></p>
                                            <button className='btn btn-primary me-5'> BUY</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 w-100  bg-transparent border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/img/cristal de Fusion.png" className="img-fluid rounded-start border border-3 border-warning" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white">
                                        <h5 className="card-title">Cristal de Fusion</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="card-body">
                                            <p className='card-text'>PRICE <span className='text-danger'> 0</span></p>
                                            <p className="card-text">STOCK<span> 0</span></p>
                                            <button className='btn btn-primary me-5'> BUY</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 w-100  bg-transparent border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/img/cristal de Fusion.png" className="img-fluid rounded-start border border-3 border-warning" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white">
                                        <h5 className="card-title">Cristal de Fusion</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="card-body">
                                            <p className='card-text'>PRICE <span className='text-danger'> 0</span></p>
                                            <p className="card-text">STOCK<span> 0</span></p>
                                            <button className='btn btn-primary me-5'> BUY</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 w-100  bg-transparent border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/img/cristal de Fusion.png" className="img-fluid rounded-start border border-3 border-warning" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white">
                                        <h5 className="card-title">Cristal de Fusion</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="card-body">
                                            <p className='card-text'>PRICE <span className='text-danger'> 0</span></p>
                                            <p className="card-text">STOCK<span> 0</span></p>
                                            <button className='btn btn-primary me-5'> BUY</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 w-100  bg-transparent border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/img/cristal de Fusion.png" className="img-fluid rounded-start border border-3 border-warning" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white">
                                        <h5 className="card-title">Cristal de Fusion</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="card-body">
                                            <p className='card-text'>PRICE <span className='text-danger'> 0</span></p>
                                            <p className="card-text">STOCK<span> 0</span></p>
                                            <button className='btn btn-primary me-5'> BUY</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <nav aria-label="Page navigation example" className='pagination bg-transparent'>
                    <ul className="pagination justify-content-center">
                        <li className="page-item bg-transparent">
                            <a className="page-link link-dark" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a class="page-link link-dark" href="#">1</a></li>
                        <li className="page-item"><a class="page-link link-dark" href="#">2</a></li>
                        <li className="page-item"><a class="page-link link-dark" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link link-dark" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                 

                <div className="footer-copyright text-white text-center py-3">
                   
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://wildislandnft.com/" className='link-secondary'> WildIsland Game NFT</a>
                   
                </div>


            </div>
            </>

        )
    }
export default Inventory;

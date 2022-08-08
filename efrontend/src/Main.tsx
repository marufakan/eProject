import React from 'react'


function Main() {
    return (
        <>
            <div className="container m-3">
                <div className="mt-4 p-5 bg-secondary text-white rounded">
                    <h1>Welcome to main Page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem..</p>
                </div>
            </div>
            <div className="container m-3">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://picsum.photos/id/162/1400/450" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://picsum.photos/id/200/1400/450" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://picsum.photos/id/168/1400/450" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Main
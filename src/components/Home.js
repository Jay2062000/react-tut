import React from "react";

const Home = () => {
    return (
        <div className="App">
            <div className="add-to-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlibd7VVdNlumjhwQADOnL51F-OKy6dj80FA&usqp=CAU"/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://play-lh.googleusercontent.com/VTAbUwMLXi4P23jBzEHsSdRV_nJh3NJTn46xGcD1CuCJ4lOLrFTpbd0GCMRl3Gr2gtQ" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        i-Phone14
                    </span>
                    <br />
                    <span>
                        price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
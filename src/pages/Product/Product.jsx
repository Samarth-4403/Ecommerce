import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import Balance from '@mui/icons-material/Balance';

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1);

    const images = [
    "/bedsheets/four.jpeg",
    "/bedsheets/nine.jpeg"
    ];

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className='price'>₹5000</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Animi modi vitae aut, veritatis nobis, odit, ut distinctio 
                    exercitationem voluptate aliquam assumenda necessitatibus? 
                    Ab provident voluptas officiis laboriosam quasi repudiandae quod.
                </p>
                <div className="quantity">
                    <button onClick={()=>setQuantity(prev=>prev ===1 ? 1 : prev-1)}>-</button>
                    {quantity}
                    <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon/> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon/> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: MassSales</span>
                    <span>Product Type: Bedsheet</span>
                    <span>Tag: Bedsheet, Cotton, Bed</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product

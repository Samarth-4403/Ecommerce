import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "/bedsheets/one.jpeg",
            img2: "",
            title: "Blue Handblock Cotton Bedsheet",
            desc: "Blue Handblock Cotton Bedsheet",
            isNew:true,
            oldPrice: 4500,
            price: 3500,
        },
        {
            id: 1,
            img: "/bedsheets/two.jpeg",
            img2: "",
            title: "Grey Handblock Cotton Bedsheet",
            desc: "Grey Handblock Cotton Bedsheet",
            isNew:true,
            oldPrice: 5000,
            price: 4500,
        },
    ];
    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {data?.map(item=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">
                            1 x ₹{item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon className='delete'/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>₹123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}

export default Cart
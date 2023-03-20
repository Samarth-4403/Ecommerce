import React from 'react';
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type}) => {

  const data = [
    {
      id: 1,
      img: "/bedsheets/one.jpeg",
      img2: "",
      title: "Blue Handblock Cotton Bedsheet",
      isNew: true,
      oldPrice: 4500,
      price: 3000,
    },
    {
      id: 2,
      img: "/bedsheets/two.jpeg",
      title: "Grey Handblock Cotton Bedsheet",
      isNew: true,
      oldPrice: 5000,
      price: 4000,
    },
    {
      id: 3,
      img: "/bedsheets/three.jpeg",
      title: "Light Blue Handblock Cotton Bedsheet",
      isNew: true,
      oldPrice: 4500,
      price: 3500,
    },
    {
      id: 4,
      img: "/bedsheets/seven.jpeg",
      title: "Pink Handblock Cotton Bedsheet",
      isNew: true,
      oldPrice: 5000,
      price: 4500,
    },
  ];

    return (
      <div className='featuredProducts'>FeaturedProducts 

        <div className="top">
          <h1>{type} products</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Dolores id dolorem eaque tempore soluta nemo esse cupiditate 
            laudantium obcaecati beatae blanditiis dolorum perferendis 
            perspiciatis in dolor, rem corrupti voluptatibus earum!
          </p>
        </div>
        <div className="bottom">
          {data.map(item=>(
            <Card item={item} key={item.id}/>
          ))}
        </div>
      </div> 
      );
};

export default FeaturedProducts
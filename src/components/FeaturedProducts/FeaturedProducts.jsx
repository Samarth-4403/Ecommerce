import React from 'react'
import "./FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {

  const data = [
    {
      id: 1,
      img: "",
      img2: "",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
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
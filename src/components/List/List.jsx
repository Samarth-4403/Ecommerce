import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {

  const data = [
    {
        id: 1,
        img: "/bedsheets/one.jpeg",
        img2: "",
        title: "Blue Handblock Cotton Bedsheet",
        isNew:true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 1,
        img: "/bedsheets/two.jpeg",
        img2: "",
        title: "Grey Handblock Cotton Bedsheet",
        isNew:true,
        oldPrice: 19,
        price: 12,
    },
  ];
  
  return (
    <div className='list'>{data?.map(item=>(
      <Card item={item} key={item.id}/> 
    ))}</div>
  )
}

export default List
import React from "react";

function PopularCard() {
  return (
    <figure className=" bg-white w-52 rounded-lg drop-shadow-md">
      <img
        src="/images/default_food.jpg"
        alt="dish images"
        className="rounded-t-lg border h-28 w-52 object-cover"
      />
      <div className="flex justify-between items-center px-2">
        <h5 className="text-lg hover:text-black">Burger</h5>
        <p>₹25</p>
      </div>
      <p className="px-2 text-gray-400 truncate">
        Veg burger with extra chilli jddos jssiisis extra chilli jddos jssiisis
        extra chilli jddos jssiisis extra chilli jddos jssiis
      </p>
    </figure>
  );
}

export default PopularCard;

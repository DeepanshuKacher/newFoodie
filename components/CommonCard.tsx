import React from "react";

interface Props {
  handleClick?: () => void;
  heading: string;
  backgroundImageUrl: string;
}

function CommonCard(props: Props) {
  const { handleClick, heading, backgroundImageUrl } = props;
  return (
    <div
      onClick={handleClick}
      className="h-24 bg-cover bg-no-repeat rounded-md bg-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl}),url(/images/default_food.jpg)`,
      }}
    >
      <div className="h-full bg-[#00000080] rounded-md flex justify-center items-center hover:bg-transparent ">
        <h3 className="text-white">{heading}</h3>
      </div>
    </div>
  );
}

export default CommonCard;

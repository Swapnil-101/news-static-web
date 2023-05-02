import React from "react";

const ImageText = (props) => {
  const { imageUrl, text } = props;

  const imageStyle = {
    backgroundImage: `url(${"https://plus.unsplash.com/premium_photo-1664301991683-83b39364ff04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div style={imageStyle} className="h-72 relative">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageText;

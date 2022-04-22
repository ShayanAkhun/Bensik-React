import React from "react";

const Text = (props) => {
    const {items , key} = props

  return (
    <div key={key}>
      <img src={items.imageUrl} alt="images" className=""/>
      <div className="DesignText">
      <div className="btn" >
            {
                items.tags.map((item)=>{
                    return <button className={`btn ${item.tagType ? item.tagType : ''}`} >{item.tagName}</button>
                })
            }
      </div>
        <h2>
          {items.name}
        </h2>
        <p>
          {items.description}
        </p>
      </div>
    </div>
  );
};
export default Text;

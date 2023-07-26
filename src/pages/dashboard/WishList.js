import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { AiOutlineDelete } from "react-icons/ai";
import logo from "../../assets/landing.svg";
import { Link } from "react-router-dom";

const WishList = () => {
  const { wish, setWish } = useAppContext();

  const delWish = (Id) => {
    const del = wish.filter((item) => item._id !== Id);
    setWish(del);
  };
  return (
    <>
      {wish.length ? (
        <div className="main-container buy-main">
          {wish.map((items) => {
            return (
              <>
                <div
                  className="box-container"
                  // key={items._id}
                  // onClick={() => handleClick(items)}
                >
                  <div className="img-div">
                    <img
                      src={`/uploads/${items.image}`}
                      alt="hello"
                      className="buy-img"
                    />
                  </div>
                  <div className="desc-div">
                    <p className="item-name">{items.name}</p>
                    <button
                      className="cart-btn2"
                      onClick={() => delWish(items._id)}
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                  <p className="item-price">₹ {items.price}</p>
                  <div className="last-div">
                    <p>{items.desc}</p>
                    <p>{items.category}</p>
                    <p>{items.contact}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="align-cart">
          <img src={logo} alt="" className="empty-cart" />
          <div>
            <h5>OOps! No Items in the WishList!!</h5>
          </div>
          <div style={{ marginTop: "-2rem" }}>
            <p>
              Go back{" "}
              <Link to="/" style={{ textDecoration: "underline" }}>
                Buy
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WishList;

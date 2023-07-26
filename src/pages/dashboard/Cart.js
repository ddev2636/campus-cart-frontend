import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import logo from "../../assets/landing.svg";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, setCart, func } = useAppContext();

  // useEffect(() => {
  //   console.log(cart);
  // }, []);

  const delCart = (Id) => {
    const del = cart.filter((item) => item._id !== Id);
    setCart(del);
  };
  console.log(cart.length);

  return (
    <>
      <div>
        {cart.length ? (
          <div className="main-container buy-main">
            {cart.map((items) => {
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
                        onClick={() => delCart(items._id)}
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
              <h5>OOps! No Items in the Cart!!</h5>
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
        <button onClick={() => func()} className="checkout-btn">
          CheckOut <BsCartCheck className="check-btn" />
        </button>
      </div>
    </>
  );
};

export default Cart;

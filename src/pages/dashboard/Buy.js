import React from "react";
import { useAppContext } from "../../context/appContext";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../buy.css";
import {
  AiOutlineCloseCircle,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsWhatsapp, BsCartPlus } from "react-icons/bs";
import preloader from "../../assets/preloader.gif";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import zIndex from "@mui/material/styles/zIndex";

const Buy = () => {
  const [showModel, setShowModel] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [showChat, setShowChat] = useState(false);

  const { buyItem, item, handleCart, handleWish, alert } = useAppContext();

  // const finalItem = Object.values(item);
  // console.log(item);

  useEffect(() => {
    buyItem();
  }, []);

  const showModal = () => {
    setShowModel(true);
  };
  const closeModal = () => {
    setShowModel(false);
  };

  const handleClick = (items) => {
    setModalData(items);
    showModal();
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };
  const [categories, setCategories] = useState("All");

  return (
    <>
      <div className="buy-main">
        {/* <button onClick={buyItem}>Click</button> */}

        <Stack
          spacing={2}
          direction="row"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {/* <Button variant="contained" onClick={()=>setCategories('')}>All</Button> */}
          <Button
            variant="contained"
            onClick={() => setCategories("All")}
            sx={{
              backgroundColor: "#1F78D1",
              "&:hover": { backgroundColor: "#8222f8" },
              "&:focus": { backgroundColor: "#0000b3" },
            }}
          >
            All
          </Button>
          <Button
            variant="contained"
            onClick={() => setCategories("Electronics")}
            sx={{
              backgroundColor: "#1F78D1",
              "&:hover": { backgroundColor: "#8222f8" },
              "&:focus": { backgroundColor: "#0000b3" },
            }}
          >
            Electronics
          </Button>
          <Button
            variant="contained"
            onClick={() => setCategories("Books")}
            sx={{
              backgroundColor: "#1F78D1",
              "&:hover": { backgroundColor: "#8222f8" },
              "&:focus": { backgroundColor: "#0000b3" },
            }}
          >
            Books
          </Button>
          <Button
            variant="contained"
            onClick={() => setCategories("Utensils")}
            sx={{
              backgroundColor: "#1F78D1",
              "&:hover": { backgroundColor: "#8222f8" },
              "&:focus": { backgroundColor: "#0000b3" },
            }}
          >
            Utensils
          </Button>
          <Button
            variant="contained"
            onClick={() => setCategories("Cycles")}
            sx={{
              backgroundColor: "#1F78D1",
              "&:hover": { backgroundColor: "#8222f8" },
              "&:focus": { backgroundColor: "#0000b3" },
            }}
          >
            Cycles
          </Button>
          <Button
            variant="contained"
            onClick={() => setCategories("Others")}
            sx={{
              backgroundColor: "#1F78D1",
              "&:hover": { backgroundColor: "#8222f8" },
              "&:focus": { backgroundColor: "#0000b3" },
            }}
          >
            Others
          </Button>
        </Stack>
      </div>

      {item ? (
        <div className="main-container">
          {categories === "All" &&
            item.things.map((items) => {
              return (
                <>
                  <div
                    className="box-container"
                    key={items._id}
                    onClick={() => handleClick(items)}
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
                      <button className="cart-btn">
                        <AiOutlineShoppingCart />
                      </button>
                    </div>
                    <p className="item-price">₹ {items.price}</p>
                    <div className="last-div">
                      <p>{items.desc}</p>
                      <p>{items.category}</p>
                      <p>{items.contact}</p>
                    </div>
                  </div>

                  <div className={showModel ? "model show-model" : "model"}>
                    <div className="content1">
                      <button onClick={closeModal} className="close-modal-btn">
                        <AiOutlineCloseCircle className="internal" />
                      </button>
                      <div className="alert-alert">{alert}</div>
                      {modalData ? (
                        <div className="modal-container">
                          <div className="modal-item1">
                            <img
                              src={`/uploads/${modalData.image}`}
                              alt=""
                              className="modal-img"
                            />
                          </div>
                          <div className="modal-item2">
                            <h3 style={{ marginTop: "1rem" }}>
                              {modalData.name}
                            </h3>
                            <h4>
                              Price:{" "}
                              <span className="item-price2">
                                ₹ {modalData.price}
                              </span>
                            </h4>
                            <h4>
                              Description:{" "}
                              <span className="item-desc">
                                {modalData.desc}
                              </span>
                            </h4>
                            {/* <p>{modalData.category}</p> */}
                            <h4>
                              Category:{" "}
                              <span className="item-contact">
                                {modalData.category}
                              </span>
                            </h4>
                            <h4>
                              Contact:{" "}
                              <span className="item-contact">
                                {modalData.contact}
                              </span>
                            </h4>

                            <h4>
                              Chat With Seller :{"  "}
                              <span>
                                {/* <button className="chat-btn" onClick={chat}>
                                <BsWhatsapp className="chat-btn2" />
                              </button> */}
                                <a
                                  href={`https://api.whatsapp.com/send?phone=${modalData.contact}`}
                                  target="_blank"
                                  className="chat-btn"
                                >
                                  {" "}
                                  <BsWhatsapp className="chat-btn2" />
                                </a>
                              </span>
                            </h4>
                            <div className="btn-container">
                              <div>
                                <button
                                  className="add-cart"
                                  onClick={() => handleCart(modalData)}
                                >
                                  Add To Cart <AiOutlineShoppingCart />
                                </button>
                              </div>
                              <div className="btner">
                                <button
                                  className="add-wish"
                                  onClick={() => handleWish(modalData)}
                                >
                                  WishList <AiFillHeart className="heart" />
                                </button>
                              </div>
                            </div>

                            <div
                              className={
                                showChat ? "model1 show-model1" : "model1"
                              }
                            >
                              <div className="content11">
                                <button onClick={toggleChat}>close</button>
                              </div>
                            </div>
                          </div>
                          ;
                        </div>
                      ) : (
                        <div>no data</div>
                      )}
                    </div>
                  </div>
                </>
              );
            })}

          {categories !== "All" &&
            item.things
              .filter((items) => items.category === categories)
              .map((items) => {
                return (
                  <>
                    <div
                      className="box-container"
                      key={items._id}
                      onClick={() => handleClick(items)}
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
                        <button className="cart-btn">
                          <AiOutlineShoppingCart />
                        </button>
                      </div>
                      <p className="item-price">₹ {items.price}</p>
                      <div className="last-div">
                        <p>{items.desc}</p>
                        <p>{items.category}</p>
                        <p>{items.contact}</p>
                      </div>
                    </div>

                    <div className={showModel ? "model show-model" : "model"}>
                      <div className="content1">
                        <button
                          onClick={closeModal}
                          className="close-modal-btn"
                        >
                          <AiOutlineCloseCircle className="internal" />
                        </button>
                        <div className="alert-alert">{alert}</div>
                        {modalData ? (
                          <div className="modal-container">
                            <div className="modal-item1">
                              <img
                                src={`/uploads/${modalData.image}`}
                                alt=""
                                className="modal-img"
                              />
                            </div>
                            <div className="modal-item2">
                              <h4>{modalData.name}</h4>
                              <h4>
                                Price:{" "}
                                <span className="item-price2">
                                  ₹ {modalData.price}
                                </span>
                              </h4>
                              <h4>
                                Description:{" "}
                                <span className="item-desc">
                                  {modalData.desc}
                                </span>
                              </h4>
                              {/* <p>{modalData.category}</p> */}
                              <h4>
                                Category:{" "}
                                <span className="item-contact">
                                  {modalData.category}
                                </span>
                              </h4>
                              <h4>
                                Contact:{" "}
                                <span className="item-contact">
                                  {modalData.contact}
                                </span>
                              </h4>

                              <h4>
                                Chat With Seller :{"  "}
                                <span>
                                  {/* <button className="chat-btn" onClick={chat}>
                                <BsWhatsapp className="chat-btn2" />
                              </button> */}
                                  <a
                                    href={`https://api.whatsapp.com/send?phone=${modalData.contact}`}
                                    target="_blank"
                                    className="chat-btn"
                                  >
                                    {" "}
                                    <BsWhatsapp className="chat-btn2" />
                                  </a>
                                </span>
                              </h4>
                              <div className="btn-container">
                                <div>
                                  <button
                                    className="add-cart"
                                    onClick={() => handleCart(modalData)}
                                  >
                                    Add To Cart <AiOutlineShoppingCart />
                                  </button>
                                </div>
                                <div className="btner">
                                  <button
                                    className="add-wish"
                                    onClick={() => handleWish(modalData)}
                                  >
                                    WishList
                                    <AiFillHeart className="heart" />
                                  </button>
                                </div>
                              </div>

                              <div
                                className={
                                  showChat ? "model1 show-model1" : "model1"
                                }
                              >
                                <div className="content11">
                                  <button onClick={toggleChat}>close</button>
                                </div>
                              </div>
                            </div>
                            ;
                          </div>
                        ) : (
                          <div>no data</div>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
        </div>
      ) : (
        <div className="preloader">No Data</div>
      )}
    </>
  );
};

export default Buy;

// REACT
import { useEffect, useState } from "react";

// DATA
import { product } from "../data";

// HEADER
import Header from "./header/Header";
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import User from "./header/User";

// MAIN
import Main from "./main/Main";
import Gallery from "./main/Gallery";
import ProductDescription from "./main/ProductDescription";
import Modal from "./Modal";
import MobileMenu from "./header/MobileMenu";

export default function App() {
  const [orderProduct, setOrderProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
  }, []);

  function handleAddToCart() {
    if (quantity <= 0) return;
    if (orderProduct?.name === product.name)
      setOrderProduct((product) => {
        return {
          ...product,
          quantity: product.quantity + quantity,
        };
      });
    else setOrderProduct({ ...product, quantity });
    setQuantity(0);
  }

  function handleDeleteProduct() {
    setOrderProduct(null);
  }

  function handleOpenModal() {
    setOpen(!open);
  }

  function handleChangeQuantity(number, direct) {
    if (quantity + number < 0 || isNaN(number)) return;
    direct ? setQuantity(number) : setQuantity((quantity) => quantity + number);
  }
  function handleOpenMobileMenu() {
    setOpenMobileMenu((menu) => !menu);
  }

  return (
    <>
      <Header openMobileMenu={openMobileMenu}>
        <MobileMenu onOpenMobileMenu={handleOpenMobileMenu} />
        <Modal open={openMobileMenu} />
        <Logo />
        <Navigation />
        <User
          orderProduct={orderProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      </Header>
      <Main>
        {windowSize > 705 ? (
          <Gallery onOpenModal={handleOpenModal} />
        ) : (
          <Gallery onOpenModal={handleOpenModal} controls={true} />
        )}

        <ProductDescription
          onAddToCart={handleAddToCart}
          product={product}
          quantity={quantity}
          onChangeQuantity={handleChangeQuantity}
        />

        {windowSize > 705 && (
          <Modal open={open}>
            <Gallery onOpenModal={handleOpenModal} controls={true} />
          </Modal>
        )}
      </Main>
    </>
  );
}

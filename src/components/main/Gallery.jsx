import { useState } from "react";
import { product } from "../../data";
import PropTypes from "prop-types";

ProductImg.propTypes = {
  onOpenModal: PropTypes.func,
  controls: PropTypes.bool,
};

export default function ProductImg({ onOpenModal, controls }) {
  const images = product.images;
  const [curImg, SetCurImg] = useState(0);

  function handleChangeImg(i) {
    SetCurImg(i);
  }

  function handlePrevious() {
    SetCurImg((img) => (img > 0 ? --img : images.length - 1));
  }
  function handleNext() {
    SetCurImg((img) => (img < images.length - 1 ? ++img : 0));
  }

  return (
    <section className="gallery">
      <div
        className="gallery__main"
        onClick={!controls ? onOpenModal : undefined}
      >
        <figure>
          {images.map((img, i) => (
            <img
              key={i}
              src={`./images/${img}`}
              alt="photo of product"
              style={{ transform: `translateX(${-curImg * 100}%)` }}
            />
          ))}
        </figure>
        {controls && (
          <>
            <button className="gallery__prev" onClick={handlePrevious}>
              <svg>
                <use xlinkHref="./images/sprite.svg#icon-previous"></use>
              </svg>
            </button>
            <button className="gallery__next" onClick={handleNext}>
              <svg>
                <use xlinkHref="./images/sprite.svg#icon-next"></use>
              </svg>
            </button>
            <button className="gallery__close" onClick={onOpenModal}>
              <svg>
                <use xlinkHref="./images/sprite.svg#icon-close"></use>
              </svg>
            </button>
          </>
        )}
      </div>
      <div className="gallery__imgs">
        {images.map((img, i) => (
          <figure
            key={i}
            className={`${curImg === i ? " active" : ""}`}
            onClick={() => handleChangeImg(i)}
          >
            <img src={`./images/${img}`} alt="" />
          </figure>
        ))}
      </div>
    </section>
  );
}

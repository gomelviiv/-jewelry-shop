import * as React from 'react';
import { Button } from '../../../components';

function ProductInformation() {
  return (
    <section className="product-information">
      <div className="product-information__left">
        <div className="product-information__left-top">
          <img src="../assets/img/big-product-img.png" alt="" />
        </div>
        <div className="product-information__left-bottom">
          <img src="../assets/img/little-product-img.png" alt="" />
          <img src="../assets/img/little-product-img.png" alt="" />
          <img src="../assets/img/little-product-img.png" alt="" />
        </div>
      </div>
      <div className="product-information__right">
        <div className="right-information">
          <h2 className="right-information__h2">Подвеска Dolce & Gabbara</h2>
          <div className="right-information__type">
            <p>
              Категория: <label>Подвески</label>
            </p>
            <p>
              Бренд: <label>Dolce & Gabbara</label>
            </p>
          </div>
          <hr className="right-information__hr" />
          <p className="right-information__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio
            nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus.
            Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci
            est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et,
            ac varius at amet viverra feugiat non massa. Vel vel in urna, sodales urna ac sed felis.
            Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in
            ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus. Et nulla
            sit convallis orci est, fames sit luctus lacus.
          </p>
          <h4 className="right-information__h4">200 000 ₽ </h4>
          <div className="right-information__buttons">
            <Button className="" onClick={() => {}}>
              купить
            </Button>
            <Button className="" onClick={() => {}}>
              добавить в корзину
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInformation;
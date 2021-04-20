import * as React from 'react';

interface IAllProductDescription {
  fullProduct: boolean;
}

const AllProductDescription: React.FC<IAllProductDescription> = ({ fullProduct }) => {
  return (
    <div className="all-description-product">
      <div className="all-description-product__left">
        <button className="all-description-product__left-button">читать полностью</button>
        <p className="all-description-product__left-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio
          nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt
          est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit
          luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at
          amet viverra feugiat non massa. Vel vel in urna, sodales urna ac sed felis. Tellus augue
          et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit.
          Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus. Et nulla sit convallis orci
          est, fames sit luctus lacus.
        </p>
        {fullProduct && (
          <h2 className="all-description-product__left-h2">Полное описание товара</h2>
        )}
      </div>
      <div className="all-description-product__right">
        <div className="cards-product__left">
          <div>
            <img src="../assets/img/car.png" alt="Бесплатная доставка" />
            <p>Бесплатная доставка</p>
          </div>
          <div>
            <img src="../assets/img/Group-3.png" alt="Индивидуальный дизайн" />
            <p>Индивидуальный дизайн</p>
          </div>
        </div>
        <div className="cards-product__right">
          <div>
            <img src="../assets/img/Group-2.png" alt="Бесплатная примерка" />
            <p>Бесплатная примерка</p>
          </div>
          <div>
            <img src="../assets/img/Group.png" alt="Личный подход" />
            <p>Личный подход</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductDescription;

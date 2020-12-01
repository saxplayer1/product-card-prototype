import React from 'react'
import './item.css'
import pic from 'C:/Users/suchu/Desktop/Работа/product/src/images/item.png'
const Item = () => {
    return (
        <div className="item">
            <div>
                <h1 className="item__id">Артикул: 1101010011</h1>
            </div>
            <img src={pic} className="item__picture" alt="item pic" />
            <div>
                <ul className="property_list">
                    <li>
                        <h1 className="item__property">Название...</h1>
                    </li>
                    <li>
                        <h1 className="item__property">Бренд...</h1>
                    </li>
                    <li>
                        <h1 className="item__property">Скидка...</h1>
                    </li>
                    <li>
                        <h1 className="item__property">Цена до скидки...</h1>
                    </li>
                    <li>
                        <h1 className="item__property">Впервые обнаружен...</h1>
                    </li>
                    <li>
                        <h1 className="item__property">Количество отзывов...</h1>
                    </li>
                    <li>
                        <h1 className="item__property">Первый отзыв...</h1>
                    </li>
                    <li>
                        <h1 className="item__property">Рейтинг...</h1>
                    </li>
                    <li>
                        <h1 className="item__property">Обновлено...</h1>
                    </li>
                    <li>
                        <h1 className="item__property">Продавец...</h1>
                    </li>
                    <li>
                        <h1 className="item__property">Купили более раз...</h1>
                    </li>
                </ul>
            </div>
        </div>        
    )
}

export default Item
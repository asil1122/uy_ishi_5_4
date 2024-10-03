import React from "react";
import style from "./tab.module.scss"
import { data1 } from "../../data/data1";
import { data2 } from "../../data/data2";
import { data3 } from "../../data/data3";

export const Tab = () => {
    const [count, setCount] = React.useState(1);
    const content =
        count == 1 ? data1 : count == 2 ? data2 : count == 3 ? data3 : [];

    return (
        <section className={style.tab}>
            <div className="container">
                <div className={style.block}>
                    <div className={style.btns}>
                        <button className={style.hit} style={{backgroundColor:count == 1 ? "white" : "#eff2f4"}} onClick={() => setCount(1)}>Хиты</button>
                        <button className={style.skidka} style={{backgroundColor:count == 2 ? "white" : "#eff2f4"}} onClick={() => setCount(2)}>Скидки</button>
                        <button className={style.newItem} style={{backgroundColor:count == 3 ? "white" : "#eff2f4"}} onClick={() => setCount(3)}>Новинки</button>
                    </div>
                    <div className={style.item_block}>
                        {content.map((item) => (
                            <div className={style.item} key={item.id}>
                                <img src={item.img} alt="img" />
                                <div className={style.content_block}>
                                    <h2 className={style.title}>{item.title}</h2>
                                    <p className={style.text}>{item.text}</p>
                                    <p className={style.price}>{item.price}</p>
                                    <p className={style.oldPrice}>{item.oldPrice}</p>
                                    <div className={style.buttons}>
                                        <button className={style.buy}>Купить</button>
                                        <button className={style.click}>В 1 клик</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
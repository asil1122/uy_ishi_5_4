import React from "react";
import style from "./products.module.scss"
import { data } from "../../data/data";

export const Products = () => {
    return (
        <section className={style.products}>
            <div className = "container">
                <div className={style.block}>
                    {data.map((item) => (
                        <div className={style.item} key={item.id}>
                            <img src={item?.img} alt="img" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
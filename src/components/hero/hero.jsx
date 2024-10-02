import React from "react";
import style from "./hero.module.scss"

export const Hero = () => {
    return (
        <section className={style.hero}>
            <div className="container">
                <div className={style.block}>
                    <h2 className={style.title}>Истина в качестве</h2>
                    <p className={style.text}>
                        КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
                        КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
                        ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
                    </p>
                    <button className={style.btn}>Купить</button>
                </div>
            </div>
        </section>
    )
}
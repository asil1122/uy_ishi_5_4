import React from "react";
import style from "./header-bottom.module.scss"


export const HeaderBottom = () => {
    return (
        <div className={style.header_bottom}>
            <div className="container">
                <div className={style.block}>
                    <ul className={style.ul}>
                        <li className={style.li}>
                            <p className={style.text}>О ресноте</p>
                        </li>
                        <li className={style.li}>
                            <p className={style.text}>Каталог</p>
                        </li>
                        <li className={style.li}>
                            <p className={style.text}>Наши магазины</p>
                        </li>
                        <li className={style.li}>
                            <p className={style.text}>Контакты</p>
                        </li>
                    </ul>
                    <div className={style.form}>
                        <input className={style.input} type="text" placeholder="Поиск по сайту" />
                    </div>
                </div>
            </div>
        </div>
    )
}
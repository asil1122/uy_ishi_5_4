import React from "react";
import style from "./header.module.scss"
import logo from "../../assets/logo.svg"
import icon from "../../assets/header_icon.svg"
import korzinka from "../../assets/header_kor.svg"
import { HeaderBottom } from "../header-bottom";

export const Header = () => {
    return (
        <>
            <header className={style.header}>
                <div className="container">
                    <div className={style.block}>
                        <div className={style.left_block}>
                            <img src={logo} alt="logo" />
                            <p className={style.text}>Колбасы и мясные деликатесы</p>
                        </div>
                        <div className={style.right_block}>
                            <img src={icon} alt="icon" />
                            <div className={style.kor_block}>
                                <img src={korzinka} alt="icon" />
                                <div className={style.price_block}>
                                    <p className={style.tovar}>Товаров: 3</p>
                                    <p className={style.price}>6 540 ₽</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <HeaderBottom/>
        </>
    )
}
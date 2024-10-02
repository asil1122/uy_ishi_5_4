import React from "react";
import { Layout } from "../../layout/layout";
import { Hero } from "../../components/hero";
import { Products } from "../../components/products";
import { Tab } from "../../components/tab/tab";


export const Home = () => {
    return (
        <>
            <Layout>
                <Hero/>
                <Products/>
                <Tab/>
            </Layout>
        </>
    )
}
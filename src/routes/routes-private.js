//import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../componentes/layout";
import MarcasAdmin, { ClientEdit } from "../pages/admin/marcas-admin";
import ProductAdmin from "../pages/admin/products-admin";
import TypeProductAdmin from "../pages/admin/type-products-admin";

export default [
    {
        name: "Administración Productos ",
        key:"products-admin",
        route: "/admin/products",
        component: <ProductAdmin />,
        showLink:true
    },
    {
        name: "Tipos de Productos",
        key:"type-products-admin",
        route: "/admin/type-products",
        component: <TypeProductAdmin />,
        showLink:true
    }
    ,
    {
        name: "Marcas",
        key:"marcas-admin",
        route: "/admin/marcas",
        component: <MarcasAdmin  />,
        showLink:true
    }
];
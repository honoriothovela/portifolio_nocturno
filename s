[1mdiff --git a/src/App.jsx b/src/App.jsx[m
[1mindex 0c07070..7cb2e70 100644[m
[1m--- a/src/App.jsx[m
[1m+++ b/src/App.jsx[m
[36m@@ -12,6 +12,8 @@[m [mimport { useEffect } from "react";[m
 import Aos from "aos";[m
 import "aos/dist/aos.css";[m
 [m
[32m+[m
[32m+[m
 const App = () => {[m
   useEffect(() => {[m
     Aos.init({[m
[1mdiff --git a/src/Content.js b/src/Content.js[m
[1mindex 36643f3..3f637f7 100644[m
[1m--- a/src/Content.js[m
[1m+++ b/src/Content.js[m
[36m@@ -23,8 +23,6 @@[m [mimport estudo from "./assets/images/Projects/estudo.png";[m
 import rede from "./assets/images/Projects/rede.png";[m
 import emprego from "./assets/images/Projects/emprego.png";[m
 import conducao from "./assets/images/Projects/conducao.png";[m
[31m-[m
[31m-[m
 import apontar from "./assets/images/Projects/apontar.jpg";[m
 [m
 [m
[36m@@ -47,7 +45,7 @@[m [mimport { RiServiceLine, RiProjectorLine } from "react-icons/ri";[m
 import { MdOutlinePermContactCalendar } from "react-icons/md";[m
 [m
 export const content = {[m
[31m-  nav: [[m
[32m+[m[32m    nav: [[m
     {[m
       link: "#home",[m
       icon: TbSmartHome,[m
[36m@@ -124,7 +122,7 @@[m [mexport const content = {[m
       },[m
       {[m
         name: "Node js",[m
[31m-        para: "competência:Bom",[m
[32m+[m[32m        para: "competência:Excelente",[m
         logo: nodejs,[m
       },[m
       {[m

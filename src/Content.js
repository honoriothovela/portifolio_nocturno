
import mascara from "./assets/images/Hireme/mascara.jpg"
import tres from "./assets/images/Hero/tres.jpg"

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import php from "./assets/images/Skills/php.png";
import native from  "./assets/images/Skills/native.png";
import js from  "./assets/images/Skills/JavaScript.png";
import ionic  from  "./assets/images/Skills/ionic.png";
import mongo from  "./assets/images/Skills/mongo.png";
import git from  "./assets/images/Skills/GitHub.png";
import mysql from  "./assets/images/Skills/mysql.png";
import firebase from  "./assets/images/Skills/Firebase.png";
import express from  "./assets/images/Skills/express.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import android from "./assets/images/Services/android.png";

import estudo from "./assets/images/Projects/estudo.png";
import rede from "./assets/images/Projects/rede.png";
import emprego from "./assets/images/Projects/emprego.png";
import conducao from "./assets/images/Projects/conducao.png";
import apontar from "./assets/images/Projects/apontar.jpg";




import pandora from "./assets/images/Testimonials/pandora.jpg";
import edvalda from "./assets/images/Testimonials/edvalda.png";
import alberto  from "./assets/images/Testimonials/alberto.jpg";
import sphiwe from "./assets/images/Testimonials/sphiwe.jpg";
 import edson  from "./assets/images/Testimonials/edson.jpg";
import nazira from "./assets/images/Testimonials/nazira.jpg";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
    nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Honório",
    LastName: "Tovela",
    btnText: "Sobre Mim",
    image: tres,
    hero_content: [
      {
        count: "2+",
        text: "Mais de 2 anos no mundo de desenvolvimento de software",
      },
      {
        count: "5+",
        text: "Projectos trabalhados ao longo da minha carreira",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Minhas Habilidades e Experiencias",
    skills_content: [
     
      {
        name: "React js",
        para: "competência:Excelente",
        logo: reactjs,
      },
  
      {
        name: " React native",
        para: "competência:Bom",
        logo: native,
      },
      {
        name: " Ionic Framework",
        para: "competência:Bom",
        logo: ionic,
      },
      {
        name: "Javascript",
        para: "competência:Excelente",
        logo: js,
      },
      {
        name: "PHP",
        para: "competência:Bom",
        logo: php,
      },
      {
        name: "GitHub",
        para: "competência:Excelente",
        logo: git,
      },
      {
        name: "Node js",
        para: "competência:Excelente",
        logo: nodejs,
      },
      {
        name: "Express js",
        para: "competência:Bom",
        logo: express,
      },
      {
        name: "Mongo db",
        para: "competência:Bom",
        logo: mongo,
      },
      {
        name: "Database ",
        para: "competência:Bom",
        logo: mysql,
      },
      {
        name: "Firebase",
        para: "competência:Bom",
        logo: firebase,
      },
      
      {
        name: "Figma",
        para: "competência:Bom",
        logo: figma,
      },
     
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "serviços",
    subtitle: "OQUE EU OFEREÇO ",
    service_content: [
      {
        title: "Web Development",
        para: "Os Designers da web criam a visão geral e o plano para o layout de um site. desenvolvimento de logotipo profissional: comercial, empresarial ou pessoal",
        logo: services_logo1,
      },
      {
        title: "IOS & Android Development ",
        para: "Aplicativos de Software de design para serem executados em dispositivos móveis. aplicativo moderno e pronto para dispositivos móveis que o ajudará a alcançar todo o seu marketing",
        logo: android,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Crio interfaces que atendem às expectativas do usuário quanto às sensações e experiências dentro dos aplicativos móveis. Usando técnicas de UI/UX, desenvolvo soluções que fazem com que usar o seu app seja fácil e intuitivo.",
        logo: services_logo3,
      },
      
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "Meus Projectos em Destaques",
    image: mascara,
    project_content: [
      {
        title: "Site Educacional",
        image: estudo,
      },
      {
        title: "Regras de Transito",
        image: conducao,
      },
      {
        title: "Rede Social web",
        image: rede,
      },
      {
        title: "Criatividade de Negocio",
        image: emprego,
      },
    ],
  },
  Testimonials: {
    title: "Testemunhas",
    subtitle: "AGRADEÇO A TODOS VOCÊS ",
    testimonials_content: [
      {
        review:
          "“As mais belas palavras não seriam suficientes para descrever o seu trabalho Primoroso. Tudo o que você faz, todo seu empenho e dedicação, o tornam ainda mais digno de admiração.”",
        img: pandora,
        name: "Milagre Tovela",
      },
      {
        review:
          "“eu direi simplesmente que és umas das melhores pessoas que conheci, uma pessoa bastante prestativa no trabalho que faz, palavras são muitas ,mas me limito porque não quero escrever um livro sobre ele.”",
        img: edvalda,
        name: "Edvalda Joaquim",
      },
      {
        review:
          "“Convive, e muito com esse jovem programador profissional na escola e nos projetos profissionais, responsável ,Boa pessoa e gentil . Um bom programador , amigo e irmão... Vamos Codar.”",
        img: edson,
        name: "Edson Thomas",
      },
      {
        review:
          "“És bonito.Apesar dos defeitos, tens bons feitos. Oque me impressiona é a sua determinação e o facto de sempre prover soluções para problemas a sua área de actuação.”",
        img: alberto,
        name: "Lourenco Macauze jr",
      },
      {
        review:
          "“Ungumuntu onenhliziyo efudumele esintwini. Uhlala ekholelwa emndenini wakhe futhi usebenza ngamakhono amasha futhi uhlala elungele ukufunda ngokuhlelekile nokuthola ulwazi olusha..”",
        img: sphiwe,
        name: "Ilobwe ngu Sphiwe Andeya",
      },
      
      
      
     
      {
        review:
          "“ Menino Especial. Tu és uma pessoa incrível, responsável, inteligente e quanto o assunto trabalho se preocupas em fazer a tempo e hora de que tudo deve estar certinho”",
        img: nazira,
        name: "Nazyra Massude",
      },
    ],
  },
  Hireme: {
    title: "Contrate-me",
    subtitle: "PARA SEUS PROJECTOS",
    image1: apontar,
    // image2: praia,
    para: " escrevo códigos de programas a partir de várias linguagens de programação existentes. Com isso, é possível gerar soluções para os Meus problemas e dos clientes ou necessidades de diferentes marcas e empresas.  Desenvolvo e mantenho diferentes tipos de softwares em sistemas amplos ou para uso em computadores pessoais.",
    btnText: "Contrate-me",
  },
  Contact: {
    title: "Me Contacte",
    subtitle: "Deixe seus dados",
    social_media: [
      {
        text: "honoriothovela@gmail.com",
        icon: GrMail,
        link: "mailto:honoriothovela@gmail.com",
      },
      {
        text: "+258 874337422",
        icon: BsWhatsapp,
        link: "https://wa.me/+258874337422",
      },
      {
        text: "host.thovela_",
        icon: BsInstagram,
        link: "https://www.instagram.com/host.thovela_/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023 by Alicehost, Milagr.",
  },
};

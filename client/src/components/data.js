import logo from "../assets/logo.png";
import bg from "../assets/heroBg.png";
const header = {
    address: "Banque ABC, Bouira",
    number: "+213 7 93 08 05 67",
    email: "kamel-daoud@gmail.com",

    image: {
        link: logo,
        alt: "Kamel Daoud Immobilier Bouira Promotion Algerie",
    },

    list: [
        {
            title: "Acceuil",
            link: "/",
        },
        {
            title: "À propos",
            link: "/about",
        },
        {
            title: "Projets",
            link: "/projets",
        },
        {
            title: "Contact",
            link: "/contact",
        }
    ]
};

const hero = {
    bg: bg,
    slogan: 'Trouvez la maison de vos rèves.'
}

export {
    header,
    hero
}
const technologies = {
    vuejs : {
        name : "vuejs",
        url : "vuejs.png",
        description : "Vuejs is a open-source JavaScript framework for building user interfaces and single-page applications",
        width_thumbnail : "50px",
    },
    laravel : {
        name : "laravel",
        url : "laravel.png",
        description : "Laravel is a free, open-source PHP web framework",
        width_thumbnail : "40px",
    },
    vuetify : {
        name : "vuetify",
        url : "vuetify.png",
        description : "Vuetify.js is a reusable semantic component framework for Vue.js",
        width_thumbnail : "33px",
    },
    pusher : {
        name : "pusher",
        url : "pusher.png",
        description : "Pusher empowers developers with APIs to create real-time web application",
        width_thumbnail : "70px",
    },
    angular : {
        name : "angular",
        url : "angular.png",
        description : "Angular is a JavaScript-based open-source front-end web application framework mainly maintained by Google",
        width_thumbnail : "40px",
    },
    nuxtjs : {
        name : "Nuxt",
        url : "nuxt.png",
        description : "Nuxt.js is a minimal framework for creating Vue.js applications with server side rendering",
        width_thumbnail : "70px",
    },
    jquery : {
        name : "jQuery",
        url : "jquery.png",
        description : "The Write Less, Do More, JavaScript Library.",
        width_thumbnail : "35px",
    },
    ionic : {
        name : "ionic",
        url : "ionic.png",
        description : "Ionic is a complete open-source SDK for hybrid mobile app development ",
        width_thumbnail : "55px",
    },
    lumen : {
        name : "lumen",
        url : "lumen.png",
        description : "Lumen, The Stunningly Fast PHP Micro-Framework By Laravel.",
        width_thumbnail : "35px",
    },
    shopify : {
        name : "Shopify",
        url : "shopify.png",
        description : "Shopify E-commerce Platform",
        width_thumbnail : "35px",
    },
    nova : {
        name : "Nova",
        url : "nova.png",
        description : "Nova is a beautifully designed administration panel for Laravel. Carefully crafted by the creators of Laravel to make you the most productive developer in the galaxy",
        width_thumbnail : "120px",
    },
    
}


export const works = [
    {
        id : "wklni-com",
        name : "WKLNI",
        thumbnail : "wklni.png",
        short_desc : "Freelancer platform (SPA)",
        technologies : [
            technologies.laravel,
            technologies.vuejs,
            technologies.vuetify,
            technologies.pusher,
        ]
    },
    {
        id : "impax-com",
        name : "IMPAX TOURS",
        thumbnail : "impax.jpg",
        short_desc : "Travel booking platform",
        technologies : [
            technologies.laravel,
            technologies.vuejs,
            technologies.vuetify,
        ]
    },
    {
        id : "genitax-ma",
        name : "GENITAX",
        short_desc : "Tax data management (SPA)",
        thumbnail : "genitax-ma.jpg",
        technologies : [
            technologies.vuejs,
            technologies.vuetify,
            technologies.laravel,
        ]
    },
    {
        id : "cryptpoz-web",
        name : "CRYPTOZ",
        short_desc : "Cryptocurrency landing page",
        thumbnail : "cryptoz-web.png",
        technologies : [
            technologies.vuejs,
            technologies.vuetify,
            technologies.nuxtjs,
        ]
    },
    {
        id : "actiondevisprox",
        name : "ACTIONDEVISPROX.ORG",
        short_desc : "Lead generation platform",
        thumbnail : "actiondevisprox.jpg",
        technologies : [
            technologies.laravel,
            technologies.vuejs,
            technologies.vuetify,
        ]
    },
    {
        id : "grande-optique",
        name : "Grande optique",
        short_desc : "Optical inventory management (SPA)",
        thumbnail : "grandeoptique.jpg",
        technologies : [
            technologies.laravel,
            technologies.vuejs,
            technologies.nova,
        ]
    },
    {
        id : "cryptoz-app",
        name : "CRYPTOZ",
        short_desc : "Cryptocurrency mobile app",
        thumbnail : "cryptoz-app.png",
        technologies : [
            technologies.ionic,
            technologies.angular,
        ]
    },
    {
        id : "pdf-web",
        name : "PDF CREATOR",
        short_desc : "PDF Creator landing page",
        thumbnail : "pdf-web.jpg",
        technologies : [
            technologies.angular,
        ]
    },
    {
        id : "pdf-creator-app",
        name : "PDF CREATOR",
        short_desc : "DOCUMENTS SCANNER & IMAGE CONVERTER",
        thumbnail : "pdf-app.png",
        technologies : [
            technologies.ionic,
            technologies.angular,
        ],

    },
    {
        id : "franchise-france",
        name : "FRANCHISE FRANCE",
        short_desc : "collaborative franchise platform",
        thumbnail : "franchise.jpg",
        technologies : [
            technologies.laravel,
            technologies.jquery,
        ]
    },
    {
        id : "manolo",
        name : "MANOLO",
        short_desc : "Bluetooth thermal printer mobile app",
        thumbnail : "manolo.png",
        technologies : [
            technologies.angular,
            technologies.ionic,
        ]
    },
    {
        id : "salembrothers",
        name : "SALEMBROTHERS.CA (SPA)",
        short_desc : "Canada foods distributors company ",
        thumbnail : "salembrothers.jpg",
        technologies : [
            technologies.laravel,
            technologies.lumen,
            technologies.angular,
        ]
    },

    {
        id : "actiontravaux",
        name : "ACTIONTRAVAUX.ORG",
        short_desc : "Leads Generation website",
        thumbnail : "actiontravaux.jpg",
        technologies : [
            technologies.laravel,
            technologies.jquery,
        ]
    },
    {
        id : "malt",
        name : "MALT.MA",
        short_desc : "E-commerce website",
        thumbnail : "malt.jpg",
        technologies : [
            technologies.shopify,
        ]
    },
    {
        id : "forwinter",
        name : "FORWINTER.SHOP",
        short_desc : "E-commerce website",
        thumbnail : "forwinter.jpg",
        technologies : [
            technologies.shopify,
        ]
    },
    {
        id : "marouaneme",
        name : "OLD PORTFOLIO",
        short_desc : "Personal portfolio",
        thumbnail : "marouaneme.jpg",
        technologies : [
            technologies.laravel,
            technologies.angular,
        ]
    },
];


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Home: "Home",
      About: "About",
      Projects: "Projects",

      dev_hero: "FULLSTACK DEVELOPER",
      scroll: "DISCOVER",

      about: "ABOUT",
      formation1: "Education",
      passion1: "Passion",
      leadership1: "Leadership",
      ambition1: "Ambition",
      formation2: "A background in Art History and Archaeology led me to a successful career change into web development, where I gained expertise in fullstack development and UX/UI Design.",
      passion2: "My growing interest in front-end led me to specialize in creating immersive user experiences by self-learning new technologies.",
      leadership2: "As a leader of collaborative projects, I was able to coordinate teams and solve technical challenges while ensuring a quality final result.",
      ambition2: "My determination to innovate and my thirst for learning allow me to always seek the perfect balance between design and performance to contribute significantly to a development team.",
      french_cv: "French CV",
      english_cv: "English CV",

      skills: "DEV SKILLS",

      project_title: "Selected works",
      project_line: "Take a look at some of my projects",

      project_omiage: "End-of-course internship project. Total redesign of a website in HTML5/CSS3 and Bootstrap 3. The redesign aims to take present informations on the current website and add new functionalities to move towards a Web3 and Business Analyst/UX oriented visual by offering management services. OMIAGE self-employed business analysis and UI/UX design with a front-end in React. The features requested by the client : a FR/EN mode (EN by default), a Projects portfolio (BA and UX), a way to download two CVs in English and French, a map of functional areas (domain blocks with logos of customers), a contact wishlist (selection of needs(s) then contact form, integration of a 'Contact me' button (send to https://cal.com/). Creation of an additional module linked to the wishlist, indicating via a chart, which department the client should go to as a priority. Model created on Figma, project management on Trello and Charmverse.",
      project_ubstar: "The project consists of designing, coding and putting into production a landing page for an organization of my choice. So I created a fictitious association highlighting DJs from the Corsican electronic scene. All information about them is true. The objective is to create a clear and attractive landing page, with a functional call to action, using the basics of HTML/CSS, Bootstrap and good design and marketing practices.",
      project_portfolio: "Creation of a portfolio landing page in React integrating a day/night mode and an EN/FR mode. Use of React-Router-Dom for navigation between the different pages of the website.",
      project_surfing: "The project consists of reproducing the landing page of a surf school in a responsive manner, mainly using the Bootstrap framework to ensure a fluid user experience, regardless of the device (mobile or desktop). This project allows to acquire practical skills in Bootstrap, to master responsive design concepts, and to become familiar with the principles of creating modern landing pages.",
      project_menu: "Final and diploma project with free choice concerning the subject. The project aims to solve the frequent problem of unavailability or obsolescence of online restaurant menus. My team and I proposed creating a platform where restaurateurs could publish their updated menus, manage reservations and consult customer reviews. Users will be able to access a list of restaurants, filter by city or cuisine type, view menus, reserve a table, add restaurants to favorites and leave comments. The back-end of the platform is developed in Ruby on Rails to manage the databases and API, while the front-end is built with React and Vite.js. The initial design was done on Figma and the project managed via Trello.",
      project_chapatte: "Creation of a marketplace with Ruby on Rails that sells photos of kittens. The website's landing page includes a list of products that are for sale. A visitor can click on one of the products to view it and get more details about. The visitor will need to register to add this product to their cart. A user can easily access their basket, modify the quantity of products to purchase, then access the checkout to pay. He will pay via Stripe and will receive an email with the kitten photos. The site's administrator will also receive an email with a summary of the order that has just been placed. The project is accompanied by a model created in advance on Figma.",
      project_drumkit: "Creation of a drum machine (Drum Kit) in JavaScript, integrated into a Ruby on Rails application. This project combines the use of Rails to manage the application and JavaScript for animations and interaction management. The goal is to achieve an interactive Rails application with a functional drum machine, where users can play sounds by pressing keys on their keyboard, while enjoying visual animation.",
      project_filmlist: "Creation of a page that allows to display a list of films based on The Open Movie Database API. The user can search for films using a form, and the results are displayed in blocks including the film's poster, title, release date, and a 'Read More' button. The results are scrolled gradually using the Intersection Observer, with animations that reveal the films as they go. Clicking on 'Read More' brings up a popup with additional details about the film. The project emphasizes the use of APIs, asynchronism and the integration of a simple interface.",
      project_maxime_vincenti: "Creation of a visual identity for a professional rope access technician. The goal was to create business cards. The only constraints were the green color and the desire to have a refined result. The mockup was made on Canva.",

      projectDescript: "PROJECT DESCRIPTION",
      projectVisu: "VISUALS",
      projectMu: "MOCKUPS",
      noneMu: "No mockups available for this project.",
      projectVid: "VIDEO(S)",
      unsupportVid: "Your browser does not support the video tag.",
      noneVid: "No video(s) available for this projet.",

      rights: "All rights reserved.",
      email: "Email me",
    },
  },
  fr: {
    translation: {
      Home: "Accueil",
      About: "À propos",
      Projects: "Projets",

      dev_hero: "DÉVELOPPEUSE FULLSTACK",
      scroll: "DÉCOUVRIR",

      about: "À PROPOS",
      formation1: "Formation",
      passion1: "Passion",
      leadership1: "Leadership",
      ambition1: "Ambition",
      formation2: "Un parcours en Histoire de l’art et Archéologie m’a conduit à une reconversion réussie dans le développement web, où j’ai acquis une expertise en développement fullstack et UX/UI Design.",
      passion2: "Mon intérêt croissant pour le front-end m’a poussé à me spécialiser dans la création d’expériences utilisateurs immersives, en explorant de manière autodidacte de nouvelles technologies.",
      leadership2: "En tant que leader de projets collaboratifs, j’ai su coordonner les équipes et résoudre des défis techniques tout en garantissant un rendu final de qualité.",
      ambition2: "Ma détermination à innover et ma soif d’apprentissage me permettent de toujours rechercher l’équilibre parfait entre design et performance pour contribuer de manière significative à une équipe de développement.",
      french_cv: "CV français",
      english_cv: "CV anglais",

      skills: "COMPÉTENCES TECHNIQUES",

      project_title: "Travaux choisis",
      project_line: "Découvrez certains de mes projets",

      project_omiage: "Projet de stage de fin de cursus. Refonte totale d’un site en HTML5/CSS3 et Bootstrap 3. La refonte vise à reprendre les informations présentes sur le site actuel et ajouter de nouvelles fonctionnalités pour se diriger vers un visuel orienté Web3 et Business Analyst/UX en proposant des services d'auto-entreprise OMIAGE de Business analyse et UI/UX design avec un front-end en React. Les fonctionnalités demandées par le client : un mode FR/EN (EN par défaut), un portfolio Projets (BA et UX), un moyen de télécharger deux CV en anglais et en français, une cartographie des domaines fonctionnels (blocs domaine avec les logos de clients), une wishlist contact (sélection de besoin(s) puis formulaire de contact, intégration d’un bouton 'Contact me' (qui renvoie sur https://cal.com/). Ajout d’un module supplémentaire relié à la wishlist, indiquant via un graphique, vers quel service le demandeur doit se diriger en priorité. Maquette réalisée sur Figma, gestion de projet sur Trello et Charmverse.",
      project_ubstar: "Le projet consiste à concevoir, coder et mettre en production une landing page pour une organisation de mon choix. J'ai donc créé une association fictive mettant en avant des DJ de la scène électronique Corse. Toutes les informations à leur sujet sont vraies. L'objectif est de créer une landing page claire et attractive, avec un call to action fonctionnel, en utilisant les bases de HTML/CSS, Bootstrap et les bonnes pratiques de design et de marketing.",
      project_portfolio: "Création de la landing page d’un portfolio en React intégrant un mode jour/nuit et un mode EN/FR. Utilisation de React-Router-Dom pour la navigation entre les différentes pages du site.",
      project_surfing: "Le projet consiste à reproduire la landing page d’une école de surf de manière responsive, en utilisant principalement le framework Bootstrap pour assurer une expérience utilisateur fluide, quel que soit l'appareil (mobile ou desktop). Ce projet permet d'acquérir des compétences pratiques en Bootstrap, de maîtriser les concepts de conception responsive, et de se familiariser avec les principes de création de landing pages modernes.",
      project_menu: "Projet final et diplomant avec choix libre concernant le sujet. Le projet vise à résoudre le problème fréquent de l'indisponibilité ou de l'obsolescence des menus en ligne des restaurants. Mon équipe et moi-même avons proposé de créer une plateforme où les restaurateurs pourraient publier leurs menus à jour, gérer les réservations et consulter les avis des clients. Les utilisateurs pourront accéder à une liste de restaurants, filtrer par ville ou type de cuisine, consulter les menus, réserver une table, ajouter des restaurants en favoris et laisser des commentaires. Le back-end de la plateforme est développé en Ruby on Rails pour gérer les bases de données et l'API, tandis que le front-end est construit avec React et Vite.js. La conception initiale a été réalisée sur Figma et le projet géré via Trello.",
      project_chapatte: "Création d’une boutique en ligne avec Ruby on Rails qui vend des photos de chatons. La landing page du site comprend la liste des produits qui sont à vendre. Un visiteur peut cliquer sur l'un des produits pour l'afficher et avoir plus de détails. Le visiteur devra s'inscrire pour ajouter ce produit à son panier. Un utilisateur peut accéder facilement à son panier, modifier la quantité de produits à acheter, puis accéder au checkout pour payer. Il paiera via Stripe et il recevra un email avec la·les photo·s de chaton·s. L'administrateur du site recevra aussi un email avec le récapitulatif de la commande qui vient d'être passée. Le projet est accompagné d’une maquette réalisée en amont sur Figma.",
      project_drumkit: "Création d’une boîte à rythmes (Drum Kit) en JavaScript, intégrée dans une application Ruby on Rails. Ce projet combine l'utilisation de Rails pour gérer l'application et de JavaScript pour les animations et la gestion des interactions. L’objectif est d’obtenir une application Rails interactive avec une boîte à rythmes fonctionnelle, où les utilisateurs peuvent jouer des sons en appuyant sur les touches de leur clavier, tout en bénéficiant d'une animation visuelle.",
      project_filmlist: "Création d’une page qui permet d'afficher une liste de films en se basant sur l'API The Open Movie Database. L'utilisateur peut rechercher des films à l'aide d'un formulaire, et les résultats s'affichent sous forme de blocs incluant l'affiche du film, son titre, sa date de sortie, et un bouton 'Read More'. Le défilement des résultats se fait progressivement grâce à l'Intersection Observer, avec des animations qui révèlent les films au fur et à mesure. En cliquant sur 'Read More', un popup apparaît avec des détails supplémentaires sur le film. Le projet met l'accent sur l'usage d'API, l'asynchronisme et l'intégration d'une interface simple.",
      project_maxime_vincenti: "CCréation d'une identité visuelle pour un cordiste de profession. L'objectif était de créer des cartes de visite. Les seules contraintes étaient le couleur verte et la volonté d'avoir un résultat épuré. La maquette a été faite sur Canva.",

      projectDescript: "DESCRIPTION DU PROJET",
      projectVisu: "VISUELS",
      projectMu: "MOCKUPS",
      noneMu: "Aucun mockup disponible pour ce projet.",
      projectVid: "VIDÉOS(S)",
      unsupportVid: "Votre navigateur ne supporte pas la balise vidéo.",
      noneVid: "Aucune vidéo disponible pour ce projet.",

      rights: "Tous droits réservés.",
      email: "Contact",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


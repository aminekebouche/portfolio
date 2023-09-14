const services = [
    {
        title: "Développement web",
        description: "Création de sites web sur mesure, allant des blogs aux sites e-commerce. Utilisation de technologies modernes comme React, Angular, et Vue.",
        icone: "/icones/web.png",
    },
    {
        title: "Développement mobile",
        description: "Développement d'applications mobiles réactives et performantes pour Android et iOS en utilisant des frameworks tels que React Native ou Flutter.",
        icone: "/icones/mobile.png",
    },
    {
        title: "Maintenance web",
        description: "Mise à jour, amélioration et dépannage de sites web existants pour assurer leur fonctionnement optimal.",
        icone: "/icones/maintenance.png",
    },
    {
        title: "Développements spécifiques",
        description: "Solutions sur mesure pour des besoins spécifiques, comme les systèmes de réservation, les portails clients ou les intégrations API.",
        icone: "/icones/code.png",
    },
    {
        title: "Devops",
        description: "Optimisation du flux de travail, de la livraison continue à la gestion des infrastructures cloud, en utilisant des outils comme Docker, Jenkins et Kubernetes.",
        icone: "/icones/devops.png",
    },
    {
        title: "Gestion de projets",
        description: "Coordination de projets informatiques de A à Z, garantissant une livraison en temps et en heure avec une communication fluide.",
        icone: "/icones/gestion.png",
    },
    {
        title: "Référencement naturel",
        description: "Optimisation du contenu pour les moteurs de recherche afin d'assurer une visibilité maximale sur des plateformes comme Google et Bing.",
        icone: "/icones/seo.png",
    },
    {
        title: "Eco-conception & Accessibilité",
        description: "Création de sites respectueux de l'environnement et accessibles à tous, en suivant les normes WCAG.",
        icone: "/icones/green.png",
    },
    {
        title: "Audit & Conseil",
        description: "Evaluation des sites et applications existants pour proposer des améliorations en termes de performance, de sécurité et d'expérience utilisateur.",
        icone: "/icones/audit.png",
    }
];

const domaineComp = [
    {
      title: "Gestion de projets web",
      description:
        "Gestion des ressources, des équipes, et des budgets. Mise en place et suivi de méthodologies agiles",
    },
    {
      title: "Conception et développement ",
      description:
        "Analyse des besoins, Utilisation efficace de frameworks, Optimisation de la performance, Architecture logicielle.",
    },
    {
        title: "Adaptation Technologique ",
        description:
          "Intégration & Transition, Planification de la migration, Intégration de systèmes,Gestion des risques.",
      },
    {
      title: "Conception Cross-plateforme",
      description:
        "Adaptabilité des interfaces, Test sur divers dispositifs, Intégration de fonctionnalités natives.",
    },
    {
      title: "Conception Numérique Éthique et Inclusive",
      description:
        "Éco-conception web, Principes d'accessibilité, Veille réglementaire,  RGAA & WCAG.",
    },
    {
      title: "Sécurité by design",
      description:
        "Architecture sécurisée, Conformité à l'OWASP et au RGPD, Pratiques de codage sécurisé.",
    },
    {
        title: "Orchestration & Déploiement",
        description:
          "AWS Expertise, Gestion des déploiements, Mise en production, Hébergement de site web",
      },
    {
      title: "Modélisation de Bases de Données",
      description:
        "Conception Conceptuelle (UML), Normalisation, Optimisation des Requêtes, Migration et Intégration.",
    },
    {
      title: "Optimisation pour les Moteurs de Recherche",
      description:
        "Analyse de mots-clés, Optimisation technique, Optimisation sur/hors page, Suivi et reporting.",
    },
  ];

  const techComp = [
    { name: "HTML5", level: 90 },
    { name: "CSS3 / SCSS", level: 85 },
    { name: "JavaScript (ES6+)", level: 80 },
    { name: "ReactJS / React Native", level: 75 },
    { name: "NodeJs", level: 75 },
    { name: "Java /Quarkus", level: 70 },
    { name: "Python / Django", level: 68 },
    { name: "C# /dotnet", level: 60 },
  ]

  const devopsComp = [
    { name: "Docker", level: 85 },
    { name: "Github actions", level: 85 },
    { name: "Shell", level: 80 },
    { name: "AWS", level: 70 },
    { name: "Jenkins", level: 60 },
    { name: "Kubernetes", level: 60 },
  ]


  const projects = [
    {
      image: "/images/dauphinder.png",
      title: "Dauphinder",
      description: "Plateforme universitaire pour s'entraider, se ressourcer, se renconter",
    },
    {
      image: "/images/bg.jpeg",
      title: "Smart data buisness",
      description: "Portfolio d'une entreprise spécialisée en Business Intelligence.",
    },
    {
      image: "/images/bg.jpeg",
      title: "Assited Board Game",
      description: "Plateforme de jeux de plateaux en ligne.",
    },
    {
      image: "/images/bg.jpeg",
      title: "Morpion solitaire",
      description:
        "Jeu du morpion solitaire,Intelligence artificielle",
    },
    {
      image: "/images/dauphinder.png",
      title: "Dauphinder",
      description: "Plateforme universitaire pour s'entraider, se ressourcer, se renconter",
    },
    {
      image: "/images/bg.jpeg",
      title: "Smart data buisness",
      description: "Portfolio d'une entreprise spécialisée en Business Intelligence.",
    },
    {
      image: "/images/bg.jpeg",
      title: "Assited Board Game",
      description: "Plateforme de jeux de plateaux en ligne.",
    },
    {
      image: "/images/bg.jpeg",
      title: "Morpion solitaire",
      description:
        "Jeu du morpion solitaire,Intelligence artificielle",
    },
    {
      image: "/images/dauphinder.png",
      title: "Dauphinder",
      description: "Plateforme universitaire pour s'entraider, se ressourcer, se renconter",
    },
    {
      image: "/images/bg.jpeg",
      title: "Smart data buisness",
      description: "Portfolio d'une entreprise spécialisée en Business Intelligence.",
    },
    {
      image: "/images/bg.jpeg",
      title: "Assited Board Game",
      description: "Plateforme de jeux de plateaux en ligne.",
    },
    {
      image: "/images/bg.jpeg",
      title: "Morpion solitaire",
      description:
        "Jeu du morpion solitaire,Intelligence artificielle",
    },
    {
      image: "/images/bg.jpeg",
      title: "Assited Board Game",
      description: "Plateforme de jeux de plateaux en ligne.",
    },
    {
      image: "/images/bg.jpeg",
      title: "Morpion solitaire",
      description:
        "Jeu du morpion solitaire,Intelligence artificielle",
    },
  ];

  const aboutMe =  {
    titre : "Dévelppeur passioné",
    description: "Je m'appelle Amine et j'ai 23 ans. Mon parcours académique et professionnel est le reflet de ma passion profonde pour l'informatique et les mathématiques. Tout a commencé après l'obtention de mon baccalauréat en mathématiques, un tremplin qui m'a conduit à poursuivre mes études dans une prestigieuse école supérieure d'informatique à l'étranger. J'ai ensuite rejoint l'Université Paris Descartes pour enrichir mes connaissances et compétences. Ma spécialisation en MIAGE, parcours informatique décisionnelle, est sans doute le choix qui a façonné mon profil professionnel. La MIAGE est une formation pluridisciplinaire, ce qui m'a permis de maîtriser un éventail de domaines allant de la finance à la gestion de projet, en passant par l'économie, les systèmes d'information et le machine learning. En dehors de ma formation académique, mon engouement pour le développement m'a poussé à investir mon temps libre pour me former sur diverses technologies, englobant le développement front-end, back-end et le cloud. Cette démarche autodidacte montre ma détermination à rester à la pointe de la technologie, et ma volonté de toujours apprendre et évoluer. Je suis donc prêt à relever de nouveaux défis, en apportant à la table non seulement mes compétences techniques, mais aussi une approche holistique de la résolution de problèmes, fruit de mon parcours diversifié en MIAGE."
    
    

  }




export {services, domaineComp, techComp, devopsComp, projects, aboutMe};




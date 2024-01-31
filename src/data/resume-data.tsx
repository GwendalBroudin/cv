import { Emoko, Exakis, Wiztivi } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export type ProjectType = "XR" | "WEB";

export function getResumeData(t: (k: string, data?: any) => string) {
  return {
    name: "Gwendal Broudin",
    initials: "GB",
    location: "Nantes, France",
    locationLink: "https://www.google.com/maps/place/Nantes",
    about: t("about"),
    summary:
      "Développeur fullstack passionné par le cloud et la réalité mixte. J'aime travailler sur des projets innovants et ambitieux. Curieux de nature, j'aime être en constant apprentissage. Je suis très à l'aise avec les technologies Microsoft et j'ai une bonne connaissance des technologies web. Je suis très autonome et j'aime travailler en équipe.",
    avatarUrl: "https://avatars.githubusercontent.com/u/7550782?v=4",
    personalWebsiteUrl: "https://jarocki.me",
    contact: {
      email: "gwendalbroudin@gmail.com",
      tel: "+330633383827",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/GwendalBroudin",
          icon: GitHubIcon,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/gwendal-broudin-207147b6/",
          icon: LinkedInIcon,
        },
      ],
    },
    education: [
      {
        school: t("school.name"),
        degree: t("school.degree"),
        start: "2011",
        end: "2017",
      },
    ],
    work: [
      {
        company: "Emoko",
        link: "https://emoko.io",
        badges: ["BIM", "VR"],
        title: t("work.emoko.title"),
        logo: Emoko,
        start: "2021",
        end: "2024",
        description:
          "Conception de l'infrastructure et l'architecture logicielle. Formation des équipes de développement. Gestion des plannings (sprints + road map). Technologies: Unity3D, WebGL, GLTF, VContainer, Cloud Function, Cloud Run",
      },
      {
        company: "Exakis Nelite",
        link: "http://www.exakis-nelite.com/",
        badges: ["Industrie 4.0", "IoT", "XR", "Cloud"],
        title: "Consultant Sénior",
        logo: Exakis,
        start: "2018",
        end: "2021",
        description:
          "Construction de l’offre commerciale Réalité Mixte en partenariat avec Microsoft. LeadDev Unity3D et Architecte junior Azure Cloud. Expert Hololens : Formation, conseil, prototypage et développement sur différents usages en réalité mixte. Technologies: Unity3D, Hololens, Azure Cloud, Azure DevOps, Azure AD, Terraform, Docker, React, Angular, SQL, ASP.NET Core",
      },
      {
        company: "Wiztivi",
        link: "https://www.wiztivi.com",
        badges: ["Entertainment", "TV"],
        title: "Développeur Front",
        logo: Wiztivi,
        start: "2017",
        end: "2018",
        description:
          "Responsable des features contrôle parentale et écran épisodes pour l’interface des boxes TV du groupe Liberty Global. Refonte du data binding MVVM (framework interne). Technologies: JavaScript, Node.js, SDL2",
      },
      {
        company: "Bloc in Bloc",
        link: "https://www.sogelink.com/solution/bloc-in-bloc/",
        badges: ["BIM", "VR", "AR"],
        title: "Développeur Unity3D",
        logo: Exakis,
        start: "2017",
        end: "2016",
        description: "Développement de la solution BIM Bloc in Bloc. Client: SNCF  Immobilier, Bouygues ES, Eiffage, Léon Grosse",
      },
    ],
    skills: [
      "TypeScript/JS",
      "HTML/CSS",
      "Angular",
      "React",
      "Node.js",
      "NestJS",
      "ASP.NET Core",
      "MongoDB",
      "PostgreSQL",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "GCP",
      "Azure Cloud",
      "Unity3D AR/VR",
      "Hololens",
      "Jira",
      "Git",
      "CI/CD",
    ],
    projects: [
      {
        type: "XR",
        title: "Emoko Web Player",
        techStack: [
          "Unity3D",
          "URP",
          "Shader Graph",
          "UI Toolkit",
          "WebGL",
          "GLTF",
          "VContainer",
          "UniRX",
        ],
        description: `Application WEB pour visiter et configurer des logements en réalité virtuelle. Rendus photo réaliste haute qualité.`,
        logo: Emoko,
        link: {
          label: "emoko",
          href: "https://emoko.io",
        },
      },
      {
        type: "XR",
        title: "Emoko Automation Tools",
        techStack: [
          "GCP Cloud Function/Run",
          "GCP Cloud Compute",
          "Unity3D",
          "VContainer",
          "GLTF",
          "IFC",
        ],
        description:
          "Agents basé sur Unity Editor pour le pré-calcul de rendus et la conversion/ optimization des assets. Système de queue et scaling horizontale sur GCP.",
        logo: Emoko,
        link: {
          label: "emoko",
          href: "https://emoko.io",
        },
      },
      {
        type: "WEB",
        title: "Emoko platform",
        techStack: [
          "Angular",
          "Nest.js",
          "MongoDB",
          "Keycloak",
          "Kubernetes (GKE)",
          "PostgreSQL",
          "Terraform",
          "CI/CD",
        ],
        description:
          "Plateforme de gestion. Suivi des ventes, génération de facture TMA, gestion des prospects, administrations des comptes...",
        logo: Exakis,
        link: {
          label: "emoko",
          href: "https://emoko.io",
        },
      },
      {
        type: "XR",
        title: "Electric equipment XR",
        techStack: ["Azure Custom Vision","Azure Spatial Anchor" ,"HoloLens", "Unity"],
        description:
          "Reconnaissance de différents équipements électriques sur HoloLens pour les techniciens du groupe groupe Schneider. Affichage en réalité augmentée avec persistance spatiale",
        logo: Exakis,
        link: {
          label: "Schneider Electric",
          href: "https://www.se.com/",
        },
      },
      {
        type: "WEB",
        title: "Guest management",
        techStack: ["Azure Custom Vision","Azure Spatial Anchor" ,"HoloLens", "Unity"],
        description:
          "Solution SAAS pour gérer les comptes invités du groupe Saint Gobain. Architecture serverless hautement sécurisée avec une forte optimisation des coûts d’hébergement.",
        logo: Exakis,
        link: {
          label: "Schneider Electric",
          href: "https://www.se.com/",
        },
      },
      {
        type: "XR",
        title: "Vivatech 2018/19/20",
        techStack: ["HoloLens", "Unity", "Azure spatial anchor"],
        description:
          "Création d’applications de démonstration HoloLens pour le stand d’Exakis-Nelite au salon Vivatech 3 ans de suite. Dispense de formations internes Unity et Hololens. Thématiques: Spatial, BTP/BIM, Industrie 4.0",
        logo: Exakis,
        link: {
          label: "magellan-partners.eu",
          href: "https://www.magellan-partners.eu/article/viva-technology-2019-le-rendez-vous-mondial-de-linnovation/#:~:text=Pour%20cette%204%C3%A8me%20%C3%A9dition%20de,Robotic%20Process%20Automation%20(RPA)",
        },
      },
      {
        type: "XR",
        title: "Tigital Twin XR",
        techStack: ["HoloLens", "MS. Remote Assists", "Azure spatial anchor"],
        description: "Étude pour le Total Energies. Faisabilité d'un digital twin affiché en XR d'une raffinerie. Proposition d'architecture pour l'intégration avec le SI (gestion des modèles 3D, spatialisation, données techniques ...).",
        logo: Exakis,
        link: {
          label: "getyearprogress.com",
          href: "https://getyearprogress.com/",
        },
      },
      {
        type: "WEB",
        title: "Plateforme comptable",
        techStack: [
          "Lead Developer",
          "CosmosDB",
          "ASP.NET Core",
          "Angular",
          "GraphQL",
        ],
        description:
          "Solution SAAS destinée à la saisie comptable des clubs L1 et L2 de la LFP pour la LFP/DNCG. Synchronisation en temps réel. Techlead pour une équipe de 5 personnes. Forte implication dans l’architecture logicielle.",
        logo: Exakis,
        link: {
          label: "lfp.fr",
          href: "https://www.lfp.fr/",
        },
      },
      {
        type: "XR",
        title: "Bloc in bloc",
        techStack: [
          "Unity",
          "Vuforia",
          "HoloLens",
          "HTC Vive",
          "Oculus",
          "Android/IOS",
        ],
        description:
          "Solution BIM en réalité mixte modulaire. Superposition de la maquette 3D au bâtiment réel pour smartphone et HoloLens. Visite en réalité virtuelle. Logique métier mutualisée (filtrage, annotations ...). Veille importante sur les équipements et algorithmes de réalité augmentée.",
        logo: Exakis,
        link: {
          label: "lfp.fr",
          href: "https://www.lfp.fr/",
        },
      },
    ],
  } as const;
}

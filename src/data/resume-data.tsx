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
    summary: t("description"),
    avatarUrl: "https://avatars.githubusercontent.com/u/7550782?v=4",
    spokenLanuages: [t('languages.0'), t('languages.1')],
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
        description: t("work.emoko.description"),
      },
      {
        company: "Exakis Nelite",
        link: "http://www.exakis-nelite.com/",
        badges: [t('work.exakis.badges.0'),t('work.exakis.badges.1'),  t('work.exakis.badges.2')],
        title: t("work.exakis.title"),
        logo: Exakis,
        start: "2018",
        end: "2021",
        description: t("work.exakis.description"),
      },
      {
        company: "Wiztivi",
        link: "https://www.wiztivi.com",
        badges: ["Entertainment", "TV"],
        title: t("work.wiztivi.title"),
        logo: Wiztivi,
        start: "2017",
        end: "2018",
        description: t("work.wiztivi.description"),
      },
      {
        company: "Bloc in Bloc",
        link: "https://www.sogelink.com/solution/bloc-in-bloc/",
        badges: ["BIM", "VR", "AR"],
        title: t("work.bib.title"),
        logo: Exakis,
        start: "2017",
        end: "2016",
        description: t("work.bib.description"),
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
        description: t("projects.emokoPlayer.description"),
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
        description: t("projects.emokoAutomation.description"),
        logo: Emoko,
        link: {
          label: "emoko",
          href: "https://emoko.io",
        },
      },
      {
        type: "WEB",
        title: "Emoko Platform",
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
        description: t("projects.emokoPlatform.description"),
        logo: Exakis,
        link: {
          label: "emoko",
          href: "https://emoko.io",
        },
      },
      {
        type: "XR",
        title: "Electric equipments XR",
        techStack: [
          "Azure Custom Vision",
          "Azure Spatial Anchor",
          "HoloLens",
          "Unity",
        ],
        description: t("projects.schneider.description"),
        logo: Exakis,
        link: {
          label: "Schneider Electric",
          href: "https://www.se.com/",
        },
      },
      {
        type: "WEB",
        title: "Guest management",
        techStack: [
          "Angular",
          "Fluent UI",
          "Azure Cloud Functions",
          "Azure Table Storage",
          "ASP.NET Core",
          "Azure AD B2C",
          "Terraform"
        ],
        description: t("projects.saintGobain.description"),
        logo: Exakis,
        link: {
          label: "Saint Gobin",
          href: "https://www.saint-gobain.com/",
        },
      },
      {
        type: "XR",
        title: "Vivatech 2018/19/20",
        techStack: ["HoloLens", "Unity", "Azure spatial anchor"],
        description: t("projects.vivatech.description"),
        logo: Exakis,
        link: {
          label: "magellan-partners.eu",
          href: "https://www.magellan-partners.eu/article/viva-technology-2019-le-rendez-vous-mondial-de-linnovation/#:~:text=Pour%20cette%204%C3%A8me%20%C3%A9dition%20de,Robotic%20Process%20Automation%20(RPA)",
        },
      },
      {
        type: "XR",
        title: "Digital Twin XR",
        techStack: ["HoloLens", "MS. Remote Assists", "Azure spatial anchor"],
        description: t("projects.total.description"),
        logo: Exakis,
        link: {
          label: "getyearprogress.com",
          href: "https://getyearprogress.com/",
        },
      },
      {
        type: "WEB",
        title: t('projects.dncg.title'),
        techStack: [
          "Lead Developer",
          "CosmosDB",
          "ASP.NET Core",
          "Angular",
          "GraphQL",
        ],
        description: t("projects.dncg.description"),
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
          t('projects.bib.description'),
        logo: Exakis,
        link: {
          label: "lfp.fr",
          href: "https://www.lfp.fr/",
        },
      },
    ],
    hobbies: [
      {
        name: t('hobby.juggling.name'),
        link: null,
      },
      {
        name: t('hobby.bike.name'),
        link: null,
      },
      {
        name: t('hobby.roller.name'),
        link: null,
      },
      {
        name: t('hobby.cooking.name'),
        link: "https://www.letelegramme.fr/finistere/les-quatre-moulins-29200/span-cuisinebien-span-le-fait-maison-des-etudiants-2115898.php",
      },
      {
        name: t('hobby.concerts.name'),
        link: null,
      },
      {
        name: t('hobby.show.name'),
        link: null,
      },
    ],
  } as const;
}

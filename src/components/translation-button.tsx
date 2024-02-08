import { ENFlag, FRFlag } from "@/images";
import Image from "next/image";

export type Lang = keyof typeof flags;

const flags = {
  en: {
    label: "English version",
    flag: ENFlag,
    link: "/en",
  },
  fr: {
    label: "Version française",
    flag: FRFlag,
    link: "/fr",
  }
} as const;

export function TranslationButton(props: { lang: Lang }) {
  const flag = getTranslationsButtonData(props.lang);

  return (
    <div className="print:hidden flex justify-center">
      <a className="flex align-middle gap-1" href={flag.link} aria-label={flag.label}>
        <Image className="w-6 object-contain" src={flag.flag} alt={flag.label} />
        <span>
          {flag.label}
        </span>
      </a>
    </div>
  );
}

export function getTranslationsButtonData(lang: Lang) {
  return flags[lang === 'en' ? 'fr' : 'en']
}
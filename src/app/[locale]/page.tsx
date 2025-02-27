import { CommandMenu } from "@/components/command-menu";
import { ProjectCard } from "@/components/project-card";
import { TranslationButton, getTranslationsButtonData } from "@/components/translation-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getResumeData } from "@/data/resume-data";
import { GlobeIcon, Languages, LanguagesIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: 'en' | 'fr' };
};

export async function generateMetadata(
  { params: { locale } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getTranslations({ locale });
  const RESUME_DATA = getResumeData(t);
  return {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
  };
}

export default function Page(p: Props) {
  const t = useTranslations();
  const RESUME_DATA = getResumeData(t);
  const flag = getTranslationsButtonData(p.params.locale);
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-4 print:pb-0 md:p-16 md:pt-0 pt-0">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6 ">
        <TranslationButton lang={p.params.locale} />
        <div className="flex items-center justify-between gap-x-0">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="inline-flex gap-x-1.5 align-baseline leading-none max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <LanguagesIcon className="size-3"/>  {RESUME_DATA.spokenLanuages.join(", ")}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-24 sm:size-32">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">{t("titles.about")}</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">{t("titles.work")}</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex flex-1 flex-wrap items-center gap-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">{t("school.sectionTitle")}</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="flex-1 font-semibold  leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="hidden print:flex">
          <h2 className="text-xl font-bold">{t("hobby.sectionTitle")}</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground flex justify-between flex-wrap">
            {RESUME_DATA.hobbies.map((hobby) => (
              hobby.link ?
                <a key={hobby.name} href={hobby.link} target="_blank">{hobby.name} </a>
                : <span key={hobby.name}> {hobby.name} </span>
            ))}
          </p>
        </Section>

        <Section>
          <h2 className="print-force-new-page text-xl font-bold">
            {t("skills.sectionTitle")}
          </h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">{t("projects.sectionTitle")}</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
        <Section className="print:hidden">
          <h2 className="text-xl font-bold">{t("hobby.sectionTitle")}</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground flex justify-between flex-wrap gap-2">
            {RESUME_DATA.hobbies.map((hobby) => (
              hobby.link ?
                <a key={hobby.name} href={hobby.link} target="_blank">{hobby.name} </a>
                : <span key={hobby.name}> {hobby.name} </span>
            ))}
          </p>
        </Section>
      </section>
      <CommandMenu
        labels={t.raw("actions")}
        links={[
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
          {
            url: flag.link,
            title: flag.label,
            target: "_self",
          }
        ]}
      />
    </main>
  );
}

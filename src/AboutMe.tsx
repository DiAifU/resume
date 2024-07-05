import { Section, SectionTitle } from "./Section.tsx";

export function AboutMe() {
  return (
    <div className="max-w-xl">
      <Section>
        <SectionTitle>ABOUT ME</SectionTitle>
        <p>
          Driven by a lifelong passion for technology, I began my journey as a
          developer at age 13, initially creating software for fun and personal
          projects. I pursued studies in electronics and IT, with the ultimate
          goal of starting my own business in the tech industry
        </p>
      </Section>
    </div>
  );
}

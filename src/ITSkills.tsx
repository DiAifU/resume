import { Section, SectionTitle } from "./Section.tsx";

export function ITSkills() {
  return (
    <Section>
      <SectionTitle>SKILLS</SectionTitle>
      <ul className="list-disc list-inside">
        <li>Backend and frontend systems</li>
        <li>Cloud architecture</li>
        <li>Communication</li>
        <li>Project management</li>
      </ul>
    </Section>
  );
}

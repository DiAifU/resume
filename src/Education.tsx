import {
  Section,
  SectionCategory,
  SectionCategoryContent,
  SectionCategorySubTitle,
  SectionCategoryTitle,
  SectionTitle,
} from "./Section.tsx";

export function Education() {
  return (
    <Section>
      <SectionTitle>EDUCATION</SectionTitle>
      <SectionCategory>
        <SectionCategoryTitle>
          CPE Lyon Engineering School - <br /> Master degree
        </SectionCategoryTitle>
        <SectionCategorySubTitle>Class of 2019</SectionCategorySubTitle>
        <SectionCategoryContent>
          <ul className="list-disc">
            <li>Software Development</li>
            <li>Embedded Systems</li>
            <li>Unix Architecture</li>
            <li>Network Architectures</li>
            <li>Analog and Digital Electronics</li>
            <li>Analytical and Algebraic Mathematics</li>
          </ul>
        </SectionCategoryContent>
      </SectionCategory>
      <SectionCategory>
        <SectionCategoryTitle>
          Classes Préparatoires CPE Lyon
        </SectionCategoryTitle>
        <SectionCategorySubTitle>Class of 2015</SectionCategorySubTitle>
        <SectionCategoryContent>
          <ul className="list-disc">
            <li>Mathematics</li>
            <li>Physics</li>
            <li>Signal processing</li>
          </ul>
        </SectionCategoryContent>
      </SectionCategory>
    </Section>
  );
}

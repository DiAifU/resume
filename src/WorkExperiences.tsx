import {
  Section,
  SectionCategory,
  SectionCategoryContent,
  SectionCategorySubTitle,
  SectionCategoryTitle,
  SectionTitle,
} from "./Section.tsx";

export function WorkExperiences() {
  return (
    <Section>
      <SectionTitle>WORK EXPERIENCES</SectionTitle>
      <SectionCategory>
        <SectionCategoryTitle>
          Chief Technical Officer - Co-founder
        </SectionCategoryTitle>
        <SectionCategorySubTitle>
          Xtra-energy, Paris | May 2024 - Now
        </SectionCategorySubTitle>
        <SectionCategoryContent>{""}</SectionCategoryContent>
      </SectionCategory>
      <SectionCategory>
        <SectionCategoryTitle>Lead Backend Developer</SectionCategoryTitle>
        <SectionCategorySubTitle>
          Energy One Limited (former eZ-nergy), Paris | June 2022 - November
          2023
        </SectionCategorySubTitle>
        <SectionCategoryContent>
          <ul className="list-disc">
            <li>Managed a team of developers</li>
            <li>
              Upgraded cloud architecture to automated scaling technologies
              (Kubernetes)
            </li>
          </ul>
        </SectionCategoryContent>
      </SectionCategory>
      <SectionCategory>
        <SectionCategoryTitle>Backend Developer</SectionCategoryTitle>
        <SectionCategorySubTitle>
          eZ-nergy (later Energy One Limited), Paris | September 2019 - June
          2024
        </SectionCategorySubTitle>
        <SectionCategoryContent>
          <ul className="list-disc">
            <li>
              Developed an automated trading system for real-time energy markets
            </li>
            <li>
              Developed an automated trading system for auction energy markets
            </li>
          </ul>
        </SectionCategoryContent>
      </SectionCategory>
      <SectionCategory>
        <SectionCategoryTitle>
          Web Engineer Intern - Team Manager
        </SectionCategoryTitle>
        <SectionCategorySubTitle>
          MoneyGoat LLC, New-York | February - September 2018
        </SectionCategorySubTitle>
        <SectionCategoryContent>
          <ul className="list-disc">
            <li>
              Developed a social network (Frontend and Backend) using
              cutting-edge web technologies (NodeJS, ReactJS, Semantic UI, and
              Neo4J)
            </li>
            <li>Managed a team of two people</li>
            <li>Trained future employees at the end of my internship</li>
          </ul>
        </SectionCategoryContent>
      </SectionCategory>
      <SectionCategory>
        <SectionCategoryTitle>Software Engineer Intern</SectionCategoryTitle>
        <SectionCategorySubTitle>
          Fraunhofer IPK, Berlin | July - December 2017
        </SectionCategorySubTitle>
        <SectionCategoryContent>
          <ul className="list-disc">
            <li>Created a database made of computer activities of engineers</li>
            <li>
              Processed this database to predict the current activity of
              engineers using Machine Learning algorithms
            </li>
          </ul>
        </SectionCategoryContent>
      </SectionCategory>
    </Section>
  );
}

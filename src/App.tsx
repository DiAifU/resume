import { Header } from "./Header.tsx";
import { WorkExperiences } from "./WorkExperiences.tsx";
import { Education } from "./Education.tsx";
import { Contact } from "./Contact.tsx";
import { ITSkills } from "./ITSkills.tsx";
import { AboutMe } from "./AboutMe.tsx";

function App() {
  return (
    <div className="w-[960px] mx-auto p-6">
      <Header />
      <div className="flex justify-between border-y py-4 mb-8 gap-10">
        <AboutMe />
        <Contact />
      </div>
      <div className="grid grid-cols-3 gap-x-8 divide-x">
        <div className="col-span-1 flex flex-col gap-8 px-4">
          <Education />
          <ITSkills />
        </div>
        <div className="col-span-2 px-4">
          <WorkExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;

import { Section } from "./Section.tsx";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <Section>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex gap-2 whitespace-nowrap">
          <Phone /> +33 6 23 03 03 94
        </li>
        <li className="flex gap-2 whitespace-nowrap">
          <Mail /> nicolas.montvernay@gmail.com
        </li>
        <li className="flex gap-2 whitespace-nowrap">
          <MapPin /> 212 rue Saint Maur, 75010 Paris
        </li>
      </ul>
    </Section>
  );
}

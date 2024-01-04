import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {
  console.log("랜더링 내용");

  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}

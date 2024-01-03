import React, { useState } from "react";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  // 몰랐는데 얘네 둘은 배열 구조분해래^^..
  const [selectedTopic, setSelectedTopic] = useState("");

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedIndex) {
    setSelectedTopic(selectedIndex);
  }

  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>coreConcept</h2>
          <ul>
            {/*
            0. 하나씩 나열하기
             <CoreConcept img={CORE_CONCEPTS[0].img} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} /> 
            1. 하나를 풀기
             <CoreConcept {...CORE_CONCEPTS[0]} /> 
            2. item 값으로 받아서 뿌리기
            {CORE_CONCEPTS.map((item, index) => (
              <CoreConcept key={"core-concepts" + index} item={item} />
            ))} */}
            {CORE_CONCEPTS.map((conceptItem, index) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>
              State
            </TabButton>
          </menu>
          <div id="tab-content">{tabContent}</div>
        </section>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabContent from "./components/TabContent.jsx";

function App() {
  return (
    <React.Fragment>
      {/* 이런 식으로 나눠놔야, state 값이 바뀔때 해당 컴포넌트만 재랜더링됨. */}
      <Header />
      <main>
        <CoreConcepts />
        <TabContent />
      </main>
    </React.Fragment>
  );
}

export default App;

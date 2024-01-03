import reactImg from "./assets/react-core-concepts.png";
import * as Data from "./data";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}

function CoreConcept({ item }) {
  return (
    <li>
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>coreConcept</h2>
          <ul>
            {/* <CoreConcept {...Data.CORE_CONCEPTS[0]} /> */}
            <CoreConcept img={Data.CORE_CONCEPTS[0].img} title={Data.CORE_CONCEPTS[0].title} description={Data.CORE_CONCEPTS[0].description} />
            {/* {Data.CORE_CONCEPTS.map((item) =>
              <CoreConcept item={item} />
            )} */}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

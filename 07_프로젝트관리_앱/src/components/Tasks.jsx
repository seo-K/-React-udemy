import NewTask from "./NewTask";

export default function Tasks({ tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">할일 목록</h2>
      <NewTask />
      <p className="text-stone-800 my-4">아직 마땅히 할 일이 없네요...</p>
      <ul></ul>
    </section>
  );
}

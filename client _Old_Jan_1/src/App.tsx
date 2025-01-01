import { useEffect, useState } from "react";

function App() {
  const [scripts, setScripts] = useState([]);
  useEffect(() => {
    fetchScripts();
  }, []); // Empty dependency array triggers the effect on mount only

  const fetchScripts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/scripts/");

      const data = await response.json();
      setScripts(data);
    } catch (error) {
      console.error("Error fetching scripts:", error);
    }
  };

  return (
    <>
      <h1> Script Upload</h1>
      <div>
        <input type="text" placeholder="Script Title..." />
        <input type="number" placeholder="Release Year..." />
        <button> Upload Script </button>
      </div>
      {scripts.map((script: { title: string; release_year: number }) => (
        <div>
          <h2>Title: {script.title}</h2>
          <p>Release Year: {script.release_year}</p>
        </div>
      ))}
    </>
  );
}

export default App;

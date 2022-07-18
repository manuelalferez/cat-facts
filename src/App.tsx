import { useState, useEffect } from "react";

const API_URL = "https://catfact.ninja/facts";
interface ApiData {
  fact: string;
  length: number;
}

function App() {
  const [facts, setFacts] = useState<string[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const api = async () => {
      try {
        const data = await fetch(API_URL, {
          method: "GET",
        });
        const jsonData = await data.json();
        const listOfFacts: string[] = jsonData.data.map(
          (item: ApiData) => item.fact
        );
        setFacts(listOfFacts);
      } catch (error) {
        setError(error);
      }
    };
    api();
  }, []);

  if (!error) {
    return (
      <div className="flex flex-col p-4" id="facts">
        {facts.map((fact: string, index: number) => (
          <p className="my-2" key={index}>
            {fact}
          </p>
        ))}
      </div>
    );
  } else {
    return <div>An error has occurred: {error}</div>;
  }
}

export default App;

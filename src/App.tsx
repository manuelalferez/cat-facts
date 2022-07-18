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
      <div className="flex flex-col items-center my-14" id="facts">
        <h1 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 my-4">
          Cat facts
        </h1>
        {facts.map((fact: string, index: number) => (
          <p
            className="text-lg border border-gray-200 drop-shadow-md p-6 my-4 rounded-lg xl:w-1/3 md:w-1/2 w-5/6 bg-blue-100"
            key={index}
          >
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

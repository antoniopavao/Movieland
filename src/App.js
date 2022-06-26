import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=2c5117a7";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search[0]);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return <h1>App</h1>;
};

export default App;

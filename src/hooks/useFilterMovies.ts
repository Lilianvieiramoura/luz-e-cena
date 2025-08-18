import { useEffect, useState } from "react"
import type { Movie } from "../components/types";

const useFilterMovies = (movies : Movie[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setFitleredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setFitleredMovies(movies);
  }, [movies]);

  const handleSearch = () => {
    const filtered = movies.filter((movie) => (
      movie.titulo.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ));
    setFitleredMovies(filtered);
  }

  return { searchTerm, setSearchTerm, handleSearch, filteredMovies };
}

export default useFilterMovies
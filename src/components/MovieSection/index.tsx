import { FaSearch } from 'react-icons/fa';
import Button from '../Button';
import Fieldset from '../Fieldset';
import InputText from '../InputText';
import styles from './MovieSection.module.css';
import MovieList from '../MovieList';
import { useEffect, useState } from 'react';
import type { Movie } from '../types';
import { getMovies } from '../../api';

const MovieSection = () => {

  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      console.error("Erro ao buscar filmes" + error);
    }
  };

  useEffect(() => {
    fetchMovies();
  });

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant='second'>
          <InputText placeholder='Buscar filmes...'/>
          <Button variant='icon'>
            <FaSearch />
          </Button>
        </Fieldset>

        <h1 className={styles.titulo}>Em cartaz</h1>
        <MovieList movies={movies}/>
      </section>
    </main>
  )
}

export default MovieSection;
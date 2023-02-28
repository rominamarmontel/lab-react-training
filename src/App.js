import React from 'react';
import './index.css';
import IdCard from './components/IdCard';

const usersArray = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function App() {
  return (
    <div className="App">
      {usersArray.map((user) => {
        return <IdCard id={user} />;
      })}
    </div>
  );
}

export default App;

// return (
//   <section>
//     <Counter />
//     <ClassCounter />
//     <Container>
//       {movies.map((movie) => {
//         return (
//           <div className="CardMovie">
//             <h3>{movie.title}</h3>
//             <p>Director: {movie.director}</p>
//             <p>Production year: {movie.year}</p>
//             <p>Genres: {movie.genre}</p>
//             <p>Score: {movie.score}</p>
//           </div>
//         );
//       })}
//     </Container>
//   </section>
// );

import { useState } from 'react';
import './App.css';
import { Header } from './layouts/Header';
import Footer from './layouts/Footer';
import SideContainer from './layouts/SideContainer';
import './layouts/Layout.css';
import { sahteVeri } from './sahteVeri.js';
import Main from './layouts/Main';

const user1 = {
  name: 'Gaye',
  surname: 'Özkan',
  age: 46,
};
const user2 = {
  name: 'Kagan',
  surname: 'Özkan',
  age: 42,
};
function App() {
  const [movies, setMovies] = useState(sahteVeri);

  const [user, setUser] = useState(user1);
  const [searchText, setSearchText] = useState('');

  function handleSearch(event) {
    const { value } = event.target;
    setSearchText(value);

    const aramaSonucu = sahteVeri.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setMovies(aramaSonucu);
  }
  function handleClick(value) {
    setUser(value);
  }
  return (
    <>
      <Header searchText={searchText} handleSearch={handleSearch} />
      <div className="content-section">
        <SideContainer kullanici={user} changeUser={handleClick} />
        <Main movies={movies} />
      </div>

      <Footer user={user} />
    </>
  );
}
//key value ikilisi olarak yazamk zorundayız
export default App;

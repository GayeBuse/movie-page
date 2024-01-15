import './Header.css';
export function Header(props) {
  const { searchText, handleSearch } = props;

  return (
    <>
      <header>
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search"
        />

        <nav>
          <a href="#">Ana Sayfa</a>
          <a href="#">Ürünler</a>
          <a href="#">İletişim</a>
          <a href="#">Yardım</a>
        </nav>
      </header>
    </>
  );
}

/*function Header() {
  return (
    <>
      <header>
        <nav>
          <a href="#">Ana Sayfa</a>
          <a href="#">Ürünler</a>
          <a href="#">İletişim</a>
          <a href="#">Yardım</a>
        </nav>
      </header>
    </>
  );
}
export default Header;
*/

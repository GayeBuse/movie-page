export default function SideContainer(props) {
  const { kullanici, changeUser } = props;
  const user2 = {
    name: 'Sibel',
    surname: 'Ozkan',
    age: 42,
  };
  //const {name,surname,age}=kullanici;
  //{name} SideBar'a Hoşgeldin.

  return (
    <div className="side-container">
      {kullanici.name} {kullanici.surname} SideBar'a Hoşgeldin.
      <button onClick={() => changeUser(user2)}>Sibel Login</button>
    </div>
    //eğer arrow function ile yazmazsak direkt çalıştırır refesh edildiğinde sıfırlanmaz
  );
}
/* ${name}${surname}*/

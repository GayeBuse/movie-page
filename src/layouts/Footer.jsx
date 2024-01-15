export default function Footer(props) {
  const { user } = props;
  return (
    <footer>
      <p>Copyright @ 2023</p>
      <p>Logged in user is {user.name}</p>
    </footer>
  );
}

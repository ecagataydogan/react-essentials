import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

export default function Header() {
  const randomNumber = Math.trunc(Math.random() * 3) + 1;
  let str;
  if (randomNumber === 1) str = "Core";
  if (randomNumber === 2) str = "Crucial";
  if (randomNumber === 3) str = "Fundamental";
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {str} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

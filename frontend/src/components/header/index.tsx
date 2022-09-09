import logo from "../../assets/images/logo.svg";
import "./style.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/v1tormoura/">@v1tormoura</a>
        </p>
      </div>
    </header>
  );
}

export default Header;

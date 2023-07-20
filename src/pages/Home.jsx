import CardList from "../components/CardList";
import "../styles/scss/main.scss";

function Home() {
  return (
    <div className="portfolio-page">
      <div className="portfolio">
        <CardList />
      </div>
    </div>
  );
}

export default Home;

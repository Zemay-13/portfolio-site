import Card from "./Card";
import "../styles/scss/components/portfolio.scss";
import "../styles/scss/components/media.scss";
import { sites } from "../data/sites";

const CardList = () => {
  console.log(sites);
  console.log("hi from cardlist");
  return (
    <div className="portfolio__container">
      {sites.map((site) => {
        return <Card key={site.url} {...site} />;
      })}
    </div>
  );
};

export default CardList;

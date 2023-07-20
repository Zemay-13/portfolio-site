import "../styles/scss/components/card.scss";
import "../styles/scss/components/media.scss";

const Card = ({ name, url, description, design, imageUrl, code }) => {
  console.log(code);
  console.log(description);
  return (
    <div className="portfolio__card card">
      <div className="card__img">
        <img src={imageUrl} alt="card img" />
        <div className="card__img-link">
          <a href={url} target="_blank">
            View all
          </a>
        </div>
      </div>
      <div className="card__content">
        <div className="card__title">
          <h2>{name}</h2>
          <div className="card__title-divider"></div>
        </div>
        <div className="card__description">
          <div className="card__description-part">
            <div className="card__sub-title">
              <p>Design</p>
            </div>
            <div className="card__text">
              <ul className="card__list">
                <li>{design}</li>
              </ul>
            </div>
          </div>
          <div className="card__description-part">
            <div className="card__sub-title">
              <p>Code</p>
            </div>
            <div className="card__text">
              <ul className="card__list">
                {code.map((el, i) => {
                  return <li key={i}>{el}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="card__description-part">
            <div className="card__sub-title">
              <p>Description</p>
            </div>
            <div className="card__text">
              <ul className="card__list">
                {description.map((el, i) => {
                  return <li key={i}>{el}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="card__btns">
          <form action={url} target="_blank">
            <button>Show more</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;

import s from "../styles/Offer.module.css"

const Offer = () => {
  return (
    <div className={s.container}>
        <div className={s.cards}>
            <div className={s.card}>
                <div className={s.card__heading}>
                    <img src="images/offers/offer_1.webp" alt="offer from montana" />
                </div>
                <div className={s.card__body}>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Offer;

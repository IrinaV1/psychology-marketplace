import css from './ReviewCard.module.css';

export function ReviewCard() {
  return (
    <li className={css.containerReviewCard}>
      <div className={css.wrapperReviewInfo}>
        <div className={css.reviewUserImage}>
          <p className={css.userImg}>M</p>
        </div>
        <div className={css.reviewUserInfo}>
          <h3 className={css.userName}>Michael Brown</h3>
          <div className={css.rating}>
            <svg className={css.ratingIcon} width="16" height="16">
              <use href="/icons.svg#icon-star" />
            </svg>
            <span className={css.ratingNum}>4.5</span>
          </div>
        </div>
      </div>
      <div className={css.wrapperReviewDescription}>
        <p>
          Dr. Davis has been a great help in managing my depression. Her
          insights have been valuable.
        </p>
      </div>
    </li>
  );
}

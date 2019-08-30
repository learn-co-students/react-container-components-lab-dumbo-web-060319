import React from 'react';

const ReviewItem = ({
  headline, byline, link, summary_short }) => {
    return (
      <div className="review" key={headline}>
        <header>
          <a className="link" href={link.url}>
            <h3>{headline}</h3>
          </a>
          <span className="byline">{byline}</span>
        </header>
        <blockquote>{summary_short}</blockquote>
      </div>
    );
  };

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(ReviewItem)}
  </div>
);

export default MovieReviews;

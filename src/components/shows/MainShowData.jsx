import React from "react";
import NOT_FOUND from "../../images/not-found.png";
import { Star } from '../styled'

const MainShowData = ({ name, rating, summary, tags, image }) => {
    return (
      <div>
        <img src={image ? image.medium : NOT_FOUND} alt="show-cover" />
        <div>
          <div>
            <h1>{name}</h1>
            <div>
              <Star />
              <span>{rating.average || 'N/A'}</span>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
  
          <div>
            Tags:{' '}
            <div>
              {tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default MainShowData;

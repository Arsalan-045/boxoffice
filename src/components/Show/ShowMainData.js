import React from 'react';
import { MainDataWrapper, Headline, TagList } from './ShowMainData.styled';
import { Star } from '../Styled';

const ShowMainData = ({name, rating, summary, tags, image}) => {
  return (
    
    <MainDataWrapper>
    <img src={image ? image.original : 'Not  found image'} alt="show-cover" />
    <div className='text-side'>
      <div>
        <h1>{name}</h1>
        <div>
          <Star active />
          <span>{rating.average || 'N/A'}</span>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />

      <div>
        Tags:{' '}
        <TagList>
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </TagList>
      </div>
    </div>
  </MainDataWrapper>

  );
};

export default ShowMainData

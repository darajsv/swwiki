import React, { useEffect, useState } from 'react';
import './selector.css';
import api from '../../services/api';
import SelectCard from './SelectCard/SelectCard.jsx';

const Selector = (props) => {
  const [data, setData] = useState([]);
  const [previousPage, setPreviousPage] = useState('');
  const [nextPage, setNextPage] = useState('');
  const [pageNumber, setPageNumber] = useState('');

  useEffect(() => {
    api
      .get(`/${props.route}/${pageNumber}`)
      .then((response) => {
        setData(response.data);
        setPreviousPage(
          response.data.previous
            ? response.data.previous.split('/').reverse()[0]
            : ''
        );
        setNextPage(
          response.data.next ? response.data.next.split('/').reverse()[0] : ''
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setData, setNextPage, setPreviousPage, pageNumber, props.route]);

  const renderSelectCards = () => {
    return data.results?.map((items) => {
      const id = items.url.split('/').reverse()[1];
      if (props.route === 'films') {
        return <SelectCard key={id} id={id} path='people' name={items.title} />;
      }
      return <SelectCard key={id} id={id} path='people' name={items.name} />;
    });
  };

  const renderArrows = (direction) => {
    if (direction === 'next' && nextPage !== '') {
      return (
        <span type='button' onClick={() => setPageNumber(nextPage)}>
          &#62;
        </span>
      );
    }
    if (direction === 'previous' && previousPage !== '') {
      return (
        <span type='button' onClick={() => setPageNumber(previousPage)}>
          &#60;
        </span>
      );
    }
  };

  return (
    <div className='selector_main'>
      <div className='header'>
        <h1>{props.title}</h1>
      </div>
      <div className='selector_content'>
        <div className='selector_arrow'>{renderArrows('previous')}</div>
        <div className='selector_cards'>{renderSelectCards()}</div>
        <div className='selector_arrow'>{renderArrows('next')}</div>
      </div>
    </div>
  );
};

export default Selector;

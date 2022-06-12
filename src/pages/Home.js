import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/Config';
import ShowGrid from '../components/Show/ShowGrid';
import ActorGrid from '../components/Actor/ActorGrid';
import { useLastQuery } from '../misc/custom-hook';
import {SearchInput,RadioInputsWrapper, SearchButtonWrapper,} from './Home.styled';
import CustomRadio from '../components/CustomRadio'

const Home = () => {

  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowSearch = searchOption === 'shows';

  const onSearch = ()=>{
    apiGet(`/search/${searchOption}?q=${input}`).then(result=>{setResults(result);});
  };

  const onInputChange = ev=>{
     setInput(ev.target.value);
  };

  const onKeyDown = ev=>{
    if(ev.keyCode===13)
    {
      onSearch();
    }
  };

  const onRadioChange = ev =>{
    setSearchOption(ev.target.value);
  }

  const renderResults = () => {

    if (results && results.length === 0)
    {
      return <div>No results</div>;
    }

    if (results && results.length > 0)
    {
      return results[0].show ? ( <ShowGrid data={results} />) : (<ActorGrid data={results} />);
    }
      
    return null;

  };


  return (
    <div>
      <MainPageLayout>
         
         <SearchInput type="text" placeholder='Search for something' onChange={onInputChange} onKeydown={onKeyDown} value={input} />
        
        <RadioInputsWrapper>
         <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
         </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>

      
        {renderResults()}

      </MainPageLayout>
    </div>
  )
}

export default Home

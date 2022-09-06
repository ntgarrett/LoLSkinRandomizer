import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import './App.css';
import { buildChampionUrl } from './api/urlBuilder';
import { getVersionNumber } from './redux/version/versionSlice';
import { getChampions } from './redux/champions/championsSlice';
import HeaderContainer from './containers/HeaderContainer';
import ChampionFilterContainer from './containers/ChampionFilterContainer';
import SmallChampionSearchResultsContainer from './containers/SmallChampionSearchResultsContainer';
import SelectedChampionContainer from './containers/SelectedChampionContainer';
import SkinSelectionListContainer from './containers/SkinSelectionListContainer';
import RandomizerButtonContainer from './containers/RandomizerButtonContainer';
import LargeChampionCardContainer from './containers/LargeChampionCardContainer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [filteredChampionList, setFilteredChampionList] = useState([]);
  const [selectedChampion, setSelectedChampion] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [skinsList, setSkinsList] = useState([]);
  const [randomizedSkin, setRandomizedSkin] = useState({});

  const { versionNumber } = useSelector((state) => state.version);
  const { allChampions } = useSelector((state) => state.champions);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  function determineIfFavorited(id) {
    return user.favoriteChampions.some(c => c.uId === id) || false;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function resetState() {
    setFilteredChampionList([]);
    setSelectedChampion({});
    setSkinsList([]);
    setRandomizedSkin({});
  }

  function determineRandomizeButtonDisabled() {
    let numberOfChampionSkins = (user.ownedSkins.filter(skin => skin.champion === selectedChampion.urlName)).length;
    let numberOfSkinsToRoll = user.includeDefaultSkins ? numberOfChampionSkins + 1 : numberOfChampionSkins;
    return numberOfSkinsToRoll < 2;
  }

  function randomizeSkinsClicked() {
    let skinChoices = user.ownedSkins.filter(skin => 
      skin.champion === selectedChampion.urlName
    );

    if (user.includeDefaultSkins) {
      skinChoices = [skinsList[0], ...skinChoices];
    }

    setRandomizedSkin(skinChoices[getRandomInt(skinChoices.length)]);
  }

  // Get patch number
  useEffect(() => {
    dispatch(getVersionNumber());
    localStorage.setItem('currentPatch', versionNumber);
    dispatch(getChampions());
  }, [dispatch, versionNumber]);

  // Reset randomized skin on champ selection change
  useEffect(() => {
    if (randomizedSkin.champion !== selectedChampion.urlName) {
      setRandomizedSkin({});
    }
  }, [randomizedSkin.champion, selectedChampion.urlName]);

  // Update skinsList when selected champion changes
  useEffect(() => {
    async function fetchChampionSkinData(championName) {
      const response = await fetch(buildChampionUrl(championName))
      .then(res => res.json())
      .then(champ => champ.data)
      .then(data => data[championName])
      .then(c => c.skins)
      .catch(err => console.log('Fetching Skins Error: ' + err));
  
      const skinData = response.map(skin => {
        return {
          id: skin.id,
          champion: championName,
          name: skin.name,
          num: skin.num
        }
      });
  
      return skinData;
    }

    if (selectedChampion.urlName) {
      fetchChampionSkinData(selectedChampion.urlName)
        .then(data => setSkinsList(data))
        .catch(err => console.log(err));
    }
  }, [selectedChampion.urlName, setSkinsList]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <HeaderContainer
          patch={localStorage.getItem('currentPatch')}
          user={user}
          dispatch={dispatch}
          setSelectedChampion={setSelectedChampion}
          resetState={resetState}
        />
        <ChampionFilterContainer
          filteredChampionList={filteredChampionList}
          setFilteredChampionList={setFilteredChampionList}
          allChampions={allChampions}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {
          filteredChampionList.length > 0 ?
          <SmallChampionSearchResultsContainer
            filteredChampionList={filteredChampionList}
            setFilteredChampionList={setFilteredChampionList}
            setSelectedChampion={setSelectedChampion}
            searchValue={searchValue}
          />
          :
          <div className='sclistempty'/>
        }
        <div className='tricolumn'>
          <SelectedChampionContainer
            name={selectedChampion.name}
            urlName={selectedChampion.urlName}
            uId={selectedChampion.uId}
            skinNum={0}
            isFavorited={determineIfFavorited(selectedChampion.uId)}
            dispatch={dispatch}
            isSkin={false}
          />
          <SkinSelectionListContainer
            user={user}
            champName={selectedChampion.urlName}
            skinsList={skinsList}
            dispatch={dispatch}
          />
          <LargeChampionCardContainer
            name={randomizedSkin.name}
            urlName={randomizedSkin.champion}
            uId={randomizedSkin.id}
            skinNum={randomizedSkin.num}
            isFavorited={false}
            dispatch={dispatch}
            setSkinsList={setSkinsList}
            isSkin={true}
            />
        </div>
        <RandomizerButtonContainer 
          handleButtonClick={randomizeSkinsClicked}
          isDisabled={determineRandomizeButtonDisabled()}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import Header from './components/Header';
import { getVersionNumber } from './redux/version/versionSlice';
import { getChampions } from './redux/champions/championsSlice';
import './App.css';

function App() {

  const {versionNumber, loading} = useSelector((state) => state.version);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVersionNumber());
    localStorage.setItem('currentPatch', versionNumber);
    dispatch(getChampions());
  }, [dispatch, versionNumber]);

  return (
    <div className="App">
      <Header patch={localStorage.getItem('currentPatch')}/>
    </div>
  );
}

export default App;

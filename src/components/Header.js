import { Typography, Tooltip } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import SideDrawerContainer from '../containers/SideDrawerContainer';

const Header = (props) => {
  const { patch, user, dispatch, setSelectedChampion, drawerOpen, setDrawerOpen, resetState } = props;
  
  return (
    <div className='header'>
      <p style={{userSelect: 'none', opacity: 0 }}>A</p>
      <Typography 
        className='headertitle'
        variant='h6'  
      >
        {`LoL Skin Randomizer - Patch `}
        <span className='headerhighlighted'>
          {patch}
        </span>
      </Typography>
      <Tooltip
        placement="left"
        title="Settings and Favorite Champions"
      >
        <KeyboardArrowLeftIcon
          fontSize="large"
          className="drawericon" 
          onClick={() => setDrawerOpen(true)}
        />
      </Tooltip>
      <SideDrawerContainer
        user={user}
        dispatch={dispatch}
        resetState={resetState}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        setSelectedChampion={setSelectedChampion}
      />
    </div>
  );
}

export default Header;
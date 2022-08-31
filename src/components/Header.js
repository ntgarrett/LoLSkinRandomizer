import { useState } from "react";
import { Typography, Drawer, Divider, Switch, Tooltip, Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import ConfirmationDialog from "./ConfirmationDialog";
import SmallChampionCardContainer from '../containers/SmallChampionCardContainer';
import { toggleUseDefaultSkins, resetAllData } from '../redux/user/actions';

const Header = (props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { patch, user, dispatch, setSelectedChampion, drawerOpen, setDrawerOpen, resetState } = props;
  
  const onClose = () => {
    dispatch(resetAllData('RESET_ALL_DATA'))
    resetState();
    setOpenDialog(false);
    setDrawerOpen(false);
  };

  return (
    <div className='header'>
      <p style={{userSelect: 'none', opacity: 0 }}>A</p>
      <Typography 
        className='headertitle'
        variant='h6'  
      >
        {`LoL Skin Randomizer - Patch ${patch}`}
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
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className='drawercontainer'>
          <span className='defaults-content'>
            <p>Include Default Skins </p>
            <Switch 
              checked={user.includeDefaultSkins}
              onChange={() => { dispatch(toggleUseDefaultSkins('TOGGLE_USE_DEFAULT_SKINS', !user.includeDefaultSkins))}}
            />
          </span>
          <Divider />
          <p className="drawer-favorite-title">Favorite Champions</p>
          <div className="drawer-favorites-container">
            <div className="drawer-favorites-scrollable">
              {/* { user.favoriteChampions.sort((a,b) => a.urlName.localeCompare(b.urlName).map())} */}
              { user.favoriteChampions.map((champ, i) => {
                  return (
                    <SmallChampionCardContainer
                      urlName={champ.urlName}
                      name={champ.name}
                      uId={champ.uId}
                      setSelectedChampion={setSelectedChampion}
                      key={i}
                      setDrawerOpen={setDrawerOpen}
                      favorited             
                    />
                  )
              })}
            </div>
          </div>
          <Divider />
          <div className="reset-container">
            <Button
              className="reset-button"
              variant="outlined"
              color="error"
              onClick={() => {
                setOpenDialog(true);
              }}
            >
              <p>RESET DATA</p>
            </Button>
          </div>
        </div>
      </Drawer>
      <ConfirmationDialog onClose={onClose} openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
}

export default Header;
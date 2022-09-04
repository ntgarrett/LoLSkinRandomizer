import { useState } from 'react';

import { toggleUseDefaultSkins, resetAllData } from '../redux/user/actions';
import SmallChampionCardContainer from './SmallChampionCardContainer';
import ConfirmationDialog from '../components/ConfirmationDialog';
import SideDrawer from '../components/SideDrawer';

const SideDrawerContainer = (props) => {
  const [openDialog, setOpenDialog] = useState(false);

  const { user, dispatch, resetState, drawerOpen, setDrawerOpen, setSelectedChampion } = props;

  const onConfirm = () => {
    dispatch(resetAllData('RESET_ALL_DATA'));
    resetState();
    setOpenDialog(false);
    setDrawerOpen(false);
  };

  const handleToggleUseDefaults = () => {
    dispatch(toggleUseDefaultSkins('TOGGLE_USE_DEFAULT_SKINS', !user.includeDefaultSkins));
  };

  const handleResetClicked = () => {
    setOpenDialog(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }

  function sortAlphabetically(a,b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

  const FavoritesList = () => {
    return (
      user.favoriteChampions.sort(sortAlphabetically).map((champ, i) => {
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
      })
    );
  };

  return (
    <>
      <SideDrawer
        user={user}
        drawerOpen={drawerOpen}
        favoritesList={FavoritesList}
        handleDrawerClose={handleDrawerClose}
        handleResetClicked={handleResetClicked}
        handleToggleUseDefaults={handleToggleUseDefaults}
      />
      <ConfirmationDialog onConfirm={onConfirm} openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </>
  );
};

export default SideDrawerContainer;
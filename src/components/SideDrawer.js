import { Drawer, Divider, Switch, Button, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const SideDrawer = (props) => {
  const { user, drawerOpen, favoritesList, handleDrawerClose, handleResetClicked, handleToggleUseDefaults, emptyFavorites } = props;

  const TooltipText = () => {
    return (
      <p className='tooltiptext'>
        Created by 
        <span>{` Turbo Gnocci #NA`}</span>
      </p>
    )
  };

  return (
    <Drawer
      anchor='right'
      open={drawerOpen}
      onClose={handleDrawerClose}
    >
      <div className='drawercontainer'>
        <span className='defaults-content'>
          <p>Include Default Skins </p>
          <Switch
            color='secondary'
            checked={user.includeDefaultSkins}
            onChange={handleToggleUseDefaults}
          />
        </span>
        <Divider />
        <p className="drawer-favorite-title">Favorite Champions</p>
        {user.favoriteChampions.length ? favoritesList() : emptyFavorites()}
        <Divider />
        <div className="sidebar-bottom-container">
          <Tooltip
            placement="top"
            title={<TooltipText />}
          >
            <InfoIcon />
          </Tooltip>
          <Button
            className="reset-button"
            variant="outlined"
            color="error"
            onClick={handleResetClicked}
          >
            <p>RESET DATA</p>
          </Button>
          <InfoIcon sx={{ opacity: 0 }} />
        </div>
      </div>
    </Drawer>
  );
}

export default SideDrawer;
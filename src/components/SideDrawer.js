import { Drawer, Divider, Switch, Button } from '@mui/material';

const SideDrawer = (props) => {
  const { user, drawerOpen, favoritesList, handleDrawerClose, handleResetClicked, handleToggleUseDefaults } = props;

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
            checked={user.includeDefaultSkins}
            onChange={handleToggleUseDefaults}
          />
        </span>
        <Divider />
        <p className="drawer-favorite-title">Favorite Champions</p>
        <div className="drawer-favorites-container">
          <div className="drawer-favorites-scrollable">
            {favoritesList()}
          </div>
        </div>
        <Divider />
        <div className="reset-container">
          <Button
            className="reset-button"
            variant="outlined"
            color="error"
            onClick={handleResetClicked}
          >
            <p>RESET DATA</p>
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default SideDrawer;
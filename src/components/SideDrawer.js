import { Drawer, Divider, Switch, Button, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

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
            color='secondary'
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
        <div className="sidebar-bottom-container">
          <Tooltip
            placement="top"
            title="Created by Turbo Gnocci #NA"
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
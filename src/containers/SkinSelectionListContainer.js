import { Button, Tooltip } from '@mui/material';

import { buildSkinLoadingImageUrl } from '../api/urlBuilder';
import { bulkAddSkins, bulkRemoveSkins } from '../redux/user/actions';
import SkinCardContainer from '../containers/SkinCardContainer';

const SkinSelectionListContainer = (props) => {

  const { user, champName, skinsList, dispatch } = props;

  function ownsAllSkins() {
    const nonDefaultSkins = skinsList.slice(1);
    if (nonDefaultSkins.every(skin => user.ownedSkins.some(s => s.id === skin.id))) {
      return true;
    }
    return false;
  }

  function toggleAllSkins() {
    if (ownsAllSkins()) {
      dispatch(bulkRemoveSkins('BULK_REMOVE_OWNED_SKINS', champName));
    } else {
      const nonDefaultSkins = skinsList.slice(1);
      let skinsOwnedForThisChamp = user.ownedSkins.filter(skin => skin.champion === champName);
      if (skinsOwnedForThisChamp.length) {
        let skinsToAdd = nonDefaultSkins.filter(skin => !skinsOwnedForThisChamp.some(s => s.id === skin.id));
        dispatch(bulkAddSkins('BULK_ADD_OWNED_SKINS', skinsToAdd));
      } else {
        dispatch(bulkAddSkins('BULK_ADD_OWNED_SKINS', nonDefaultSkins));
      }
    }
  }

  const SkinCardList = () => {
    return (
      <>
        <div className="skinlistcontainer">
          <div className="skinlistscrollable largecardborder">
            {
              champName === skinsList[0].champion && 
              skinsList.slice(1).map((skin, i) => {
                return (
                  <SkinCardContainer 
                    urlName={buildSkinLoadingImageUrl(champName, skin.num)}
                    champName={champName}
                    name={skin.name}
                    num={skin.num}
                    id={skin.id}
                    user={user}
                    dispatch={dispatch}
                    key={i}
                  />
                )
              })
            }
          </div>
          <div className="slcontainertext">
            <p className='invis'>Secret123</p>
            <h3>Skin Selection</h3>
            <Tooltip
              placement="bottom"
              title="Select or deselect all skins"
            >
              <Button 
                className="slcontainerbtn"
                onClick={toggleAllSkins}
              >
                All
              </Button>
            </Tooltip>
          </div>
        </div>
      </>
    );
  }
  
  const EmptyContainer = () => {
    return (
      <div className="skinlistcontainer">
        <div className="skinlistscrollable emptyskinlistmessage largecardborder">
          <p>Select a Champion</p>
        </div>
        <h3>Skin Selection</h3>
      </div>
    );
  }

  return (
    skinsList.length ? <SkinCardList /> : <EmptyContainer />
  );
};

export default SkinSelectionListContainer;
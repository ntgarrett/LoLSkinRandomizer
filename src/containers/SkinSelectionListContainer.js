import { buildSkinLoadingImageUrl } from "../api/urlBuilder";
import SkinCardContainer from "../containers/SkinCardContainer";

const SkinSelectionListContainer = (props) => {
  const { user, champName, skinsList, dispatch } = props;

  function shouldRenderSkinList() {
    if (!skinsList.length) {
      return false;
    }
    else {
      return true;
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
          <h3>Skin Selection</h3>
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
    shouldRenderSkinList() ? <SkinCardList /> : <EmptyContainer />
  );
};

export default SkinSelectionListContainer;
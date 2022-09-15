// import { useEffect } from "react";

import SelectedChampion from '../components/SelectedChampion'
// import { buildChampionUrl } from "../api/urlBuilder";

const SelectedChampionContainer = props => {
  const { name, urlName, uId, skinNum, isFavorited, dispatch, isSkin } = props

  // async function fetchChampionSkinData(championName) {
  //   const response = await fetch(buildChampionUrl(championName))
  //   .then(res => res.json())
  //   .then(champ => champ.data)
  //   .then(data => data[championName])
  //   .then(c => c.skins)
  //   .catch(err => console.log('Fetching Skins Error: ' + err));

  //   const skinData = response.map(skin => {
  //     return {
  //       id: skin.id,
  //       champion: championName,
  //       name: skin.name,
  //       num: skin.num
  //     }
  //   });

  //   return skinData;
  // }

  // useEffect(() => {
  //   if (props.name) {
  //     if (skinsList.length) {
  //       if (skinsList[0].champion === urlName) {

  //       }
  //       else {
  //         fetchChampionSkinData(urlName)
  //         .then(data => setSkinsList(data))
  //         .catch(err => console.log(err));
  //       }
  //     } else {
  //       fetchChampionSkinData(urlName)
  //       .then(data => setSkinsList(data))
  //       .catch(err => console.log(err));
  //     }
  //   }
  // }, [props.name, urlName, skinsList, setSkinsList]);

  return (
    <SelectedChampion
      name={name}
      urlName={urlName}
      uId={uId}
      skinNum={skinNum}
      isFavorited={isFavorited}
      dispatch={dispatch}
      isSkin={isSkin}
    />
  )
}

export default SelectedChampionContainer

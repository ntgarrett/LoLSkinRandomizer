import { useState, useEffect } from 'react'

import { addOwnedSkin, removeOwnedSkin } from '../redux/user/actions'
import SkinCard from '../components/SkinCard'

const SkinCardContainer = props => {
  const [owned, setOwned] = useState(false)

  useEffect(() => {
    setOwned(props.user.ownedSkins.some(s => s.id === props.id))
  }, [props.id, props.user.ownedSkins])

  const handleSkinClicked = () => {
    const skinObject = {
      id: props.id,
      champion: props.champName,
      name: props.name,
      num: props.num,
    }

    if (owned) {
      props.dispatch(removeOwnedSkin('REMOVE_OWNED_SKIN', skinObject))
      setOwned(false)
    } else {
      props.dispatch(addOwnedSkin('ADD_OWNED_SKIN', skinObject))
      setOwned(true)
    }
  }

  function determineClassNames() {
    if (owned) {
      return 'skincard ownedskin'
    } else {
      return 'skincard unownedskin'
    }
  }

  return (
    <SkinCard
      urlName={props.urlName}
      name={props.name}
      id={props.id}
      owned={owned}
      handleSkinClicked={handleSkinClicked}
      determineClassNames={determineClassNames}
    />
  )
}

export default SkinCardContainer

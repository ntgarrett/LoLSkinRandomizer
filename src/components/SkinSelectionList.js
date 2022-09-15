import { Button, Tooltip } from '@mui/material'

const SkinSelectionList = props => {
  const { skinCardList, toggleAllSkins } = props

  return (
    <div className="skinlistcontainer">
      <div className="skinlistscrollable largecardborder">{skinCardList()}</div>
      <div className="slcontainertext">
        <Button style={{ opacity: '0' }} disabled>
          All
        </Button>
        <h3>Skin Selection</h3>
        <Tooltip placement="bottom" title="Select or deselect all skins">
          <Button color="secondary" onClick={toggleAllSkins}>
            All
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}

export default SkinSelectionList

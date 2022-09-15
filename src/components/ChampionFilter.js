import { TextField, Box, Typography, ButtonBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const ChampionFilter = props => {
  return (
    <div className="filterbar">
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <ButtonBase
          onClick={props.onSubmitSearch}
          className="searchicon"
          disabled={props.searchValue.length === 0}
        >
          <SearchIcon sx={{ mr: 1, my: 0.5 }} />
        </ButtonBase>
        <TextField
          color="secondary"
          id="champion-search"
          label="Search champions"
          variant="standard"
          onChange={props.onChange}
          onKeyDown={props.handleKeyPress}
        />
      </Box>
      <div>
        <Typography></Typography>
      </div>
    </div>
  )
}

export default ChampionFilter

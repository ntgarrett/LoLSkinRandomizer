import { Typography } from '@mui/material';

const Header = ({ patch }) => {

  return (
    <div className='header'>
      <Typography 
        className='headertitle'
        variant='h5'  
      >
        LoL Skin Randomizer - Patch {patch}
      </Typography>
    </div>
  );
}

export default Header;
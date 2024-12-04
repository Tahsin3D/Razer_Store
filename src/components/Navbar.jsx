import { Stack, Typography } from '@mui/material';
import logo from '../assets/logo.png'

const Navbar = () => {
  const links = ['Home', 'Hardware', 'Software', 'Community', 'Store', 'Support'];
  return (
    <Stack sx={{position: 'absolute', p: '20px'}}>
      <img src={logo} alt="logo" style={{width: '100px'}}/>
      <Stack>
        {links.map(element => (
          <Typography key={element}>{element}</Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;
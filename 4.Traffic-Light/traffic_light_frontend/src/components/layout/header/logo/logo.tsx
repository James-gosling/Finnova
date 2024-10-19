import { Link } from 'react-router-dom';
import './logo.module.scss';

import { Image,Box, Stack } from '@chakra-ui/react'


function Logo() {
  return (
    <Link to="/">
        <Stack direction='row'>
          <Image
            boxSize='200px'
            objectFit='cover'
            src='IMAGES/logo1.png'
            alt='logo'
            marginTop = "-75px"
            marginLeft= "-30px"
            position = "fixed"

          />
  
        </Stack>
    </Link>
  );
}

export { Logo };


import React from 'react';
import { Box } from '@mui/system';
// import { usetheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { tokens } from "../../theme";
import { useTheme } from '@mui/material/styles';

const Header = ({title, subTitile}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

     return (
        <>
        <Box mb="30px">
            <Typography varient="h2" 
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{m:"0 0 5px 0"}}>
                {title}

            </Typography>
            <Typography varient="h5" color={colors.greenAccent[400]}>
                {subTitile}
            </Typography>
        </Box>
        </>
    )
}

export default Header;
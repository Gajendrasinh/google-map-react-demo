import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

let Footer = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.maybank2u.com.my/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default Footer;
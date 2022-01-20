import { Typography } from '@material-ui/core';
import React from 'react'
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>
           <div className='footer_left'>
                <Typography className='footer_name'>TINCHLIK</Typography>
           </div>
           <div className='footer_right'>
                <Typography className='footer_copyright'>
                      TINCHLIK <a href='/' target='_blank'>MERN Developer</a>
                      <br/>
                      Clone idea from
                      <a href="https://themeforest.net/user/taronline" target="_blank">Travonline</a>
                </Typography>
           </div>
        </div>
    )
}

export default Footer

import React from 'react';
import Link from 'next/link';
import Head from '../components/Head';
import Messages from "../components/Messages";
import Socials from "../components/Socials";
import { createGlobalStyle } from 'styled-components';
import Facebook from '../components/Facebook';

const BorderStyle = createGlobalStyle`
  #top, #bottom, #left, #right {
	  background: #a5ebff;
	  position: fixed;
	}
	#left, #right {
		top: 0; bottom: 0;
		width: 15px;
	}
	#top, #bottom {
		left: 0; right: 0;
		height: 15px;
	}
	#left {left: 0;}
	#right {right: 0;}
	#top {top: 0;}
	#bottom {bottom: 0;}

	@media (max-width: 768px) {
		#top, #bottom, #left, #right {
	  	display: none;
		}
  }
`;

const Home = () => (
  <React.Fragment>
		<div id="fb-root"></div>
    <BorderStyle/>
    <div id="left"></div>
    <div id="right"></div>
    <div id="top"></div>
    <div id="bottom"></div>
    <Head title='Biscui.Tech'/>
    <Socials/>
    <Messages/>
		<Facebook/>
  </React.Fragment>
)

export default Home

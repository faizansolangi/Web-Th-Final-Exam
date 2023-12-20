import React from 'react';
import Button from 'react-bootstrap/Button';
import Image1 from '../assets/images/rectangle51.png';
import Image2 from '../assets/images/rectangle52.png';
import './Section2.css'; // Import your CSS file for styling

function Section2() {
  return (
    <>
      <div className='container' style={{ marginTop: '100px' }}>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <h1> Create your own Web3 Masterpiece </h1>
            <p style={{ color: '#979797' }}>
              Most entrepreneurs want to create their own web3 sites, unfortunately, they don't know much about creating one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving their favorite creation tools and by simple drag and drop functionality.
            </p>
            <Button style={{ backgroundColor: '#6F348E', color: 'white', borderRadius: '12px' }}> Start building </Button>
          </div>

          <div className='col-lg-8 col-md-6'>
            <img src={Image1} alt="" className="responsive-image" />
          </div>
        </div>

        <div className='row' style={{ marginTop: '100px' }}>
          <div className='col-lg-8 col-md-6'>
            <img src={Image2} alt="" className="responsive-image" />
          </div>

          <div className='col-lg-3 col-md-6'>
            <h1> Can be changed to customizable ready-made web3 dapps templates. </h1>
            <p style={{ color: '#18ADE4', marginTop: '30px' }}> <b>01</b> <span style={{ color: '#979797' }}> NFT(ERC721). </span> </p>
            <p style={{ color: '#18ADE4' }}> <b>02</b> <span style={{ color: '#979797' }}> DEFI </span> </p>
            <p style={{ color: '#18ADE4' }}> <b>03</b> <span style={{ color: '#979797' }}> Smart Contracts </span> </p>
            <p style={{ color: '#18ADE4' }}> <b>04</b> <span style={{ color: '#979797' }}> GameFi </span> </p>
            <p style={{ color: '#18ADE4' }}> <b>05</b> <span style={{ color: '#979797' }}> Metaverse </span> </p>
            <Button style={{ backgroundColor: '#6F348E', color: 'white', borderRadius: '12px', outlineColor: '#6F348E' }}> Start building </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;

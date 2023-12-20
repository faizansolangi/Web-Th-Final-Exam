import React from 'react';
import PlayBtn from '../assets/images/playbtn.png';
import HeroImage from '../assets/images/mockup.png';
import GroupImage150 from '../assets/images/group150.png';
import GroupImage151 from '../assets/images/group151.png';
import GroupImage152 from '../assets/images/group152.png';
import GroupImage153 from '../assets/images/group153.png';
import GroupImage154 from '../assets/images/group154.png';
import GroupImage155 from '../assets/images/group155.png';
import GroupImage156 from '../assets/images/group156.png';
function HeroSection() {
  return (
    <>
   <div style={{backgroundColor:'#110915', textAlign:'center', paddingTop:'50px'}}>
        <h1 style={{color:'#E7E6E7'}}> Web3Makr Redefining </h1>
        <h1 style={{color:'#E7E6E7'}}> How you Create </h1>
        <p style={{color:'#FFFFFF', marginTop:'30px'}}> Unlock the blockchain potential to create </p>
        <p style={{color:'#FFFFFF', lineBreak:'0px'}}> Web3 Applications </p>

        <div style={{marginTop:'30px'}}>
        <img src={PlayBtn} alt="playbotton" />
          <a href="" target="_blank" rel="screen">
            <img src={HeroImage} alt="" style={{width:'100%'}}/>
          </a>
        </div>
   </div>

    <div style={{marginTop:'30px', textAlign:'center'}}>
        <div className='row'>
            <div className='col col-sm-10 col-md-6 col-lg-8'>
                <img src={GroupImage150} alt="" style={{width:'11%', marginLeft:'4px'}}/>
                <img src={GroupImage151} alt="" style={{width:'11%', marginLeft:'4px'}}/>
                <img src={GroupImage152} alt="" style={{width:'11%', marginLeft:'4px'}}/>
                <img src={GroupImage153} alt="" style={{width:'11%', marginLeft:'4px'}}/>
                <img src={GroupImage154} alt="" style={{width:'11%', marginLeft:'4px'}}/>
                <img src={GroupImage155} alt="" style={{width:'11%', marginLeft:'4px'}}/>
                <img src={GroupImage156} alt="" style={{width:'11%', marginLeft:'4px'}}/>
            </div>
        </div>
    </div>
    </>
  );
}

export default HeroSection;

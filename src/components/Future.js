import React from 'react'
import './future.css'
import metamask_img from '../assets/images/metamask_fox1.png'
import nft_img from '../assets/images/nftsearch1.png'
import moralis_img from '../assets/images/moralis_logo1.png'
import solidity_img from '../assets/images/solidity1.png'
import ether_img from '../assets/images/ether1.png'
import hardhat_img from '../assets/images/hardhat1.png'

function Future() {
    return (
        <div className='outer_container'>
            <div className="no_code_container">
                <div className='no_code_top_section'>
                    <div className='no_code_heading'>

                        The Future of Web3 NoCode
                    </div>
                    <div className='orange_bg'></div>
                    <div className='no_code_subheading'>
                        Web3Makr allows you to incorporate top ranked blockchain platforms into your work through the drag and drop feature.
                    </div>
                </div>
                <div className='no_code_bottom_section'>
                    <div className='no_code_bottom_section_left'>
                        <ul>
                            <li>Multi-chain</li>
                            <li>Dashboard</li>
                            <li>Tool</li>
                        </ul>
                    </div>
                    <div className='no_code_bottom_section_right'>
                        <div className='no_code_images_container'>

                            {/* metamask */}
                            <div className='no_code_img_and_text_container'>
                                <div className='no_code_metamask_outer_circle'>
                                    <div className='no_code_metamask_inner_circle'>
                                        <img src={metamask_img} alt="metamask" />
                                    </div>
                                </div>
                                <div className='no_code_below_img_text'>Metamask Support</div>
                            </div>

                            {/* nft */}
                            <div className='no_code_img_and_text_container'>
                                <div className='no_code_nft_outer_circle'>
                                    <div className='no_code_metamask_inner_circle'>
                                        <img class="circle-image" src={nft_img} alt="metamask" />
                                    </div>
                                </div>
                                <div className='no_code_below_img_text'>NFT Search</div>
                            </div>

                            {/* Moralis Integration */}
                            <div className='no_code_img_and_text_container'>
                                <div className='no_code_moralis_outer_circle'>
                                    <div className='no_code_metamask_inner_circle'>
                                        <img class="circle-image" src={moralis_img} alt="moralis_img" />
                                    </div>
                                </div>
                                <div className='no_code_below_img_text'>Moralis Integration</div>
                            </div>

                        </div>
                        <div className='no_code_images_container'>

                            {/* solidity_img */}
                            <div className='no_code_img_and_text_container'>
                                <div className='no_code_solidity_outer_circle'>
                                    <div className='no_code_metamask_inner_circle'>
                                        <img src={solidity_img} alt="solidity_img" />
                                    </div>
                                </div>
                                <div className='no_code_below_img_text'>Solidity</div>
                            </div>

                            {/* ether_img */}
                            <div className='no_code_img_and_text_container'>
                                <div className='no_code_outer_circle'>
                                    <div className='no_code_ether_outer_circle'>
                                        <img class="circle-image" src={ether_img} alt="ether_img" />
                                    </div>
                                </div>
                                <div className='no_code_below_img_text'>Ether.js</div>
                            </div>

                            {/* hardhat_img */}
                            <div className='no_code_img_and_text_container'>
                                <div className='no_code_hardhat_outer_circle'>
                                    <div className='no_code_metamask_inner_circle'>
                                        <img class="circle-image" src={hardhat_img} alt="hardhat_img" />
                                    </div>
                                </div>
                                <div className='no_code_below_img_text'>Hardhat</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Future;
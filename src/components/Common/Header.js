import React from 'react';
import SystemLogo from './../../assets/netchex_logo.png';
const Header = () => {
    return (
        <header style={{ backgroundColor: '#17504A', verticalAlign: 'middle', padding: '7px' }}>            
                <div className="form-inline">
                    <div className="form-group">
                        <div className="col-sm-3">
                        <img className='p-1' src={SystemLogo} alt='Smiley face' height='45' width='45' />
                        </div>
                        <div className="col-sm-9 fontWhite fontsize25 applicationLogoBorder"> Company Setup </div>
                    </div>
                </div>            
        </header>
    );
};

export default Header;
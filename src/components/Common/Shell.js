import React from 'react';
import { NotificationContainer } from 'react-notifications';
import SystemLogo from './../../assets/netchex_logo.png';
import { Container, Row, Col } from 'reactstrap';
let headerMenu = '';

export default class Shell extends React.Component {
  render() {  

    headerMenu = (
        <div>          
    <header className='menu' style={{ backgroundColor: '#17504A', verticalAlign: 'middle', padding: '7px' }}>
                <div>
                <ul className='slds-list--horizontal navbar-list viewList'>
                 <li className='slds-list__item applicationName'>
                     
                      <a href='/dashboard'>
                          <img className='applicationLogo' src={ SystemLogo } alt='Smiley face' height='45' width='45' />                            
                      </a>       
                                                                                   
                  </li>
                  <li style={{ }}>                    
                       <div style={{marginLeft: '9px',fontSize: '23px'}}>   Company Setup </div>
                  </li>                                 
                </ul>
            </div>
        </header>
</div>

      
      )
    
    return (
      <div id="ShellNode" className="">                    
          { this.props.children }
      </div>
    );
  }
}
import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
      }
    
      toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
      }
    

    render() {
    console.log( 'isOpened', this.state.isOpened ); 
    let show = this.state.isOpened ? 'show' : '';
      return (
          <div className = 'container'>
            <div id ='touch-menu' onClick={this.toggleState.bind(this)}>Menu</div>
            <nav className = {`nav ${show}` }>
                <ul>
                    <li><a href="#">Меню 1</a></li>
                    <li><a href="#">Меню 2</a></li>
                    <li><a href="#">Меню 3</a></li>
                    <li><a href="#">Меню 4</a></li>
                    <li><a href="#">Меню 5</a></li>
                </ul>
            </nav>
        </div>
      );
    }
  }
  
  export default Menu;
import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Layout.module.css'
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showsideDrawer: false
  }
  sideDrawerCloseHandler = () => {
    this.setState({showsideDrawer: false})
  }
  sideDrawerToggleHandler = () => {
    this.setState( (prevState) => {
      return {showsideDrawer: !prevState.showsideDrawer}
    })
  }
  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showsideDrawer} closed={this.sideDrawerCloseHandler}/>
          <main className={classes.Content}>
            { this.props.children }
          </main>
      </Aux>
    ) 
  }
} 

export default Layout;
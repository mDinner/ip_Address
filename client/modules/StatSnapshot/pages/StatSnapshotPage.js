import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './../../App/App.css';

import Axios from 'axios';

class StatSnapshotPage extends Component {

  constructor() {
    super();
    this.state = {
      firstIpPing: true,
      ipAddr: 'waiting...',
    }
  }

  ipAddressInit() {

    if (this.state.firstIpPing) {
      let ipify = Axios.get('https://api.ipify.org/?format=json')
      let ipRequest = ipify.then((response) => {

        // calls our render() function after state gets updated
        this.setState({
          firstIpPing: false,
          ipAddr: response.data.ip
        })
      })
    }

  }


  render() {

    this.ipAddressInit()

    return (
      <div className={styles.container}>
        Hello!!! 
        {this.state.ipAddr}
      </div>
    );
  }
}

export default connect()(StatSnapshotPage);
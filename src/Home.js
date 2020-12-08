//import statements
import React from 'react';
import {Cards, LineChartExample} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import AlertBox from './components/ui/AlertBox';
import { bake_cookie, read_cookie } from 'sfcookies';
import logoImage from './images/logo.png';
import 'dont-sniff-mimetype';

// code to fix owasp alerts
const nosniff = require('dont-sniff-mimetype');
nosniff();


//creates cookie
const cookie_key = 'cook';
bake_cookie(cookie_key, 'test');
read_cookie(cookie_key);




class Home extends React.Component {
  state = {
    data: {}, 
  }


  // gets data from api
  async componentDidMount () {
    const data = await fetchData();
    this.setState({data});
  }




//renders alert, cards, and chart
  render() {
      const { data } = this.state;
      
      return (

          <div className={styles.container} >
            <img src={logoImage} alt="logo"/>
              <AlertBox />
              <h3>COVID-19 Totals Since March</h3>
              <Cards data={data}/> 
              <h3>End of Month Totals</h3>  
			        <LineChartExample />
          </div>

      )
  }
}

export default Home;
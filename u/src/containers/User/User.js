import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import classes from './User.css';
import { BottleQuery } from '../../queries/queries';
import bottleImg from '../../assets/images/bottle.jpg';
class User extends Component {
  ShowAllBottles() {
    const data = this.props.data;
    if(data.loading) {
      return (<div>Loading..</div>)
    }else {
      return data.bottles.map(bottle=>{
        return(   
          <div className={classes.productcard} key={bottle.id} style={{height:'30px'}}>
              <div className={classes.productimage}>
                  <img src={bottleImg} />
                  
              </div>
              <div className={classes.productinfo}>
                  <h5>{bottle.title}</h5>
                  <h6>₹{bottle.price}</h6><button className={classes.buynow}>Buy Now</button>
              </div>
           
          </div>
          
        )
      });
    }
  }
  render() {
    console.log(this.props);
    return (
    <section className={classes.products}>
    {this.ShowAllBottles()}
    </section>
    );
  }
}

export default graphql(BottleQuery)(User);

/*
  <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
*/



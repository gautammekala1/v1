import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import { graphql } from 'react-apollo';
import classes from './Bottles.css';
import { BottleQuery } from '../../queries/queries';

class Bottles extends Component {
  displayBottles() {
    const data = this.props.data;
    if(data.loading) {
      return (<div>Loading..</div>)
    }else {
      return data.bottles.map(bottle=>{
        return(
            <div className={classes.Row} key={bottle.id}>
                <div className={classes.Cell}>{bottle.title}</div>
                <div className={classes.Cell}>{bottle.quantity}</div>
                <div className={classes.Cell}>₹{bottle.price}</div>
            </div>
    
        )
      });
    }
  }
  render() {
    console.log(this.props);
    return (
        <div className={classes.Table}>
            <div className={classes.Title}>
                <p>Bottles</p>
            </div>
            <div className={classes.Heading}>
                <div className={classes.Cell}>
                    <p>title</p>
                </div>
                <div className={classes.Cell}>
                    <p>Avaliabe quantity</p>
                </div>
                <div className={classes.Cell}>
                    <p>Price</p>
                </div>
            </div>
    
           {this.displayBottles()}
     
        </div>

    );
  }
}

export default graphql(BottleQuery)(Bottles);

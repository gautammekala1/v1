import React, { Component } from 'react';
import classes from './Admin.css';
import { graphql } from 'react-apollo';
import Bottles from '../Bottles/Bottles';
import { addBottleMutation,BottleQuery } from '../../queries/queries';

class Admin extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            price:0,
            quantity:0
        };
    }
    submitForm(e){
        e.preventDefault()
    
        this.props.addBottleMutation({
            variables: {
                title: this.state.title,
                price: parseFloat(this.state.price),
                quantity: parseInt(this.state.quantity)
            },
             refetchQueries: [{ query: BottleQuery }]
        });
    }

    render(){
        return(
            <div className={classes.addbottle}>
                <form onSubmit={ this.submitForm.bind(this) } >
                    <div className={classes.field}>
                        <label>Bottel Title:</label>
                        <input type="text" onChange={ (e) => this.setState({ title: e.target.value }) } />
                    </div>
                    <div className={classes.field}>
                        <label>Price :</label>
                        <input type="number" onChange={ (e) => this.setState({ price: e.target.value }) } />
                    </div>
                    <div className={classes.field}>
                        <label>Quality :</label>
                        <input type="number" onChange={ (e) => this.setState({ quantity: e.target.value }) } />
                    </div>
                    <button>+</button>
                </form>
                <Bottles/>
            </div>
        );
    }

}

export default graphql(addBottleMutation, {name: "addBottleMutation" })(Admin);
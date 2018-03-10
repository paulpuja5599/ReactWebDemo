import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import {getProperties} from '../Logic/requestAPI';

const styles={
  property : {
    width: '50%',
    padding: 50,
    maxHeight: 200
  }
}
export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      properties : []
    }
  }

  renderProperties = () => {
    getProperties().then(res=>{
      console.log(res);
      this.setState({properties:res.data.property_data});
    }).catch(err=>{
      console.log(err);
    })
  }

  componentDidMount(){
    this.renderProperties();
  }

  render(){
    return(
      <div>
        <Grid container>
          {
            this.state.properties.map(property=>{
              return (
                <Grid key={property.id} item xs={12} sm={6}>
                  <Grid>
                    <img style={styles.property} src={property.picture_large} alt="property"/>
                    <p>{property.title}</p>
                    <p>{property.address}</p>
                  </Grid>

                </Grid>
              )
            })
          }

        </Grid>
      </div>
    )
  }
}

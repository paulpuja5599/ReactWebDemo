import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import {getProperties} from '../Logic/requestAPI';
import Details from './Details';
import {setSelectedProperty} from '../Logic/selectedPropertyDetails';

const styles={
  property : {
    width: '50%',
    padding: 50,
    maxHeight: 200
  },
  prop : {
    fontSize: 15
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

  showDetails(index){
    var property = this.state.properties[index];
    setSelectedProperty(property);
    this.props.history.push("/details");
  }

  render(){
    return(
      <div>
        <Grid container>
          {
            this.state.properties.map((property, index)=>{
              return (
                <Grid key={property.id} item xs={12} sm={6} style={styles.prop} onClick={() => this.showDetails(index)}>
                  <img style={styles.property} src={property.picture_large} alt="property"/>
				          <p>{property.title}</p>
                  <p>{property.address}</p>
                </Grid>
              )
            }
          )}

          <Grid item xs={6}>
          One
          </Grid>
          <Grid item xs={6}>
          Two
          </Grid>
          <Grid item xs={6}>
          Three
          </Grid>
          <Grid item xs={6}>
          Four
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>

      </div>
    )
  }
}

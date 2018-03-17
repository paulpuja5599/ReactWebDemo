import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import {getSelectedProperty} from '../Logic/selectedPropertyDetails';

const styles = {
  property : {
    paddingTop:30,
    paddingLeft:20
  },
  prop : {
    textAlign: 'Left',
    fontSize: 15,
    paddingLeft: 30
  },
  prop1 : {
    width:'15%',
    Height:'15%'
  },
  prop2 : {
    width: '100%',
    height: '100%'
  }
}

export default class Details extends Component{


  render(){
    var selectedProperty = getSelectedProperty();

    return(
      <div>
        <Grid container style={styles.property}>

          <Grid item xs={12} sm={6}>
            <img style={styles.prop2} src={selectedProperty.picture_large} alt="property"/>
          </Grid>

          <Grid item xs={12} sm={6} style={styles.prop}>

            <img style={styles.prop1} src={selectedProperty.manager_img} alt="manager"/>
            <p><b>Manager Name:&nbsp;&nbsp;</b>{selectedProperty.manager_name}</p>
            <p><b>Title:&nbsp;&nbsp;</b>{selectedProperty.title}</p>
            <p><b>Address:&nbsp;&nbsp;</b>{selectedProperty.address}</p>
            <p><b>City:&nbsp;&nbsp;</b>{selectedProperty.city}</p>
            <p><b>Type:&nbsp;&nbsp;</b>{selectedProperty.type}</p>
            <p><b>Bedroom:&nbsp;&nbsp;</b>{selectedProperty.floorplan.bedrooms}</p>
            <p><b>Bathroom:&nbsp;&nbsp;</b>{selectedProperty.floorplan.bathrooms}</p>
            <p><b>Area Covered:&nbsp;&nbsp;</b>{selectedProperty.floorplan.size}</p>
            <p><b>Rent:&nbsp;&nbsp;</b>{selectedProperty.floorplan.rent}</p>
            <p><b>Dog:&nbsp;&nbsp;</b>{selectedProperty.floorplan.dog ? 'Allowed' : 'Not Allowed'}</p>
            <p><b>Cat:&nbsp;&nbsp;</b>{selectedProperty.floorplan.cat ? 'Allowed' : 'Not Allowed'}</p>
            <p><b>Eligible For Sale:&nbsp;&nbsp;</b>{selectedProperty.for_sale ? 'Yes' : 'No'}</p>

          </Grid>
        </Grid>
      </div>

    );
  }
}

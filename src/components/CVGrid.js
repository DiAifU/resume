import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

const CVGrid = ({ children, className }) => (
    <Grid container divided relaxed padded className={className}>
    {children}
    </Grid>
);

CVGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};




export default CVGrid;

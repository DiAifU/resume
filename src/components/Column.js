import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import ColumnSection from "./ColumnSection";

const Column = ({ children, sections, className, width, headerType }) => (
  <Grid.Column width={width} className={className} stretched>
    {children}
    {sections &&
      sections.map(s => (
        <ColumnSection
          key={s.title}
          headerType={headerType}
          {...s}
        />
      ))}
  </Grid.Column>
);

Column.propTypes = {
  children: PropTypes.node,
  sections: PropTypes.array,
  width: PropTypes.number,
  headerType: PropTypes.string,
  className: PropTypes.string,
};

export default Column;

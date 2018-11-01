import React from "react";
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Container, Icon } from "semantic-ui-react";
import CVGrid from "../components/CVGrid";
import Column from "../components/Column";
import { leftColumnSections, rightColumnSections } from "../data";

const Resume = () => (
  <Container>
    <div className="cv_print_container" style={{ textAlign: "center" }}>
      <br />
      <a onClick={window.print} href="#">
        <Icon name="print" size="big" />
        This Resume is available in printable version to reduce its environmental impact
      </a>
      <br />
    </div>
    <CVGrid>
      <Column width={5} sections={leftColumnSections} className="cv_left_col" />
      <Column width={11} sections={rightColumnSections} className="cv_right_col" />
    </CVGrid>
  </Container>
);

export default Resume;

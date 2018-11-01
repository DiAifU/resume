import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Header, Icon, Image, Grid } from "semantic-ui-react";

const reduceContent = (content, headerType) =>
  content.reduce(
    (acc, c) => (
      <Fragment>
        {acc}
        {typeof c === "string" ? <p>{c}</p> : Array.isArray(c) ? (
          reduceContent(c, `h${parseInt(headerType[1]) + 1}`)
        ) : (
          <ColumnSection {...c} headerType={headerType} />
        )}
      </Fragment>
    ),
    null
  );

const ColumnSection = ({ title, subtitle, icon, content, headerType, centered, image }) => {
  const childHeaderType = `h${parseInt(headerType[1]) + 1}`;
  const formattedContent = content && (Array.isArray(content) ? (
    reduceContent(content, childHeaderType)
  ) : typeof content === "object" ? (
    <ColumnSection {...content} headerType={childHeaderType} />
  ) : (
    <p>{content}</p>
  ));

  return (
    <Grid.Row style={centered ? { textAlign: 'center' } : undefined}>
      {(title || icon || image) && (
        <Fragment>
          {centered && icon && <Icon name={icon} size="huge" />}
          {image && (typeof image === "object" ? <Image {...image} /> : <Image src={image} circular centered={centered} size="small" />)}
          <Header as={headerType}>
            {!centered && icon && <Icon name={icon} size="mini" />}
            {title}
            {subtitle && <Header.Subheader>{subtitle}</Header.Subheader>}
          </Header>
        </Fragment>
      )}
      {formattedContent}
    </Grid.Row>
  );
};

ColumnSection.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  headerType: PropTypes.string,
};

ColumnSection.defaultProps = {
  title: null,
  icon: null,
  image: null,
  content: null,
  headerType: "h3",
};

export default ColumnSection;

import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";
import { findIndex } from "lodash";
import useStyles from "./style";
import NavLabel from "../../components/nav-label";
import NavRule from "../../components/nav-rule";
import { getHeroes, useConsumer } from "../../libs/Modules";

export default function NavDecadesItem({ shortTitle, index, ...props }) {
  const { hero } = useConsumer();
  const { root } = useStyles();
  const sizeLarge = {
    ...(findIndex(getHeroes(), hero) === index && { size: "large" }),
  };
  const colorPrimary = {
    ...(findIndex(getHeroes(), hero) >= index && { color: "primary" }),
  };

  return (
    <Grid
      item
      xs
      key={shortTitle}
      component={Button}
      classes={{ root }}
      id={shortTitle}
      {...props}>
      <NavLabel {...sizeLarge} htmlFor={shortTitle}>
        {shortTitle}
      </NavLabel>
      <NavRule {...colorPrimary} {...sizeLarge} />
      {!getHeroes().length === 0 && <NavRule {...colorPrimary} size="small" />}
    </Grid>
  );
}
NavDecadesItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  shortTitle: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

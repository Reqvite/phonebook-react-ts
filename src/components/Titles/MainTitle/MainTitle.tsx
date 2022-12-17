import PropTypes from "prop-types";
import { HeroTitle } from "./MainTitle.style";

export const MainTitle: React.FC<{ title: string }> = ({ title }) => {
  return <HeroTitle>{title}</HeroTitle>;
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

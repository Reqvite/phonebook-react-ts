import { Title } from "./SecondaryTitle.style";

export const SecondaryTitle: React.FC<{ title: string }> = ({ title }) => {
  return <Title>{title}</Title>;
};

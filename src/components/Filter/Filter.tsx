import { FilterTitle, FilterInput } from "./Filter.styled";

interface FilterProps {
  title: string;
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Filter: React.FC<FilterProps> = ({ title, handleFilter }) => {
  return (
    <>
      <FilterTitle>{title}</FilterTitle>
      <FilterInput type="text" onChange={handleFilter} />
    </>
  );
};

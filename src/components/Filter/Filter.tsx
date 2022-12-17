import { FilterTitle, FilterInput } from "./Filter.styled";

interface FilterProps {
  title: string;
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Filter = ({ title, handleFilter }: FilterProps) => {
  return (
    <>
      <FilterTitle>{title}</FilterTitle>
      <FilterInput type="text" onChange={handleFilter} />
    </>
  );
};

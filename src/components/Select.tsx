import {
  SelectContainer,
  StyledSelect,
  DropdownIcon,
} from "../styles/ArticleBoards";
import { SelectProps } from "../types/ArticleBoards";

const Select = ({ value, onChange, options }: SelectProps) => (
  <SelectContainer>
    <StyledSelect value={value || ""} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
    <DropdownIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M8.5 13.8208L16.5 21.8208L24.5 13.8208"
          stroke="#AFAFB6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </DropdownIcon>
  </SelectContainer>
);

export default Select;

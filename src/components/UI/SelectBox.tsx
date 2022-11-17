import styled from 'styled-components';

type Props = {
  options: [string, string][];
  handleSelectChange: (option: string) => void;
  defaultValue: string;
};

function SelectBox({ options, handleSelectChange, defaultValue }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelectChange(e.target.value);
  };

  return (
    <Select defaultValue={defaultValue} onChange={handleChange}>
      {options.map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </Select>
  );
}

export default SelectBox;

const Select = styled.select`
  width: 140px;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
  font-size: 13px;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  & + select {
    margin-left: 10px;
  }
`;

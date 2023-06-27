import RcSelect, { SelectProps } from "rc-select";

const incidencesStateResource = [
  { value: 4, label: "Not Identified" },
  { value: 3, label: "Closed" },
  { value: 2, label: "Communicated" },
  { value: 6, label: "Identified" },
  { value: 1, label: "Resolved" },
  { value: 5, label: "Cancelled" },
];

const sorterByLabel = (optionA, optionB) =>
  optionA.label.localeCompare(optionB.label);

const Select = (props: SelectProps) => {
  return (
    <RcSelect
      showSearch
      style={{ width: 500 }}
      filterSort={sorterByLabel}
      optionFilterProp="label"
      options={incidencesStateResource}
    ></RcSelect>
  );
};

export default Select;

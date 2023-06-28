import ReactSelect from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const classNames =
  "mt-2 block w-full appearance-none !border-slate-200 !rounded-md bg-white px-1 !border text-slate-900 shadow-sm ring-1 !ring-slate-300 placeholder:text-slate-400 sm:text-sm";
const unFocusClassNames = "" + ` ${classNames}`;
const focusClassNames = "outline-none ring-2 ring-blue-500" + ` ${classNames}`;

const Select = (props) => {
  return (
    <ReactSelect
      // defaultValue={selectedOption}
      // onChange={setSelectedOption}
      options={options}
      classNames={{
        control: (state) =>
          state.isFocused ? focusClassNames : unFocusClassNames,
      }}
    />
  );
};

export default Select;

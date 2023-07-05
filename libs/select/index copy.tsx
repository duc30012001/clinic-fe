import ReactSelect, { GroupBase, Props } from "react-select";

export const selectDefaultClassNames =
  "mt-2 block w-full appearance-none !border-slate-100 !rounded-md bg-white px-1 !border text-slate-900 shadow-sm ring-1 !ring-slate-300 placeholder:text-slate-400";
const selectUnFocusClassNames = "" + ` ${selectDefaultClassNames}`;
const selectFocusClassNames =
  "outline-none ring-2 ring-blue-500" + ` ${selectDefaultClassNames}`;

function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <ReactSelect
      classNames={{
        control: (state) =>
          state.isFocused ? selectFocusClassNames : selectUnFocusClassNames,
      }}
      {...props}
    />
  );
}

export default Select;

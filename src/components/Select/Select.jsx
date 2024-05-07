import Input from "../Input/Input";

export default function Select({ required, label }) {
  return (
    <>
      <Input
        placeholder="Select information"
        border
        dataList={"data"}
        required={required}
        label={label}
      />
      <datalist id="data">
        <option value="Option 1">Option 1</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 1">Option 1</option>
      </datalist>
    </>
  );
}

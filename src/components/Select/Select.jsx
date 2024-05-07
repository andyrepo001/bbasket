import Input from "../Input/Input";

export default function Select({ required, label, selectData, placeholder }) {
  return (
    <>
      <Input
        placeholder={placeholder}
        border
        dataList={"data"}
        required={required}
        label={label}
      />
      <datalist id="data">
        {selectData?.map((data, indx) => (
          <option value={data?.location_name} key={indx}>
            {data?.location_name}
          </option>
        ))}
      </datalist>
    </>
  );
}

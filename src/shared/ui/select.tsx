interface SelectOptions {
  value: string;
  setValue: (value: string) => void;
  label: string;
  options: {
    id: string;
    title: string;
  }[];
}

export default function Select({ value, setValue, options, label }: SelectOptions) {
  return (
    <select
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      id='countries'
      className='block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
    >
      <option disabled defaultValue={`Choose a ${label}`}>
        Choose a {label}
      </option>
      {options.map((option) => (
        <option className='cursor-pointer' key={option.id} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
}

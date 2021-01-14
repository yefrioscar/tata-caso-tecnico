import { useField } from "formik";
import { useState } from "react";
import './index.scss';

export interface InputProps {
  label: string,
  name: string,
  type: string
}

const Input: React.FunctionComponent<InputProps> = ({ label, name, type }) => {
  const [field, meta, helpers] = useField(name)
  const [isActive, setIsActive] = useState(false);

  function handleTextChange(text: string) {
    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return <div className=''>
    <div className="input-container">
      <input
        className=''
        {...field}
        onChange={(e) => {
          field.onChange(e)
          handleTextChange(e.target.value)
        }}
        id={name}
        type={type}
      />
      <label className={isActive ? "active" : ""} htmlFor={name}>{label}</label>
    </div>
    {meta.touched && meta.error ? <span className="text-sm text-red-600">{meta.error}</span> : ''}
  </div>;
}

export default Input;
import React, { useState } from "react";
import { Form, useField } from "@rocketseat/unform";
import Select from 'react-select';

export const ReactSelect = ({ name, options, multiple }) => {

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(defaultValue);

  function getValue() {
    if (!multiple) {
      return value;
    }

    return value.reduce((res, item) => {
      res.push(item.value);
      return res;
    }, []);
  }

  return (
    <>
      <Select
        name="techs"
        options={options}
        isMulti={multiple}
        value={value}
        onChange={setValue}
        ref={() => registerField({ name: fieldName, ref: getValue })}
      />

      {error && <span>{error}</span>}
    </>
  )
}
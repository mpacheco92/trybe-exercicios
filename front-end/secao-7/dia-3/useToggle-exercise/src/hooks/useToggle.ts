import { useState } from "react"

function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  function toggleValue() {
    setValue(value ? false : true)
  }

  return {
    value,
    toggleValue,
  }
};

export default useToggle;

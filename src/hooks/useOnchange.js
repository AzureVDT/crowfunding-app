import { debounce } from "lodash";
import { useState } from "react";

export default function useOnchange(time = 0) {
    const [value, setValue] = useState("");
    const handleOnChange = debounce((e) => {
        setValue(e.target.value);
    }, time);
    return [value, handleOnChange];
}

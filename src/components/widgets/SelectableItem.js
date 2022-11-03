import React from 'react';
import Select from 'react-select';

const SelectableItem = (props) => {
    return (
        <Select
            isClearable
            onChange={props.handleChange}
            options={props.options}
            placeholder={props.placeholder}
            isOptionDisabled={(option) => option.disabled}
            defaultValue={props.default}
        />
    )
}

export default SelectableItem;
import React from 'react';
import Select from 'react-select';

const MultiSelectableItem = (props) => {
    return (
        <Select
            isMulti
            closeMenuOnSelect={false}
            onChange={props.handleChange}
            options={props.options}
            placeholder={props.placeholder}
            css={{
                fontWeight: "normal"
            }}
            className="text-muted"
            defaultValue={props.default}
        />
    )
}

export default MultiSelectableItem;
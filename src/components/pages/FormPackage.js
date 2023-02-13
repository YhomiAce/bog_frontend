import { Button } from '@material-tailwind/react'
import Swal from "sweetalert2";

export default function FormPackage({ formPayload }) {
    const responseArray = [];

    const handleInputChange = (e, data, options) => {
        const objIndex = responseArray.findIndex((obj => obj.name === data.name));

        if (objIndex === -1) {
            if (options) {
                if (options.length > 0) {
                    options.forEach((option) => {
                        if (option.value === e.target.value) {
                            responseArray.push({ _id: option.id, name: data.name, value: e.target.value });
                        }
                    })
                }
                else {
                    responseArray.push({ _id: options ? options.id : data.id, name: data.name, value: e.target.value });
                }
            }
            else {
                responseArray.push({ _id: data.id, name: data.name, value: e.target.value });
            }
        }
        else {
            responseArray[objIndex].value = e.target.value;
        }
    }

    const handleFileChange = (e, data) => {
        let files = e.target.files;

        const fd = new FormData();

        Array.from(files).forEach(file => {
            fd.append('image', file);
        });

        const xhr = new XMLHttpRequest();

        xhr.onload = () => {
            const fileResponse = JSON.parse(xhr.response);
            fileResponse.forEach((response) => {
                const objIndex = responseArray.findIndex((obj => obj.name === data.name));

                if (objIndex === -1) {
                    responseArray.push({ _id: data.id, name: data.name, value: response });
                }
                else {
                    responseArray[objIndex].value = response;
                }

            })
        };

        // Send XHR reqeust
        xhr.open('POST', `https://bog.greenmouseproperties.com/upload`);
        xhr.send(fd);
    }

    const inputField = (data) => {
        switch (data.inputType) {
            case 'text':
                return (<input
                    type="text"
                    placeholder={data.placeholder}
                    className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                    required={data.required}
                    name={data.name}
                    value={data._values[0]}
                    onChange={(e) => handleInputChange(e, data, null)}
                />);

            case 'select':
                return (
                    <select
                        type="text"
                        placeholder=""
                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                        required={data.required}
                        name={data.name}
                        multiple={data.multiple}
                        onChange={(e) => handleInputChange(e, data, data._values)}
                    >
                        {data._values.map((options, index) => (
                            <option value={options.value} key={index}>{options.label}</option>
                        ))}
                    </select>
                );

            case 'autocomplete':
                return (
                    <select
                        type="text"
                        placeholder=""
                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                        required={data.required}
                        name={data.name}
                        multiple={data.multiple}
                        onChange={(e) => handleInputChange(e, data, data._values)}
                    >
                        {data._values.map((options, index) => (
                            <option value={options.value} key={index}>{options.label}</option>
                        ))}
                    </select>
                );


            case 'checkbox-group':
                return (
                    data._values.map((options, index) => (
                        <div className="py-1" key={index}>
                            <input
                                type="checkbox"
                                name={data.name}
                                value={options.value}
                                onChange={(e) => handleInputChange(e, data, options)}
                            />
                            <label className="pl-1">{options.label}</label>
                        </div>
                    ))
                );

            case 'date':
                return (
                    <input
                        type="date"
                        placeholder={data.placeholder}
                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                        required={data.required}
                        name={data.name}
                        value={data._values[0].value}
                        onChange={(e) => handleInputChange(e, data, data._values[0])}
                        multiple={data.multiple}
                    />
                );

            case 'file':
                return (
                    <input
                        type="file"
                        placeholder={data.placeholder}
                        className="w-full mt-2 py-2 px-2 border-gray-400 rounded border fs-400"
                        required={data.required}
                        name={data.name}
                        value={data._values[0]}
                        onChange={(e) => handleFileChange(e, data, null)}
                        multiple={data.multiple}
                    />
                );

            case 'radio-group':
                return (
                    data._values.map((options, index) => (
                        <div className="py-1" key={index}>
                            <input type="radio" onChange={(e) => handleInputChange(e, data, options)} required={data.required} name={data.name} value={options.value} />
                            <label className="pl-1">{options.label}</label>
                        </div>
                    ))
                );
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newResponseArray = responseArray.map(({ name, ...rest }) => ({
            ...rest,
        }));

        const payload = { form: newResponseArray };

        var requestData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem("auth_token")
            },
            body: JSON.stringify(payload),
        };

        fetch("https://bog.greenmouseproperties.com/api/projects/request", requestData)
            .then(response => response.text())
            .then(result => 
                Swal.fire({
                    title: " ",
                    imageUrl: "https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/green-checkmark-line-icon.svg",
                    imageWidth: "75px",
                    text: 'Request Submitted Successfully',
                })
            )
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div className="mt-6">
                <p><span className="text-red-600 pr-2">*</span>Required</p>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                {formPayload.formData.map((data, index) => (
                    <div className="mt-3 lg:mt-6 w-full">
                        <label className="block fw-600">
                            {data.inputType !== 'button' ? data.label : ''}
                            <span className="text-red-600 pl-2">{data.required ? '*' : ''}</span>
                        </label>
                        {inputField(data)}
                    </div>
                ))}
                <div className="mt-3 lg:mt-6 w-full">
                    <Button type='submit' className="bg-primary">Submit</Button>
                    </div>
            </form>
        </>
    );
};
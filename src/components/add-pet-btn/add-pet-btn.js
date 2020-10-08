import React, { useState} from 'react';
import './add-pet-btn.css'

function AddPetBtn() {
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

// handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

// handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };
    return (
        <div className="App">
            {inputList.map((x, i) => {
                return (
                    <div className="box">
                        <div className="col-6">
                            <label htmlFor="firstName">First name</label>
                            <input
                                className="form-control"
                                name="firstName"
                                placeholder="Enter First Name"
                                value={x.firstName}
                                onChange={e => handleInputChange(e, i)}
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="lastName">Last name</label>
                            <input
                                className="form-control ml10"
                                name="lastName"
                                placeholder="Enter Last Name"
                                value={x.lastName}
                                onChange={e => handleInputChange(e, i)}
                            />
                        </div>

                        <div className="btn-box">
                            {inputList.length !== 1 && <button
                                className="mr10"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default AddPetBtn;
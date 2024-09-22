import React, { useState, useEffect } from "react";
import generateUniqueId from "generate-unique-id";
import getdata from "../js/main";
import ViewData from "../viewData/ViewData";

const EmployeeForm = () => {
  const [forminput, setForminput] = useState({
    id: '',
    name: '',
    email: '',
    number: '',
    age: '',
    department: '',
    position: '',
  });

  const [Storage, setStorage] = useState(getdata());

  const handleForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setForminput({
      ...forminput,
      [name]: value
    });
  };

  const handleEdit = (id) => {
    let record = Storage.find((rec) => rec.id === id);

      setForminput(record);
    
  };

  const handleRemove = (id) => {
    console.log("id" , id) ;
    let record = Storage ;
    let deleteRecord = record.filter((rec)=>{
      return  rec.id !== id
  })

  setStorage  (deleteRecord);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (forminput.id) {
      let newRecord = Storage.map((record) =>
        record.id === forminput.id ? forminput : record
      );
      setStorage(newRecord);
    } else {
      let obj = {
        ...forminput,
        id: generateUniqueId({
          length: 4,
          useLetters: false
        })
      };



      setStorage([...Storage, obj]);
    }

    setForminput({
      id: '',
      name: '',
      email: '',
      number: '',
      age: '',
      department: '',
      position: '',
    });
  };

  useEffect(() => {
    localStorage.setItem('StorageData', JSON.stringify(Storage));
  }, [Storage]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Employee Management Form
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="id"
                value={forminput.id}
                onChange={handleForm}
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                hidden
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={forminput.name}
                onChange={handleForm}
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter employee name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={forminput.email}
                onChange={handleForm}
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter employee email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="number">
                Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                value={forminput.number}
                onChange={handleForm}
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter employee number"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="age">
                Age
              </label>
              <input
                type="text"
                id="age"
                name="age"
                value={forminput.age}
                onChange={handleForm}
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter employee age"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="department">
                Department
              </label>
              <select
                id="department"
                name="department"
                value={forminput.department}
                onChange={handleForm}
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select department</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
                <option value="HR">HR</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="position">
                Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={forminput.position}
                onChange={handleForm}
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter employee position"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="py-1 " style={{ background: '#64427C' }} />

      <ViewData Storage={Storage} handleEdit={handleEdit} handleRemove = {handleRemove} />
    </>
  );
};

export default EmployeeForm;

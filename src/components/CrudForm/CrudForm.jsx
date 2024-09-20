import React, { useState } from "react";

const EmployeeForm = () => {
  const [forminput , setForminput] = useState({
    name : '' ,
    email : '' ,
    number: '' ,
    age : '' ,
    department : '' ,
    position : '' ,
  })

  const handleForm = (e) => {
    let name = e.target.name ;
    let value = e.target.value ;

    setForminput({
      ...forminput ,
    [name] : value 
    })
  }

  
 
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Employee Management Form
      </h2>

      <form>
     
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
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            Email
          </label>
          <input
            type="email"
            id="Email"
            name="email"
            value={forminput.email}
            onChange={handleForm}
            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter employee email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
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

        {/* Age Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={forminput.age}
            onChange={handleForm}
            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter employee age"
          />
        </div>

        {/* Department Field */}
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

        {/* Position Field */}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  );
};

export default EmployeeForm;

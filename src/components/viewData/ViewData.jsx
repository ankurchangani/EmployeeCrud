import React from 'react'

const ViewData = ({ Storage, handleEdit  , handleRemove}) => {
    return (
        <>
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="px-4 py-2 border border-gray-300">#</th>
                            <th className="px-4 py-2 border border-gray-300">Name</th>
                            <th className="px-4 py-2 border border-gray-300">Email</th>
                            <th className="px-4 py-2 border border-gray-300">Number</th>
                            <th className="px-4 py-2 border border-gray-300">Age</th>
                            <th className="px-4 py-2 border border-gray-300">Department</th>
                            <th className="px-4 py-2 border border-gray-300">Position</th>
                            <th className="px-4 py-2 border border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Storage.map((rec, index) => (
                            <tr key={index} className="bg-white hover:bg-gray-100 text-gray-600 text-sm">
                                <td className="border px-4 py-2 text-center">{index + 1}</td>
                                <td className="border px-4 py-2 text-center">{rec.name}</td>
                                <td className="border px-4 py-2 text-center">{rec.email}</td>
                                <td className="border px-4 py-2 text-center">{rec.number}</td>
                                <td className="border px-4 py-2 text-center">{rec.age}</td>
                                <td className="border px-4 py-2 text-center">{rec.department}</td>
                                <td className="border px-4 py-2 text-center">{rec.position}</td>
                                <td className="border px-4 py-2 text-center">
                                    

                                    <button  onClick={() => handleEdit(rec.id)}>
                                        <i className="bi bi-pencil-square text-yellow-500 text-2xl mx-2"></i>
                                    </button>

                                    <button onClick={() => handleRemove
                                        (rec.id) }>
                                        <i className="bi bi-trash-fill text-red-500 text-2xl mx-2"></i>
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
        
    )
}

export default ViewData

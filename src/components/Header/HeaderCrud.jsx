import React from 'react';

const HeaderCrud = () => {
  return (
   
    <>
    <div className='container mx-auto p-3 rounded-md'>

      <div style={{ background: '#64427C' }} className='flex justify-between p-2 '>
        <div className='px-4 text-white'>
          <i className="bi bi-house-add-fill text-2xl"></i>
        </div>
        <div className="px-3 text-white">
          <div className="flex items-center ">
          <i className="bi bi-person text-2xl"></i>
          <span className='text-2xl'>Employee Management</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HeaderCrud;

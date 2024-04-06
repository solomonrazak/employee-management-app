import React, {useState} from "react";

const AddEmployer = () => {

    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState([{
        name: "",
        email: "",
        position: "",
        department: "",
        startDate: "",
    }]);

    // function to displayform
    function displayForm(){
        setShowForm(!showForm)
    }

    // function to handle form input changes
    function handleFormData(e, field){
        const {value} = e.target;
        setFormData((prevData) => ({
            ...prevData, 
            [field]: value,
        }))
    }

    // function to save the form Data
    function saveForm(e){
        e.preventDefault();
        // const newForm = {
        //     name: formData.name,
        //     email: formData.email,
        //     position: formData.position,
        //     department: formData.department,
        //     startDate: formData.startDate,
        // }
        // console.log(newForm)
        setFormData({
            name: "",
            email: "",
            position: "",
            department: "",
            startDate: "",
        })
    }

  return (
    <div>
      <div className="flex justify-center">
        <button className="bg-slate-300 px-2 py-1 rounded-md my-3" onClick={displayForm}>Add New Employer</button>
      </div>
      {showForm && 

      <div className="w-[300px] mx-auto">
        <form>
          <label className="font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            placeholder="Enter employer name"
            type="text"
            className="block w-full bg-gray-100 border-solid border-[2px] h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none focus:ring-0 required:border-red-500"
            name="name"
            value={formData.name}
            onChange={(e) => handleFormData(e, 'name')}
            
            
          />
          <label className="font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            placeholder="Enter email here"
            type="email"
            className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none required:border-red-500"
            name="email"
            value={formData.email}
            onChange={(e) => handleFormData(e, 'email')}
            
          />
          <label className="font-medium" htmlFor="position">
            Position
          </label>
          <input
            id="position"
            placeholder="Employer position"
            className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none required:border-red-500"
            type="text"
            name="position"
            value={formData.position}
            onChange={(e) => handleFormData(e, 'position')}
           
          />
          <label className="font-medium" htmlFor="department">
            Department
          </label>
          <input
            id="department"
            placeholder="Department"
            className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none required:border-red-500"
            type="text"
            name="department"
            value={formData.department}
            onChange={(e) => handleFormData(e, 'department')}
            
          />
          <label className="font-medium" htmlFor="startDate">
            Start Date
          </label>
          <input
            id="startDate"
            placeholder="Enter Date"
            className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none required:border-red-500"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={(e) => handleFormData(e, 'startDate')}
          />

          <div className="flex justify-between mt-3">
            <div>
             
              <button
                className="bg-blue-600 text-white p-1 px-2 rounded"
                onClick={saveForm}
                
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
}
    </div>
  );
};

export default AddEmployer;

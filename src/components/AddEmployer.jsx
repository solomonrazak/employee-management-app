import React, {useState} from "react";
import { MdDelete } from "react-icons/md";

const AddEmployer = () => {

    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        position: "",
        department: "",
        startDate: "",
    });

   const [errors, setErrors ] = useState({});
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

    function handleSubmit(e) {
        e.preventDefault();
        const newForm = {
            name: formData.name,
            email: formData.email,
            position: formData.position,
            department: formData.department,
            startDate: formData.startDate
          };
          console.log(newForm);
        const validationErrors = {};
        if (!formData.name.trim()) {
          validationErrors.name = "Please fill out form";
        //   console.log(validationErrors.name)
        }
        if (!formData.position.trim()) {
          validationErrors.position = "Please fill out form";
        }
        if (!formData.department.trim()) {
          validationErrors.department = "Please fill out form";
        }
        if (!formData.startDate.trim()) {
            validationErrors.startDate = "Please input a date";
          }
        if (!formData.email.trim()) {
          validationErrors.email = "Please fill out form";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
          validationErrors.email = "Email is not valid";
        }
      
        setErrors(validationErrors);
      
        if (Object.keys(validationErrors).length === 0) {
          // Only update state if there are no validation errors
          alert("Form submitted Successful");
          setFormData({
            name: "",
            email: "",
            position: "",
            department: "",
            startDate: "",
          });
        }
      }

      function handleCancel() {
        setShowForm(false) // Hide the displayed form
      }
    
      function handleDelete(e) {
        e.preventDefault();
        setFormData({
          name: "",
          email: "",
          position: "",
          department: "",
          start: "",
        });
      }

  return (
    <div>
      <div className="flex justify-center">
        <button className="bg-slate-300 px-2 py-1 rounded-md my-3" onClick={displayForm}>Add New Employer</button>
      </div>
      {showForm && 

      <div className="w-[300px] mx-auto">
        <form onSubmit={handleSubmit}>
            <div>
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
            {errors.name && <span className="relative top-[-10] text-red-500">{errors.name}</span>}
            </div>
            <div>
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
           {errors.email && <span className="relative top-[-10] text-red-500">{errors.email}</span>}
          </div>
          <div>
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
          {errors.position && <span className="relative top-[-10] text-red-500">{errors.position}</span>}
          </div>
          <div>
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
          {errors.department && <span className="relative top-[-10] text-red-500">{errors.department}</span>}
          </div>
          <div>
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
          {errors.startDate && <span className="relative top-[-10] text-red-500">{errors.startDate}</span>}
</div>
<div className="flex justify-between mt-3">
                <div>
                  <button
                    className="flex bg-white border-2 border-slate-400 gap-1 rounded items-center p-1 text-gray-800"
                    onClick={handleDelete}
                  >
                    <MdDelete />
                    Delete
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-white border-2 border-slate-400 rounded px-2 text-gray-800"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-600 text-white p-1 px-2 rounded"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
        </form>
      </div>
}
    </div>
  )
};

export default AddEmployer;

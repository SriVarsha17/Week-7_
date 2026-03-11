import React from 'react'
import { useForm } from 'react-hook-form'
function AddTaskForm ({addTask}) 
{
    const {register,handleSubmit,reset,formState: { errors }}=useForm({ mode: "onChange" })
    const submitForm=(obj)=>{
        addTask(obj)
        reset()
    }
  return (
    <div className='flex-col p-10 m-10 bg-pink-300 border-2'>
        <h3 className='font-bold text-3xl p-3 mb-2 text-center text-amber-900'>Add Task</h3>
        <form onSubmit={handleSubmit(submitForm)} className='text-center flex justify-around'>
            <div className='flex flex-col'>
            <input type="text" placeholder='add task'  className='bg-gray-200 text-black mb-2 p-1 border-2' {...register("task",{required:true,minLength:3})} />
            {
                        errors.task?.type==='required' && <p className="text-red-600">task required</p>
            }
            {
                        errors.task?.type==='minLength' && <p className="text-red-600">Min length is 3</p>
            }
            </div>
            <div className='flex flex-col'>
            <select className='bg-gray-200 mb-2 p-1 border-2' {...register("priority", { required: true })}>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
                  
            </select>
            {errors.priority && (<p className="text-red-600">Priority required</p>)}
            </div>
            <div className='flex flex-col'>
            <button type='submit' className='bg-blue-600 mb-2 p-1 border-2'>AddTask</button>
            </div>
        </form>
    </div>
  )
}
export default AddTaskForm;
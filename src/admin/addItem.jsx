import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { create } from '../api/products'
import { addSchema } from '../api'

export default function AddItem() {
    const navigate = useNavigate()
    const { register , handleSubmit , formState:{errors} } = useForm({
            resolver : yupResolver(addSchema)
    })
    const onSubmit = async (body) => {
        const AddItems = await create(body)
        alert("add item is successfully added")
        navigate("/auth/admin")
        console.log(AddItems)
    }
  return (
    <div className='container mx-auto'>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <label className='text-2xl te'>Name</label><br/>
                  <input {...register("name")} className='w-[400px] h-[40px] my-5 rounded-xl border-2'/>
                  <p className='text-red-500 text-xl '>{ errors.name && errors.name.message}</p>
              </div>
                 <div>
                  <label className='text-2xl te'>price</label><br/>
                  <input {...register("price")} className='w-[400px] h-[40px] my-5 rounded-xl border-2'/>
                  <p className='text-red-500 text-xl '>{ errors.price && errors.price.message}</p>
              </div>
                 <div>
                  <label className='text-2xl te'>description</label><br/>
                  <input {...register("description")} className='w-[400px] h-[40px] my-5 rounded-xl border-2'/>
                  <p className='text-red-500 text-xl '>{ errors.description && errors.description.message}</p>
              </div>
                 <div>
                  <label className='text-2xl te'>image</label><br/>
                  <input {...register("image")} className='w-[400px] h-[40px] my-5 rounded-xl border-2'/>
                  <p className='text-red-500 text-xl '>{ errors.image && errors.image.message}</p>
              </div>
                <button className='bg-green-500 p-5 rounded-xl text-white'>Add Product</button>
            </form>

    </div>

  )
}

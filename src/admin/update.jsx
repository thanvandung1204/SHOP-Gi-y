import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { create, getId, update } from '../api/products'
import { addSchema, updateSchema } from '../api'

export default function Update() {
    const {id} = useParams()
    const navigate = useNavigate()
    const fethId = async () => {
        const { data } = await getId(id)
        return data
    }
    const { register , handleSubmit , formState:{errors} } = useForm({
        resolver: yupResolver(updateSchema),
        defaultValues: async () => { 
            if (id) {
                return fethId(id)
            }
        }
    })
    const onSubmit = async (body) => {
        const AddItems = await update(id,body)
        alert("updated item is successfully update")
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
                <button className='bg-blue-500 p-5 rounded-xl text-white'>update Product</button>
            </form>

    </div>

  )
}


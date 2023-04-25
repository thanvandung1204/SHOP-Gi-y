import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getALl, remove } from '../api/products'
import { useEffect } from 'react'
import _ from 'lodash'
export default function Admin() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const showItem = async () => {
        const { data } = await getALl()
        setProducts(data)
    }
    useEffect(() => {
        showItem()
    }, [])
    
    const handelRemove = async (id) => {
        const conFirm = window.confirm('Are you sure you want to remove')
        if (conFirm) {
            const Remove = await remove(id)
            window.location.reload()
            console.log(Remove)
        }
    }
    const productsItem = _.sortBy(products, "id")
    console.log(productsItem)
  return (
    <div>
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 text-xl">
            id
          </th>
          <th scope="col" className="px-6 py-3 text-xl">
            name
          </th>
          <th scope="col" className="px-6 py-3 text-xl">
            price
          </th>
          <th scope="col" className="px-6 py-3 text-xl">
            Description
          </th>
          <th scope="col" className="px-6 py-3 text-xl">
            image
                          </th>
                          <th scope="col" className="px-6 py-3 text-xl text-red-500">
            Action
              </th>
                                <th scope="col" className="px-6 py-3 text-xl text-red-500">
          </th>
        </tr>
      </thead>
      <tbody>
                      {productsItem.map((item,index) => {
            return <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 mt-5">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.id}
          </th>
          <td className="px-6 py-4">
              {item.name}
          </td>
          <td className="px-6 py-4">
             {item.price}
          </td>
          <td className="px-6 py-4">
             {item.description}
                </td>
                 <td className="px-6 py-4">
             {item.image}
          </td>
          <td className="px-6 py-4">
            <button onClick={()=>{
              navigate(`/auth/admin/update/${item.id}`)
            }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                          </td>
                          <td className="px-6 py-4">
            <button onClick={()=>{
                handelRemove(item.id)
            }} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
          </td>
        </tr>
        })}
      
      </tbody>
    </table>
  </div>
</div>

  )
}

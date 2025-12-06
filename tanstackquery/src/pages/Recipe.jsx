import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router'

const Recipe = () => {
    // let [recipe, setRecipe] = useState(null)

    let { id } = useParams();
    console.log(id)

    let fetchRecipe = async () => {
        let data = await axios.get(`https://dummyjson.com/recipes/${id}`)
        return data?.data;
    }


    let { data, isLoading, isPending, isError } = useQuery({
        queryKey: ['recipe'],
        queryFn: () => fetchRecipe(),
        enabled: !!id,
    })

    console.log(data)


    return (
        <div>
            {isLoading ?

                <div>loading.....</div> :

                isError ? <h2>error in fetching data</h2>
                    :

                    <div>


                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                    <img
                                        alt="ecommerce"
                                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                        src={data?.image}
                                    />
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                            {data?.tags[0]}
                                        </h2>
                                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                            {data?.name}
                                        </h1>

                                        <div>
                                            <span className='text-3xl'>Ingredients</span>
                                            <ul>
                                                {data?.ingredients?.map((ing) => {
                                                    return (
                                                        <li>{ing}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>

                                        <div>
                                            <span className='text-3xl'>instructions
                                            </span>
                                            <ul>
                                                {data?.instructions
                                                    ?.map((ins) => {
                                                        return (
                                                            <li>{ins}</li>
                                                        )
                                                    })}
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

            }
        </div>
    )
}

export default Recipe
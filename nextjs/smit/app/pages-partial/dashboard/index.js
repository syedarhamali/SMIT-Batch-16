'use client'
import { deleteProductData, getProductData, updateProductData } from "@/app/services";
import { useEffect, useState } from "react";

export default function DashboardPartial() {
    const [productData, setProductData] = useState([])
    const [productInputData, setProductInputData] = useState({
        id: null,
        name: '',
        description: ''
    })

    const getData = async () => {
        const data = await getProductData()
        console.log(data, "data ==>")
        setProductData(data)
    }

    useEffect(() => {
        getData()
    }, [])


    const deleteProduct = async (id) => {
        const data = await deleteProductData(id)
        getData()
    }

    const editProduct = (product) => {
        const { name, description, id } = product

        setProductInputData({
            id: id,
            name: name,
            description: description
        })
    }


    const handleEditProduct = async () => {
        const data = {
            name: productInputData.name,
            description: productInputData.description
        }

        const response = await updateProductData(productInputData.id, data)
        console.log(response)
        getData()
        setProductInputData({
            name: '',
            description: '',
            id: null
        })
    }


    return <section>
        <div className="min-h-1/2  p-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

            {/* Input Form */}
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md flex flex-wrap md:flex-nowrap items-end gap-4 mb-10">
                <div className="flex flex-col w-full">
                    <label className="text-sm font-semibold text-gray-600 mb-1">Title</label>
                    <input
                        type="text"
                        value={productInputData.name}
                        onChange={(event) =>
                            setProductInputData((prev) => ({
                                ...prev,
                                name: event.target.value,
                            }))
                        }
                        placeholder="Enter product name"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="text-sm font-semibold text-gray-600 mb-1">Body</label>
                    <input
                        type="text"
                        value={productInputData.description}
                        onChange={(event) =>
                            setProductInputData((prev) => ({
                                ...prev,
                                description: event.target.value,
                            }))
                        }
                        placeholder="Enter product description"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                </div>

                <button onClick={handleEditProduct} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-2 shadow-sm transition-all">
                    Edit
                </button>
            </div>

            {/* Product List */}
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {productData?.length && productData.map((product) => {
                    const { description, name, id } = product;
                    return (
                        <div
                            key={id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
                        >
                            <div className="p-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                                    {name}
                                </h2>
                                <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
                            </div>
                            <div className="flex justify-between border-t border-gray-100">
                                <button
                                    onClick={() => editProduct(product)}
                                    className="w-1/2 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-all"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteProduct(id)}
                                    className="w-1/2 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 transition-all border-l border-gray-100"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                })}
            </ul>
        </div>

    </section>
}
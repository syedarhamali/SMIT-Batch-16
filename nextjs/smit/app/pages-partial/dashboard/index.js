'use client'
import { getProductData } from "@/app/services";
import { useEffect, useState } from "react";

export default function DashboardPartial() {
    const [productData, setProductData] = useState([])

    const getData = async () => {
        const data = await getProductData()
        setProductData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return <section>
        <h1>Dashboard</h1>

        <ul>
            {productData.map((product) => {
                const { title, description, id , price } = product
                return (
                    <div key={id} className="max-w-5xl mx-auto">
                        <div className="md:col-span-2">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h1 id="title" className="text-2xl font-extrabold leading-tight" >{title} </h1>
                                    <p id="brand" className="text-sm text-gray-500 mt-1" />
                                    <div className="mt-3 flex items-center gap-3">
                                        <div id="rating" className="flex items-center gap-1 text-sm" />
                                        <span id="rating-value" className="text-xs text-gray-500" />
                                        <div className="ml-4 text-xs text-gray-500">
                                            SKU: <span id="sku" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-bold" id="price" > {price} </div>
                                    <div className="text-sm text-gray-500 line-through" id="price-old" />
                                    <div className="mt-2 text-xs text-gray-500" id="discount" />
                                </div>
                            </div>
                            <p id="description" className="mt-4 text-gray-700" > {description} </p>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-sm font-semibold mb-2">Details</h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>
                                            Category:{" "}
                                            <span id="category" className="font-medium text-gray-800" />
                                        </li>
                                        <li>
                                            Weight: <span id="weight" /> g
                                        </li>
                                        <li>
                                            Dimensions: <span id="dimensions" />
                                        </li>
                                        <li>
                                            Warranty: <span id="warranty" />
                                        </li>
                                        <li>
                                            Shipping: <span id="shipping" />
                                        </li>
                                        <li>
                                            Minimum Order Quantity: <span id="moq" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-sm font-semibold mb-2">Tags &amp; Availability</h3>
                                    <div id="tags" className="flex gap-2 flex-wrap" />
                                    <h3 className="text-sm font-semibold mt-4 mb-2">Return &amp; Meta</h3>
                                    <p className="text-sm text-gray-600">
                                        Return policy:{" "}
                                        <span id="returnPolicy" className="font-medium text-gray-800" />
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Barcode: <span id="barcode" className="font-mono text-xs" />
                                    </p>
                                </div>
                            </div>
                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold">Reviews</h3>
                                <div id="reviews" className="mt-3 space-y-3" />
                            </div>
                            {/* Actions */}
                            <div className="mt-6 flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <label className="text-sm">Quantity</label>
                                    <input
                                        id="qty"
                                        type="number"
                                        min={1}
                                        defaultValue={1}
                                        className="w-20 border rounded px-2 py-1 text-sm"
                                    />
                                </div>
                                <button
                                    id="addCart"
                                    className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700"
                                >
                                    Add to cart
                                </button>
                                <button id="wishlist" className="px-4 py-2 rounded-lg border text-sm">
                                    Add to wishlist
                                </button>
                            </div>
                        </div>
                    </div>

                )
            })}
        </ul>
    </section>
}
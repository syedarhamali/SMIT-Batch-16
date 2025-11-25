'use client'

import axios from "axios"
import { useState } from "react"

const UPLOAD_PRESET = 'frontend'
const cloudName = 'dhgkvwp2b'
const ENDPOINT = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

export default function ImageUploading() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState("")


    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }


    const handleSubmit = async () => {

        const formData = new FormData() // create form
        formData.append('file', file)
        formData.append("upload_preset", UPLOAD_PRESET)

        console.log(formData)


        try {
            setLoading(true)
            const response = await axios.post(ENDPOINT, formData)
            console.log(response)
            const { data } = response
            console.log(data.url)
            setImageFile(data.url)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h1>Image Uploading Using Cloudinary</h1>

            <div>
                <input type="file" onChange={handleFileChange} accept=".png,.jpeg,.jpg" />
                <button className="border" onClick={handleSubmit}>Upload Image</button>
            </div>

            <div>
                {loading ? <p>Loading .....</p> :
                    <img src={imageFile} />}
            </div>

        </div>
    )
}
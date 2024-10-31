import { NextResponse } from "next/server"
import path from "path"

export async function POST (req:Request, res: Response){
    const formData = await req.formData()
    const file = formData.get('image'); // Access the file from the request
    const title = formData.get('title');
    const category = formData.get('category');
    const contents = formData.get('contents');


    console.log("file", file)
    console.log("title", title)
    console.log("content", contents)
    if(!file || typeof file === "string"){
        throw new Error("Invalid file upload")
    }

    // const filePath = path.join(process.cwd(), 'public/images/news', body.image)
    // const fileUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/files/${body.image}`
    // console.log('filePath', filePath)
    // console.log('fileUrl', fileUrl)
    
    try{
        return NextResponse.json({ status: 201, message: "File uploaded successfully" });
    }
    catch(error){
        console.error("error", error)
        return NextResponse.json(error, {status: 500})
    }
}
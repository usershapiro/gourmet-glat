import { UploadedFile } from "express-fileupload"

class CategoryModel {
    public categoryId : number
    public categoryName : string
    public image:UploadedFile
    public imageName:string

    public constructor (category:CategoryModel)  {
        this.categoryId = category.categoryId
        this.categoryName = category.categoryName
        this.image = category.image
        this.imageName = category.imageName

    }
}

export default CategoryModel
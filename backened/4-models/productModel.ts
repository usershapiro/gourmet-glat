class ProductModel {
   public productId:number
   public productName:string	
   public manufacturingDate: string
   public expireDate: string	
   public productCategoryId	: number
   public price : number
   
   public constructor (product:ProductModel) {
    this.productId = product.productId;
    this.productName = product.productName;
    this.manufacturingDate = product.manufacturingDate;
    this.expireDate = product.expireDate;
    this.productCategoryId = product.productCategoryId;
    this.price = product.price
   }

} 

export default ProductModel
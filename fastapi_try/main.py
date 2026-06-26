# pyrefly: ignore [missing-import]
from fastapi import FastAPI
from mock import products
from dtos import Product

app=FastAPI()


@app.get("/products")
def getProducts():
    return products



 ##path params ''''''''''''''

@app.get("/product/{product_id}")            
def get_one_product(product_id:int):

    product=None
    
    for oneProduct in products:
        if oneProduct.get("id")==product_id:
            return oneProduct


    return {
        "error:product not found for this id"
    }                                                  


    ##Query params>>>>>>>>>>>>>
@app.get("/greet")
def greet_user(name:str,age=int):
    return{
        "greet":f"hello {name} how are you!!your age is {age}"
    }

##  DIFFERENT HTTP METHORDS

@app.post("/letsgo")
def lets(data:Product):

    data=data.model_dump()

    products.append(data)

    return {"message":"lets gooo","data":products}



##PUT METHORD
@app.put("/update_product/{product_id}")
def update_product(product_data:Product,product_id:int):

    for index,oneProduct in enumerate(products):
        if oneProduct.get("id")==product_id:
            products[index]=product_data.model_dump()
            return{"status":"product updated successfully...","product":product_data}

       


    return {"error....."}

## DELETE METHORD

@app.delete("/delete_product/{product_id}")
def delete_product(product_id:int):

      for index,oneProduct in enumerate(products):
        if oneProduct.get("id")==product_id:
            deleted_Product=products.pop(index)
            return{"status":"product deleted successfully...","product":deleted_Product}


      return {"error":"product not found..."}
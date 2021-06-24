# ReactStore-API
ReactStore-REST API with NodeJs &amp; Express 

### Commands to run the server Locally 
```
npm run devstart
```

### Created a very simple Rest API with express and mock data 

## End Points are as below.

### To get the List of All products and single product 
```
Get Request:- api/products
```

```
Get Request:- api/products/:id
```
### To get the List of All products in the Cart

```
Post Request:- /api/cart
```
#### body : should be like 
```
{
    id:[1,2,3]
}
```

### It is running live on Heroku Server 
API Links are 

```
GET: 
https://prodbysaif.herokuapp.com/api/products/
https://prodbysaif.herokuapp.com/api/products/1

```
```
POST :
 https://prodbysaif.herokuapp.com/api/cart
 ```
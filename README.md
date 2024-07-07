# Grupo Guia Ecommerce Prueba tecnica

RODRIGO ALEJANDRO SALAZAR LIZARRAGA

## Pasos a seguir 

Primero, después de clonar mi fuente con git, necesitas configurar la base de datos. Nombre de usuario, contraseña y base de datos (el nombre de tu base de datos) en backend/config en produccion. 

Y conectarte a MySQL  Segundo, usar el cript para definir la API para Postman. 

Tercero, debes crear un producto siguiendo los parámetros que he definido con localhost/8000 o en el puert que se abrio el servidor. 
 
Cuarto, necesitas prestar atención a "Categoría" en el script para crear el producto correcto siguiendo la "Categoría". Y en seccion donde se crean las categorías. 

### `npm start`

Se usara este comando para correr ambos proyectos tanto el front como el back 

### `Purebas`

Aqui sera necesario usar el siguiente script en postman usando localhost en el puerto que se abrio el backend

### `Script para registrar usaurio y hacer pruebas de algunos produtcos con comentarios y historila de compras usando postman`


{
	"info": {
		"_postman_id": "1ea87d19-3045-4840-9eed-11b8b4444ba7",
		"name": "react-test",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "user",
			"item": [
				{
					"name": "register",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"fullname\": \"Rodrigo Salazar\",\r\n    \"email\":\"test1@gmail.com\",\r\n    \"password\": \"123456\",\r\n    \"phone\": \"3334801569\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{HOST}}/api/v1/users/register",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"users",
								"register"
							]
						}
					},
					"response": []
				},
				{
					"name": "login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"email\":\"test1@gmail.com\",\r\n    \"password\":\"123456\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{HOST}}/api/v1/users/login",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"users",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "get-list-user",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "token",
								"value": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJodW5nIG5ndXllbiIsImVtYWlsIjoiaHVuZ25ndXllbkBnbWFpbC5jb20iLCJwaG9uZSI6IjA5MDkwODA4MDkiLCJpYXQiOjE2NjY1ODM4NzksImV4cCI6MTY2Njg0MzA3OX0.vCooGjokLu7SHaByaCgqpsYvhlaVP2yyae4WCz5LS_0",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{HOST}}/api/v1/users/",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"users",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "refresh-token",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Cookie",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJodW5nIG5ndXllbiIsImVtYWlsIjoiaHVuZ25ndXllbkBnbWFpbC5jb20iLCJwaG9uZSI6IjA5MDkwODA4MDkiLCJpYXQiOjE2NjUzMDM4MzcsImV4cCI6MTY2NTU2MzAzN30.PYUV_PjaLa5iQScuQXgjP7XVTPCCyqH1Go-5HDOJa6o",
								"type": "text"
							},
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							}
						],
						"url": {
							"raw": "{{HOST}}/api/v1/users/refresh",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"users",
								"refresh"
							],
							"query": [
								{
									"key": "Cookie",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJodW5nIG5ndXllbiIsImVtYWlsIjoiaHVuZ25ndXllbkBnbWFpbC5jb20iLCJwaG9uZSI6IjA5MDkwODA4MDkiLCJpYXQiOjE2NjUzMDEzMzksImV4cCI6MTY2NTU2MDUzOX0.pSdMvtmbyHBxYGHnGR3MxxBh8vEz77b0QCd7gcQxnOs",
									"disabled": true
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "logout",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "token",
								"value": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJodW5nIG5ndXllbiIsImVtYWlsIjoiaHVuZ25ndXllbkBnbWFpbC5jb20iLCJwaG9uZSI6IjA5MDkwODA4MDkiLCJpYXQiOjE2NjUzMDQxOTEsImV4cCI6MTY2NTMwNDIyMX0.i14OtjhDS6pELLk-lXnii4O9Cd_n511VABkUdswpiXE",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{HOST}}/api/v1/users/logout",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"users",
								"logout"
							]
						}
					},
					"response": []
				},
				{
					"name": "update-user",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"fullname\": \"Rodrigo Alejandro Salazar Lizarraga\",\r\n        \"email\": \"test2@gmail.com\",\r\n        \"password\": \"123456\",\r\n        \"phone\": \"3334801569\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{HOST}}/api/v1/users/2",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"users",
								"2"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "product",
			"item": [
				{
					"name": "add-product",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\":\"Reloj ejemplo \" ,\r\n      \"description\": \"Insertando producto como ejemplo y con texto generico\",\r\n      \"price\": \"600\",\r\n      \"img1\": \"https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/07/dong-ho-nam-tsar-bomba-ceramic-bezel-waterproof-tb8208c-wblue-mau-xanh-blue-64b21f7bd5116-15072023112427.jpg\",\r\n      \"img2\": \"https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/07/dong-ho-nam-tsar-bomba-ceramic-bezel-waterproof-tb8208c-wblue-mau-xanh-blue-64b21f7beeaeb-15072023112427.jpg\",\r\n      \"img3\": \"https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/07/dong-ho-nam-tsar-bomba-ceramic-bezel-waterproof-tb8208c-wblue-mau-xanh-blue-64b21f7c17fdb-15072023112428.jpg\",\r\n      \"img4\": \"https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/07/dong-ho-nam-tsar-bomba-ceramic-bezel-waterproof-tb8208c-wblue-mau-xanh-blue-64b21f8c735ce-15072023112444.jpg\",\r\n      \"category\": \"watches\",\r\n      \"originalPrice\": \"750\",\r\n      \"promotionPercent\": \"20\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{HOST}}/api/v1/products",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"products"
							]
						}
					},
					"response": []
				},
				{
					"name": "update-product",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\":\"Reloj 2\" ,\r\n      \"description\": \"Segunda descripcion actualizando producto\",\r\n      \"price\": \"140\",\r\n      \"img1\": \"https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/07/ao-phong-versace-jeans-couture-since-1988-71gaht28-cj00t-g89-mau-den-62e4b2810dee9-30072022112433.jpg\",\r\n      \"img2\": \"https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/07/ao-phong-versace-jeans-couture-since-1988-71gaht28-cj00t-g89-mau-den-62e4b28104a3b-30072022112433.jpg\",\r\n      \"img3\": \"https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/07/ao-phong-versace-jeans-couture-since-1988-71gaht28-cj00t-g89-mau-den-62e4b280f07bd-30072022112432.jpg\",\r\n      \"img4\": \"https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/07/ao-phong-versace-jeans-couture-since-1988-71gaht28-cj00t-g89-mau-den-62e4b2811642c-30072022112433.jpg\",\r\n      \"category\": \"clothes\",\r\n      \"originalPrice\": \"150\",\r\n      \"promotionPercent\": \"20\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{HOST}}/api/v1/products/1",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"products",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "get-product-by-id",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{HOST}}/api/v1/products/2",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"products",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "get-panigation",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{HOST}}/api/v1/products/?category=clothes",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"products",
								""
							],
							"query": [
								{
									"key": "page",
									"value": "1",
									"disabled": true
								},
								{
									"key": "size",
									"value": "9",
									"disabled": true
								},
								{
									"key": "search",
									"value": "",
									"disabled": true
								},
								{
									"key": "category",
									"value": "clothes"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "cart",
			"item": [
				{
					"name": "add-to-cart",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "token",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJodW5nIG5ndXllbiIsImVtYWlsIjoiaHVuZ25ndXllbkBnbWFpbC5jb20iLCJwaG9uZSI6IjA5MDkwODA4MDkiLCJpYXQiOjE2NjYwMTYzNjYsImV4cCI6MTY2NjI3NTU2Nn0.TeAp1BHzxM3hgOV1gBn7WpnLQEYt4WqE8BxjfOt3vig",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{HOST}}/api/v1/carts?idProduct=1&productCount=2",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"carts"
							],
							"query": [
								{
									"key": "idUser",
									"value": "1",
									"disabled": true
								},
								{
									"key": "idProduct",
									"value": "1"
								},
								{
									"key": "productName",
									"value": "Adidas",
									"disabled": true
								},
								{
									"key": "productPrice",
									"value": "200",
									"disabled": true
								},
								{
									"key": "productCount",
									"value": "2"
								},
								{
									"key": "productImg",
									"value": "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/07/ao-phong-versace-jeans-couture-since-1988-71gaht28-cj00t-g89-mau-den-62e4b2810dee9-30072022112433.jpg",
									"disabled": true
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "comment",
			"item": [
				{
					"name": "get-comment",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{HOST}}/api/v1/comments/?idProduct=2",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"comments",
								""
							],
							"query": [
								{
									"key": "idProduct",
									"value": "2"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "New Request",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImZ1bGxuYW1lIjoiaGFvIG5ndXllbiIsImVtYWlsIjoiaGFvbmd1eWVuMTJAZ21haWwuY29tIiwicGhvbmUiOiIwOTA5MDkwOTA1IiwiaWF0IjoxNjc4Njk0NzkwLCJleHAiOjE2Nzg5NTM5OTB9.ZPfsXjjnw_n3_E9b5aR7VX70hYiXNBE8wVAhZ4A4OtA",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n     \"idProduct\": 1,\r\n    \"idUser\": 1,\r\n    \"fullname\": \"Test1\",\r\n    \"content\": \"Good idProduct\",\r\n    \"star1\": 1,\r\n    \"star2\": 2,\r\n    \"star3\": 3,\r\n    \"star4\": 4,\r\n    \"star5\": 5\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{HOST}}/api/v1/comments",
							"host": [
								"{{HOST}}"
							],
							"path": [
								"api",
								"v1",
								"comments"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}
react-test.postman_collection.json
Mostrando react-test.postman_collection.json.
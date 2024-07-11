# X-MATCH 
## Deployed server
- url: belum ada gan
-registered user: 
```js
[
    { 
        "username": "Rizya",
        "password": "12345",
    },
    { 
        "username": "Rafael",
        "password": "12345",
    },
    { 
        "username": "Rubenstein",
        "password": "12345",
    }
]
```
Jika mau membuat user baru, minta mohon kepada frontend untuk di daftar

&nbsp;
## Models :
_Users_
```
-   _id: ObjectId
-   username: string, required
-   email   : string, required
-   password: string, required
-   image   : string
-   intrest : string
-   dateOfBirth : string
-   status : string, default: 'unbanned'
-   history : [ ObjectId ]
-   createdAt: string
-   updatedAt: string
```

_Chats_
```
    *****TUNGGU RAFAEL BISA SOCKET BARU DIPAKE*****
```

_Categories_
```
-   _id     : ObjectId
-   name    : string
-   createdAt: string
-   updatedAt: string
```

_Events_
```
-   _id     : ObjectId
-   name    : string, required
-   category: string, required
-   address : **EXPLORE GOOGLE MAP API, RAFAEL GA TAU OUTPUTNYA APA**
-   date    : string, required
-   quota   : integer, required
-   description : string, required
-   imageLocation : **butuh diskusi**, required
-   player  : [ObjectId], required
-   author  : ObjectId, required
-   createdAt : string, required
-   updatedAt : string, required
```

## Relationship

### **Many-toMany**
relasi User dengan Event adalah many to many dimana satu user dapat mengikuti banyak event, dan satu event dapat diikuti oleh banyak user

## Endpoints :

List of available endpoints
- `POST /register`
- `POST /login`

Routes below need authentication
- `GET /user/:userId`
- `PATCH /user/:userId`
- `PATCH /banned/:userId`
- **kalo bisa udpate data dan foto satu rout, dibikin di satu route**

- `GET /events`
- `GET /event/:eventId`
- `POST /event`

- `GET /categories`

- `GET untuk socket tunggu rafael`
- ``

&nbsp;

## 1. POST /register
Request:

- body:
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_
```json
{
  "username": "integer",
  "email": "integer",
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login
Request:

- body:
```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_
```json
{
  "access_roken" : "<token>"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /user/:userId


Description:
- Mengambil satu user bedasarkan _id user

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

- params:
```json
{
  "userId": "string"
}

_Response (200 - OK)_
```json
{
    "_id": "1",
    "username": "Rizya",
    "email" : "rizya@mail.com",
    "password": "12345",
    "gender": "male",
    "image": "https://static.tvtropes.org/pmwiki/pub/images/7928682b4732ceb0c6222bb7170285ab.jpg",
    "intrest": "Gym",
    "dateOfBirth": "05-01-2001",
    "status": "unbanned",
    "history": [
        1,
        3
    ],
    "createdAt": "2024-07-08T09:26:05.000Z",
    "updatedAt": "2024-07-08T09:26:05.000Z"
    },
```

&nbsp;

## 3. PATCH /user/:userId


Description:
- udpate data user

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

- params:
```json
{
  "userId": "string"
}

- body: 
```json
{
    "gender": "male",
    "image": "https://static.tvtropes.org/pmwiki/pub/images/7928682b4732ceb0c6222bb7170285ab.jpg",
    "intrest": "Gym",
    "dateOfBirth": "05-01-2001",
    }
```
*Catatan: bisa ga clodinary sekalian di route yang sama, jika tidak bikin route baru* 

_Response (200 - OK)_
```json
{
    "_id": "1",
    "username": "Rizya",
    "email" : "rizya@mail.com",
    "password": "12345",
    "gender": "male",
    "image": "https://static.tvtropes.org/pmwiki/pub/images/7928682b4732ceb0c6222bb7170285ab.jpg",
    "intrest": "Gym",
    "dateOfBirth": "05-01-2001",
    "status": "unbanned",
    "history": [
        1,
        3
    ],
    "createdAt": "2024-07-08T09:26:05.000Z",
    "updatedAt": "2024-07-08T09:26:05.000Z"
    },
```
&nbsp;

## 4. GET /user/:userId


Description:
- Mengambil satu user bedasarkan _id user

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

- params:
```json
{
  "userId": "string"
}

_Response (200 - OK)_
```json
{
    "_id": "1",
    "username": "Rizya",
    "email" : "rizya@mail.com",
    "password": "12345",
    "gender": "male",
    "image": "https://static.tvtropes.org/pmwiki/pub/images/7928682b4732ceb0c6222bb7170285ab.jpg",
    "intrest": "Gym",
    "dateOfBirth": "05-01-2001",
    "status": "unbanned",
    "history": [
        1,
        3
    ],
    "createdAt": "2024-07-08T09:26:05.000Z",
    "updatedAt": "2024-07-08T09:26:05.000Z"
    },
```

&nbsp;

## 5. PATCH /banned/:userId


Description:
- Mengubah status user dari banned menjadi unbanned dan sebaliknya

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

- body:
```json
{
  "userId": "string"
}

_Response (200 - OK)_
```json
{
    "message": "user with the id <userId> has been banned"
}
OR
{
    "message": "user with the id <userId> has been unbanned"
}
```

## 6. GET /events

Description:
- ambil semua event yang ada

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

_Response (200 - OK)_
```json
[
    {
        "_id": "1",
        "name": "Keliling Surabaya",
        "category": "Cycling",
        "address": "",
        "kota": "Surabaya",
        "date": "09-08-2024",
        "quota": 5,
        "description": "Kita akan mengelilingi kota surabaya sampai pingsan",
        "imageLocation": "https://img.inews.co.id/media/1200/files/inews_new/2024/01/30/Julukan_kota_Surabaya.jpg",
        "player": [
            1,
            3
        ],
        "author": 1,
        "createdAt" : "2024-07-08T09:26:05.000Z",
        "updatedAt" : "2024-07-08T09:26:05.000Z"
    },
    {
        "_id": "2",
        "name": "OTW SIX PACK",
        "category": "Gym",
        "address": "",
        "kota": "Surabaya",
        "date": "11-08-2024",
        "quota": 2,
        "description": "Satu hari poll",
        "imageLocation": "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/jawapos/2021/05/wajah-baru-balai-pemuda.jpg",
        "player": [
            2
        ],
        "author": 2,
        "createdAt" : "2024-07-08T09:26:05.000Z",
        "updatedAt" : "2024-07-08T09:26:05.000Z"
    }
  ...,
]
```

&nbsp;

## 7. GET /event/:eventId


Description:
- Mengambil satu user bedasarkan _id user

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

- params:
```json
{
  "eventId": "1"
}

_Response (200 - OK)_
```json
{
    "_id": 1,
    "name": "Keliling Surabaya",
    "category": "Cycling",
    "address": "",
    "kota": "Surabaya",
    "date": "09-08-2024",
    "quota": 5,
    "description": "Kita akan mengelilingi kota surabaya sampai pingsan",
    "imageLocation": "https://img.inews.co.id/media/1200/files/inews_new/2024/01/30/Julukan_kota_Surabaya.jpg",
    "player": [
        1,
        3
    ],
    "author": 1,
    "createdAt" : "2024-07-08T09:26:05.000Z",
    "updatedAt" : "2024-07-08T09:26:05.000Z"
}
```

&nbsp;

## 8. POST /event


Description:
- Membuat event, (catatan: untuk author menggunakan user id yang login)

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

- Body:
```json
{
    "name": "Keliling Surabaya",
    "category": "Cycling",
    "address": "",
    "kota": "Surabaya",
    "date": "09-08-2024",
    "quota": 5,
    "description": "Kita akan mengelilingi kota surabaya sampai pingsan",
    "imageLocation": "https://img.inews.co.id/media/1200/files/inews_new/2024/01/30/Julukan_kota_Surabaya.jpg",
    "player": [],
    "author": 1,
}

_Response (200 - OK)_
```json
{
    "_id": 4,
    "name": "Keliling Surabaya",
    "category": "Cycling",
    "address": "",
    "kota": "Surabaya",
    "date": "09-08-2024",
    "quota": 5,
    "description": "Kita akan mengelilingi kota surabaya sampai pingsan",
    "imageLocation": "https://img.inews.co.id/media/1200/files/inews_new/2024/01/30/Julukan_kota_Surabaya.jpg",
    "player": [],
    "author": 1,
    "createdAt" : "2024-07-08T09:26:05.000Z",
    "updatedAt" : "2024-07-08T09:26:05.000Z"
}
```

&nbsp;

## 9. GET /categories

Description:
- ambil semua category yang ada

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

_Response (200 - OK)_
```json
[
    {
        "_id": 1,
        "name": "Gym",
        "createdAt" : "2024-07-08T09:26:05.000Z",
        "updatedAt" : "2024-07-08T09:26:05.000Z"
    },
    {
        "_id": 2,
        "name": "Cycling",
        "createdAt" : "2024-07-08T09:26:05.000Z",
        "updatedAt" : "2024-07-08T09:26:05.000Z"
    },
    {
        "_id": 3,
        "name": "Jogging",
        "createdAt" : "2024-07-08T09:26:05.000Z",
        "updatedAt" : "2024-07-08T09:26:05.000Z"
    }
    ]
```

&nbsp;


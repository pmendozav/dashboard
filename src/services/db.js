export const db_merchants_search =  [
    {
        "idpartner": 1,
        "name": "pavel.test",
        "type": "checkout",
        "active": "true", 
    },
    {
        "idpartner": 2,
        "name": "aldo.test",
        "type": "connect",
        "active": "None", 
    },
    {
        "idpartner": 3,
        "name": "raul.test",
        "type": "checkout", 
        "active": "true", 
    },
    {
        "idpartner": 4,
        "name": "jean.test",
        "type": "connect", 
        "active": "true", 
    },
];

export const db_merchants_details =
{
    "idpartner": 1,
    "name": "pavel.test",
    "code": "pavel.com",
    "key": "83fe5d5562d1ce",
    "type": "checkout",
    "active": "true",
    "mb": "12345",
};


export const db_merchants_api_edt_call =  [
    {
        "date": "any day",
        "error": "any error",
        "message": "any message", 
        "toShip": "country 1", 
        "toDest": "country 2",
        "products": "list of products", 
        "items": "# items", 
        "request": "any request", 
        "response": "any response", 
    }
];

export const db_merchants_api_call =  [
    {
        "name_function": "edt_call",
        "version": "44",
        "date": "1/2/3", 
        "time": "1", 
        "failed": "false",
        "num_items": "1", 
        "ip": "0.0.0.0", 
    }
];


export const db_orders_search =  [
    {
        "id": 1,
        "table": "Table",
        "column": "Column",
        "status": "Status", 
        "merchant": "Merchant", 
        "date": "Date", 
    },
    {
        "id": 2,
        "table": "Table",
        "column": "Column",
        "status": "Status", 
        "merchant": "Merchant", 
        "date": "Date", 
    },
    {
        "id": 3,
        "table": "Table",
        "column": "Column",
        "status": "Status", 
        "merchant": "Merchant", 
        "date": "Date", 
    },
    {
        "id": 4,
        "table": "Table",
        "column": "Column",
        "status": "Status", 
        "merchant": "Merchant", 
        "date": "Date", 
    },
];

export const db_order_details = {
    idorders: '666',
    idorder_bongoP: '555',
    idvend: '444',
    merchant: 'abc',
    date: '123456',
    nitems: 'x',
    boxlink: 'https://www.w3schools.com/w3css/img_lights.jpg',
    currency: 'USD',
    status: 'vend',

    items: [
        {
            sku: 'item-1',
            n: 1,
            status: 'waiting',
            price: 100,
        },
        {
            sku: 'item-2',
            n: 2,
            status: 'arrived',
            price: 10,
        },
    ],

    payment: {
        duty: 1,
        subtotal: 2,
        total: 3,
    },
};
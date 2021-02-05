import { Injectable } from "@angular/core";

function ensure<T>(argument: T | undefined): T {
    if (argument === undefined || argument === null) {
      throw new TypeError('Argument is undefined.');
    }
    return argument;
  }

export class Product {
    constructor(
      public id: number,
      public title: string,
      public price: number,
      public rating: number,
      public description: string,
      public categories: Array<string>,
      public sale?: string) { }
  }

  export class Review {
    constructor(
      public id: number,
      public productId: number,
      public timeStamp: Date,
      public user: string,
      public rating: number, 
      public comment: string) {}
  }
  
  @Injectable()
  export class ProductService {
    getProducts(): Array<Product> {
      return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
    }

    getProductById(productId: number): Product {
      return ensure(products.find(p => p.id === productId));
    }

    getReviewsForProduct(productId: number): Review[] {
      return reviews
        .filter(r => r.productId === productId)
        .map(r => new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment));
    }

    getAllCategories(): string[] {
      return ['Szosowe', 'Szosowe klasyczne', 'Górskie', 'ABC', 'DEF', 'XYZ'];
    }
  }
  
  let products = [
    {
      "id": 0,
      "title": "Pierwszy produkt",
      "price": 2299.99,
      "rating": 4.3,
      "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["Szosowe", "XYZ"],
      "sale": "-10%!"
    },
    {
      "id": 1,
      "title": "Drugi produkt",
      "price": 1699.99,
      "rating": 3.5,
      "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["Szosowe klasyczne", "XYZ"]
    },
    {
      "id": 2,
      "title": "Trzeci produkt",
      "price": 2499.99,
      "rating": 4.2,
      "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["Szosowe", "ABC"]
    },
    {
      "id": 3,
      "title": "Czwarty produkt",
      "price": 1559.99,
      "rating": 3.9,
      "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["Szosowe klasyczne", "ABC"],
      "sale": "-35%!"
    },
    {
      "id": 4,
      "title": "Piąty produkt",
      "price": 2999.99,
      "rating": 5,
      "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["Górskie", "DEF"]
    },
    {
      "id": 5,
      "title": "Szósty produkt",
      "price": 2499.99,
      "rating": 4.6,
      "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["Szosowe", "DEF"]
    },
    {
      "id": 6,
      "title": "Siódmy produkt",
      "price": 3199.99,
      "rating": 4.1,
      "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["Górskie", "DEF"]
    },
    {
      "id": 7,
      "title": "Siódmy produkt",
      "price": 2399.99,
      "rating": 3.9,
      "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["Górskie", "XYZ"]
    }
  ];

  let reviews = [
    {
      "id": 0,
      "productId": 0,
      "timestamp": "2020-12-20T02:17:00+00:00",
      "user": "Bartłomiej",
      "rating": 5,
      "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
      "id": 1,
      "productId": 0,
      "timestamp": "2021-01-20T02:53:00+00:00",
      "user": "Aleksandra",
      "rating": 3,
      "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
      "id": 2,
      "productId": 5,
      "timestamp": "2021-01-12T05:26:00+00:00",
      "user": "Paweł",
      "rating": 4,
      "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
      "id": 3,
      "productId": 2,
      "timestamp": "2021-01-09T07:20:00+00:00",
      "user": "Wiktoria",
      "rating": 4,
      "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
      "id": 4,
      "productId": 3,
      "timestamp": "2021-01-10T11:35:00+00:00",
      "user": "Kajetan",
      "rating": 5,
      "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
      "id": 5,
      "productId": 2,
      "timestamp": "2021-01-13T11:42:00+00:00",
      "user": "Justyna",
      "rating": 5,
      "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
      "id": 6,
      "productId": 6,
      "timestamp": "2021-01-07T11:42:00+00:00",
      "user": "Natalia",
      "rating": 4,
      "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
      "id": 7,
      "productId": 6,
      "timestamp": "2021-01-14T11:42:00+00:00",
      "user": "Adrian",
      "rating": 4,
      "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
      "id": 8,
      "productId": 3,
      "timestamp": "2021-01-29T11:42:00+00:00",
      "user": "Filip",
      "rating": 5,
      "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
      "id": 9,
      "productId": 7,
      "timestamp": "2021-02-01T11:42:00+00:00",
      "user": "Łucja",
      "rating": 4,
      "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    }
  ];

define({ "api": [
  {
    "type": "get",
    "url": "api/books/:abbrev",
    "title": "Get Book",
    "version": "0.2.0",
    "name": "getBook",
    "group": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "abbrev",
            "description": "<p>Abbreviation of the book</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Book author</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "chapters",
            "description": "<p>Number of chapters</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>ame of the group that the book belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Book name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "testament",
            "description": "<p>Which will is located</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"abbrev\": \"gn\",\n     \"author\": \"Moisés\",\n     \"comment\": \"Uma vez que este livro anônimo integra o Pentateuco unificado\",\n     \"chapters\": 50,\n     \"group\": \"Pentateuco\",\n     \"name\": \"Gênesis\",\n     \"testament\": \"VT\"\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://bibleapi.co/api/books/gn",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>When performing more than 50 requests at the same endpoint in an interval less than 5 minutes</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VerseNotFound",
            "description": "<p>When the verse was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 429 Too Many Requests",
          "type": "text"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"error\": {\n    \"number\": \"404\",\n    \"message\": \"Not found\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/SearchController.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "api/books/",
    "title": "Get Books",
    "version": "0.2.0",
    "name": "getBooks",
    "group": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "books",
            "description": "<p>Book list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.abbrev",
            "description": "<p>Abbreviation of the book</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.author",
            "description": "<p>Book author</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "books.chapters",
            "description": "<p>Number of chapters</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.group",
            "description": "<p>ame of the group that the book belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.name",
            "description": "<p>Book name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.testament",
            "description": "<p>Which will is located</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n    {\n        \"abbrev\": \"gn\",\n        \"author\": \"Moisés\",\n        \"chapters\": 50,\n        \"group\": \"Pentateuco\",\n        \"name\": \"Gênesis\",\n        \"testament\": \"VT\"\n    },\n    {\n        \"abbrev\": \"ex\",\n        \"author\": \"Moisés\",\n        \"chapters\": 40,\n        \"group\": \"Pentateuco\",\n        \"name\": \"Êxodo\",\n        \"testament\": \"VT\"\n    },\n    {\n        \"abbrev\": \"lv\",\n        \"author\": \"Moisés\",\n        \"chapters\": 27,\n        \"group\": \"Pentateuco\",\n        \"name\": \"Levítico\",\n        \"testament\": \"VT\"\n    },\n    {\n        \"abbrev\": \"nm\",\n        \"author\": \"Moisés\",\n        \"chapters\": 36,\n        \"group\": \"Pentateuco\",\n        \"name\": \"Números\",\n        \"testament\": \"VT\"\n    },\n    ...\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://bibleapi.co/api/books/",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>When performing more than 50 requests at the same endpoint in an interval less than 5 minutes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 429 Too Many Requests",
          "type": "text"
        }
      ]
    },
    "filename": "app/Controllers/Http/SearchController.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "api/requests/count/:period?",
    "title": "Get Count Requests",
    "version": "0.2.0",
    "name": "count",
    "group": "Requests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>[month, week, day]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Requisition url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Number of requisitions in the period</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"url\": \"/api/books/gn\",\n  \"count\": \"3\",\n}]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://bibleapi.co/api/requests/count/month",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>When performing more than 50 requests at the same endpoint in an interval less than 5 minutes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 429 Too Many Requests",
          "type": "text"
        }
      ]
    },
    "filename": "app/Controllers/Http/RequestController.js",
    "groupTitle": "Requests"
  },
  {
    "type": "get",
    "url": "api/requests/:period?",
    "title": "Get Requests",
    "version": "0.2.0",
    "name": "show",
    "group": "Requests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>[month, week, day]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Requisition url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Requisition date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"url\": \"/api/books/gn\",\n  \"date\": \"2018-12-08T22:16:52.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://bibleapi.co/api/requests/month",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>When performing more than 50 requests at the same endpoint in an interval less than 5 minutes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 429 Too Many Requests",
          "type": "text"
        }
      ]
    },
    "filename": "app/Controllers/Http/RequestController.js",
    "groupTitle": "Requests"
  },
  {
    "type": "post",
    "url": "api/search/",
    "title": "Search",
    "version": "0.2.0",
    "name": "Search",
    "group": "Search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "occoccurrences",
            "description": "<p>Number of verses found with the search</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Version name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "verses",
            "description": "<p>Verses array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "verses.book",
            "description": "<p>Abbrev of the book</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "verses.chapter",
            "description": "<p>Chapter of the verse</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "verses.number",
            "description": "<p>Verse Number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "verses.text",
            "description": "<p>Text of the verse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"occoccurrences\": 1,\n     \"version\": \"nvi\",\n     \"verses\": [\n         {\n             \"book\": \"gn\",\n             \"chapter\": 1,\n             \"number\": 1,\n             \"text\": \"No princípio Deus criou os céus e a terra.\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST \\\n https://bibleapi.co/api/search/ \\\n -H 'Content-Type: application/json' \\\n -H 'Postman-Token: 2ae92434-1f35-41e6-9e5b-33ed1c7e2c28' \\\n -H 'cache-control: no-cache' \\\n -d '{\n \"version\": \"nvi\",\n \"search\": \"No princípio Deus\"\n }'",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>When performing more than 50 requests at the same endpoint in an interval less than 5 minutes</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VerseNotFound",
            "description": "<p>When the verse was not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>When the required parameters are not sent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 429 Too Many Requests",
          "type": "text"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"error\": {\n    \"number\": \"404\",\n    \"message\": \"Not found\",\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not found\n{\n \"error\": {\n   \"number\": 400,\n   \"message\": \"Bad Request - version and search are required parameters\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/SearchController.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "api/verses/:version/:book/:chapter/:number",
    "title": "Get Verse",
    "version": "0.2.0",
    "name": "GetVerse",
    "group": "Verses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Bible Version [nvi, ra, acf, kjv, bbe]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "book",
            "description": "<p>Abbreviation of the book of the bible [gn, ex, lv, nm, dt, ..., ap]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "chapter",
            "description": "<p>Chapter of the book</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Verse Number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.abbrev",
            "description": "<p>Abbreviation of the book</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.name",
            "description": "<p>Book name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.author",
            "description": "<p>Book author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.group",
            "description": "<p>ame of the group that the book belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.version",
            "description": "<p>version Bible Version.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "chapter",
            "description": "<p>Chapter of the book</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Verse Number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the verse</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "book",
            "description": "<p>Book information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"book\": {\n    \"abbrev\": \"gn\",\n    \"name\": \"Gênesis\",\n    \"author\": \"Moisés\",\n    \"group\": \"Pentateuco\",\n    \"version\": \"nvi\"\n  },\n  \"chapter\": 1,\n  \"number\": 1,\n  \"text\": \"No princípio Deus criou os céus e a terra.\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://bibleapi.co/api/verses/nvi/gn/1/1",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>When performing more than 50 requests at the same endpoint in an interval less than 5 minutes</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VerseNotFound",
            "description": "<p>When the verse was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 429 Too Many Requests",
          "type": "text"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"error\": {\n    \"number\": \"404\",\n    \"message\": \"Not found\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/SearchController.js",
    "groupTitle": "Verses"
  },
  {
    "type": "get",
    "url": "api/verses/:version/:book/:chapter/",
    "title": "Get Verses",
    "version": "0.2.0",
    "name": "GetVerses",
    "group": "Verses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Bible Version [nvi, ra, acf, kjv, bbe]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "book",
            "description": "<p>Abbreviation of the book of the bible [gn, ex, lv, nm, dt, ..., ap]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "chapter",
            "description": "<p>Chapter of the book</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "book",
            "description": "<p>Book information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.abbrev",
            "description": "<p>Abbreviation of the book</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.name",
            "description": "<p>Book name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.author",
            "description": "<p>Book author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.group",
            "description": "<p>ame of the group that the book belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.version",
            "description": "<p>version Bible Version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "chapter",
            "description": "<p>Chapter information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "chapter.number",
            "description": "<p>Chapter of the book</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "chapter.verses",
            "description": "<p>Number of chapter verses</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "verses",
            "description": "<p>Verses of the chapter</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "verses.number",
            "description": "<p>Verse Number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "verses.text",
            "description": "<p>Text of the verse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"book\": {\n        \"abbrev\": \"sl\",\n        \"name\": \"Salmos\",\n        \"author\": \"David, Moisés, Salomão\",\n        \"group\": \"Poéticos\",\n        \"version\": \"nvi\"\n    },\n    \"chapter\": {\n        \"number\": 23,\n        \"verses\": 6\n    },\n    \"verses\": [\n        {\n            \"number\": 1,\n            \"text\": \"O Senhor é o meu pastor; de nada terei falta.\"\n        },\n        {\n            \"number\": 2,\n            \"text\": \"Em verdes pastagens me faz repousar e me conduz a águas tranqüilas;\"\n        },\n        {\n            \"number\": 3,\n            \"text\": \"restaura-me o vigor. Guia-me nas veredas da justiça por amor do seu nome.\"\n        },\n        {\n            \"number\": 4,\n            \"text\": \"Mesmo quando eu andar por um vale de trevas e morte, não temerei perigo algum, pois tu estás comigo; a tua vara e o teu cajado me protegem.\"\n        },\n        {\n            \"number\": 5,\n            \"text\": \"Preparas um banquete para mim à vista dos meus inimigos. Tu me honras, ungindo a minha cabeça com óleo e fazendo transbordar o meu cálice.\"\n        },\n        {\n            \"number\": 6,\n            \"text\": \"Sei que a bondade e a fidelidade me acompanharão todos os dias da minha vida, e voltarei à casa do Senhor enquanto eu viver.\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://bibleapi.co/api/verses/nvi/sl/23",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>When performing more than 50 requests at the same endpoint in an interval less than 5 minutes</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VerseNotFound",
            "description": "<p>When the verse was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 429 Too Many Requests",
          "type": "text"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n{\n  \"error\": {\n    \"number\": \"404\",\n    \"message\": \"Not found\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/SearchController.js",
    "groupTitle": "Verses"
  }
] });

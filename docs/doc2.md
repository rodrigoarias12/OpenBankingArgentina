---
id: doc2
title: API transacciones 
---
:::info
* Historial de transacciones.

Contiene el detalle de las transacciones que se realizaron con una cuenta.
Por el momento se encuentra en etapa de desarrollo. Pronto se agregara al proyecto.
:::


```javascript
{
    "id": "string",
    "this_account": {
      "id_this": "string",
      "bankRouting": {
        "scheme": "string",
        "address": "string"
      },
      "accountRoutings": [
        {
          "scheme": "string",
          "address": "string"
        }
      ]
    },
    "other_account": {
      "id_other": "string",
      "name": "string",
      "idType": "string",
      "bankRouting": {
        "scheme": "string",
        "address": "string"
      },
      "accountRoutings": [
        {
          "scheme": "string",
          "address": "string"
        }
      ]
    },
    "details": {
      "type": "string",
      "description": "string",
      "posted": "2021-02-02T22:21:07.993Z",
      "completed": "2021-02-02T22:21:07.993Z",
      "new_balance": {
        "currency": "string",
        "amount": "string"
      },
      "value": {
        "currency": "string",
        "amount": "string"
      }
    }
  }
```
### Respuesta API de transacciones

| Campo                              | Tipo       | Descripción                     |
| ---------------------------------- | ---------- | ------------------------------- |
| id                | string | Id de transacción |
| | |
| this_account      | Object[] | Cuenta usuario solicitante |
| ->id_this         | string | Id usuario |
| -> bankRouting    | Object [] | Datos de banco |
| ----->scheme      | string | Tipo de valor |
| ----->address     | string | Valor |
| ->accountRoutings | Object [] | Datos de cuenta |
| ----->scheme      | string | Tipo de valor |
| ----->address     | string | Valor |
| | |
| other_account     | Object[] | Cuenta de tercero |
| ->id_other        | string | Id de tercero |
| ->name            | string | Identificación de tercero |
| -> idType         | string | Tipo de cuenta |
| -> bankRouting    | Object [] | Datos de banco |
| ----->scheme      | string | Tipo de valor |
| ----->address     | string | Valor |
| ->accountRoutings | Object [] | Datos de cuenta |
| ----->scheme      | string | Tipo de valor |
| ----->address     | string | Valor |
| | |
| details           | Object [] | Detalles de la transacción |
| -> type           | string | Tipo de transacción |
| -> description    | string | Descripción de la transacción |
| -> posted         | string | Fecha inicio de transacción |
| -> completed      | string | Fecha de transacción acreditada en cuenta |
| ->new_balance     | Object[]    | Saldo en cuenta				    |
| ----> currency    | String	  | Código moneda                   |  
| ----> amount      |	Number	  | Monto                           |
| -> value          | Object[]    | Valores de transferencia				    |
| ----> currency    | String	  | Código moneda                   |  
| ----> amount      |	Number	  | Monto                           |   
 



[Analizando API de transacciones OPB project](https://apiexplorer.openbankproject.com/?tags=Transaction,Transaction-Metadata#OBPv3_0_0-getCoreTransactionsForBankAccount)
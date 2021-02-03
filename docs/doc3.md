---
id: doc3
title: API detalle cuenta
---
:::info
* API que retorna información de una cuenta. 
Fue desarrollada siguiendo los estándares de openbankingproject.
Para la especificación se hizo un análisis de las diferentes partes del mundo donde OPB ya se encuentra en funcionamiento. 
:::
```javascript
{
  "id": "string",
  "label": "string",
  "number": "string",
  "owners": [
    {
      "id_owner": "string",
      "display_name": "string"
    }
  ],
  "product_code": "string",
  "balance": {
    "currency": "string",
    "amount": "string"
  },
  "bank_id": "string",
  "account_routings": [
    {
      "scheme": "string",
      "address": "string"
    }
  ],
  "account_attributes": [
    {
      "product_code": "string",
      "account_attribute_id": "string",
      "name": "string",
      "type": "string",
      "value": "string"
    }
  ]
}
```
### Respuesta API Cuenta

| Campo                              | Tipo       | Descripción                     |
| ---------------------------------- | ---------- | ------------------------------- |
| label                              | string     | Nombre de cuenta                |
| number                             | string     | Número de cuenta                |
| owners                             | Object[]   | Integrantes de cuenta           |
| ----> id_owners                    | string     | Id integrante                   |
| ----> display_name                 | string     | Nombre de integrante            |
| balance	                         | Object[]   | Saldo en cuenta				    |
| ----> currency	                 | String	  | Código moneda                   |  
| ----> amount                       |	Number	  | Monto                           |
| bank_id                            | string     | Código de banco (1)             |
| account_routing                    | Object[]   | Información de la cuenta        |
| ----> scheme   	                 | String	  | Tipo de dato (ej:cvu,cbu)       |  
| ----> address                      |	String	  | Valor                           |

(1) [Código de bancos BCRA](https://www.bcra.gob.ar/SistemasFinancierosYdePagos/Sistema_financiero_nomina_de_entidades.asp?bco=AAA00&tipo=1)

### Utiles

https://sandbox.bind.com.ar/apidoc/#api-Cuenta-ConsultaCuenta
https://apiexplorer.openbankproject.com/#OBPv4_0_0-getCoreAccountById


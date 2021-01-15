import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

---
id: swagger
title: Swagger
---

<SwaggerUI url="https://openbankapiargentina.azurewebsites.net/swagger/v1/swagger.json"/>

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );


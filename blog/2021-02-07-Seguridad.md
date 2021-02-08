---
id: Seguridad
title: Seguridad  
author: Rodrigo Arias	
author_title: Software Engineer @ BCRA
author_url: https://www.linkedin.com/in/rodrigogonzaloarias/
author_image_url: https://avatars0.githubusercontent.com/u/7809151?s=460&u=b092d09db6eaadff118e0a691095f67ac79b4a8e&v=4
tags: [Seguridad,OAuth,Open Banking, Argentina , API bank , Banking as a Service , Apis bancos Argentina]
---

Podemos distinguir dos tópicos importantes acerca de seguridad en OpenBanking

* Como nos aseguramos el acceso a las api entre un banco y un tercero. 
* Como un usuario final da consentimiento para que una APP acceda a sus datos privados resguardados en un banco.

<!--truncate-->
### Usando OAuth
OAuth 2 es un mecanismo de autorización que le da permiso para 

a) llamar a las API y

b) acceder a los datos del usuario final (dado el consentimiento del usuario). 

Este permiso está codificado en un token de acceso que obtiene a través de las operaciones de OAuth. Cuando llamas a una API de un banco, pasas el token de acceso al encabezado de Autorización en el mensaje de solicitud.
Si se acepta el token, su solicitud se transmite a la API, que luego tiene éxito o falla por sus propios motivos. Sin embargo, si no se acepta el token, obtendrá un error 401 HTTP de la puerta de enlace.

#### Flujo de trabajo.
1.	Alta de app en banco 
Para generar un token de acceso, primero debe registrar una aplicación en portal de desarrolladores y conectarla a las API que desea utilizar.
2.	Consentimiento
El usuario final debe dar consentimiento para poder acceder a sus datos. Aquí tenemos dos formas. 

* Descentralizadas: Cada banco maneja el consentimiento de usuario sus plataformas. 

* Centralizado: Alguna entidad pública / privada se encarga llevar a cabo la validación de consentimiento por parte de los usuarios y luego los bancos consultan a este centralizador.

3.	Obtener datos de APIs
En este paso vamos a generar los token de acceso y luego consultar a las diferentes APIs

:::info
Hemos decidido no abordar este tema en nuestro sandbox ya que no es necesario para el fin del proyecto. Sin embargo, en el futuro crearemos algún proyecto que contenga un flujo en formato demo. 
:::

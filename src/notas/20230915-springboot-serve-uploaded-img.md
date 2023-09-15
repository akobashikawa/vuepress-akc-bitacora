---
tags: ["programming", "springboot", "howto"]
---

# 20230915: Spring Boot: Cómo servir imágenes subidas

- En spring boot, es posible usar una carpeta de contenido estático `src/main/resources/static/` que se visualiza en http://localhost:8080, por ejemplo
- Si se colocan una imagen `src/main/resources/static/img/img.jpg`, por ejemplo, entonces se visualiza en http://localhost:8080/img/img.jpg
- Si se reemplaza esta imagen img.jpg por una diferente pero con ese mismo nombre, el cambio no se refleja.
	- Esto se debería a que java sigue buscando al recurso que tiene en el compilado jar/war y no al que está en la carpeta
- Pero podemos crear un endpoint que busque en la carpeta y nos sirva el recurso.

```properties
# application.properties
server.error.whitelabel.enabled=false
spring.web.resources.static-locations=classpath:/static/ 

```

```java
package me.rulokoba.studio;

import java.net.MalformedURLException;
//import java.nio.file.Path;
//import java.nio.file.Paths;

import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.MediaTypeFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImageController {

    private final ResourceLoader resourceLoader;

    public ImageController(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @GetMapping("/images/{imageName}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageName) throws MalformedURLException {
        // Usando un path absoluto
        // Path imagePath = Paths.get("D:\\studio\\java\\springboot\\springboot-hola\\src\\main\\resources\\static\\img\\").resolve(imageName);
        // System.out.println(imagePath);
        // Resource resource = new UrlResource(imagePath.toUri());
        
        // Usando un path relativo
        System.out.println("classpath:/static/img/" + imageName);
        Resource resource = resourceLoader.getResource("classpath:/static/img/" + imageName);

        if (resource.exists() && resource.isReadable()) {
            MediaType mediaType = MediaTypeFactory.getMediaType(resource).orElse(MediaType.APPLICATION_OCTET_STREAM);
            return ResponseEntity.ok().contentType(mediaType).body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
}
```

- Ahora, podemos acceder a http://localhost:8080/images/img.jpg y el server nos servirá el archivo que encuentre con ese nombre en la carpeta, aunque cambie de contenido.

- Gracias ChatGPT por la ayuda :-)
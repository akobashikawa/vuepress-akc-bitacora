---
tags:
  - linux
---

# 20240724: Linux: Listar grupos

<TagLinks />

## Listar grupos

¿Cómo ver en Linux qué grupos hay y en cuáles estoy?

## getent

```
getent group
=> group_name:x:group_id:user_x,user_y
```

Muestra la lista de todos los grupos, que se guarda en `/etc/group`

Es similar a:  

```
cat /etc/group
=> group_name:x:group_id:user_x,user_y
```

## groups

```
groups antonio
=> antonio : group_x group_y group_z
```

Muestra los grupos del usuario especificado

## id

```
id antonio
=> … groups=group_x_id(groupd_x),group_y_id(group_y)
```

Muestra la lista de grupos del usuario especificado.
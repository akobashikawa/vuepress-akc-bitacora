# 20230331: SqlServer Paginación

- A un SELECT con ORDER se le puede agregar OFFSET para lograr la paginación.
- offset = (page - 1) * pageSize

```SQL
SELECT 
-- ...
ORDER BY 1
OFFSET ${offset} ROWS FETCH NEXT ${pageSize} ROWS ONLY
```
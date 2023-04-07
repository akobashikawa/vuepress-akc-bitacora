---
tags: ["bash"]
---

# 20230328: Bash prompt

<TagLinks />

- Para que en el script se pregunte por una confirmación antes de ejecutar algo:

```sh
read -p "Proceder con x? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo Procediendo con x...
    # x
fi
```

- Referencia: [How do I prompt a user for confirmation in bash script?](https://stackoverflow.com/a/1885534)
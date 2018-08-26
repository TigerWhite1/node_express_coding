### Eslint

Install :

```shell
sudo npm i -g eslint
```

create file `.eslintrc.json`

eslint config :

```json
{
  "parserOptions": {
    "ecmaVersion": 5,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "semi": 2
  },
  "env": {
    "node": true
  }
}

```

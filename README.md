# Começando

## Instalando dependências

Para começarmos será necessário a instalar o CLI \(Command Line Interface\) do Angular globalmente via npm \(dentro do prompt de comando\):

```
npm install -g @angular/cli
```

{% hint style="info" %}
Será necessário a prévia instalação do NodeJS para poder efetuar a instalação
{% endhint %}

Feito isso, vá na pasta do projeto e instale as dependências:

```text
npm install
```

As dependências são encontradas no arquivo package.json: BATATA

{% code title="package.json" %}
```javascript
...
"dependencies": {
    "@angular/animations": "~7.2.0",
    "@angular/common": "~7.2.0",
    "@angular/compiler": "~7.2.0",
    "@angular/core": "~7.2.0",
    "@angular/forms": "~7.2.0",
    "@angular/http": "^7.2.15",
    "@angular/platform-browser": "~7.2.0",
    "@angular/platform-browser-dynamic": "~7.2.0",
    "@angular/router": "~7.2.0",
    "angular-calendar": "^0.27.0",
    "angularx-flatpickr": "^6.1.0",
    "core-js": "^2.5.6",
    "date-fns": "^1.29.0",  
    "flatpickr": "^4.6.2",
    "http": "0.0.0",
    "require": "^2.4.20",
    "rxjs": "^6.5.3",
    "swal": "^0.1.0",
    "sweetalert": "^2.1.2",
    "tslib": "^1.9.0",
    "zone.js": "^0.9.1"
  }
  ...
```
{% endcode %}




cep-distance é um um pacote que calcula a distancia entre 2 ceps Brasileiros em metros ou quilômetros utilizando a (Fórmula de Haversine)[[https://en.wikipedia.org/wiki/Haversine_formula](https://en.wikipedia.org/wiki/Haversine_formula)]

---
### Exemplo

```jsx
const CepDistance  = require("cep-distance");

const cep1 = "01001-000";
const cep2 = "01310-200";

async function Start() {
// view distance in meters
	const distanceInMeters = await CepDistance (cep1, cep2, "M");
		console.log(`${distanceInMeters} Metros`); // 2658.06 Metros
		
// view distance in meters	
	const distanceInKilometers = await CepDistance (cep1, cep2, "KM");
	console.log(`${distanceInKilometers} KiloMetros`); // 2.66 KiloMetros
}

Start();
```

---
### Parâmetros

|Parâmetro|Tipo|Exemplos|
|---|---|---|
|cep1|string (required)|01001-000 ou 01001000|
|cep2|string (required)|01310-200 ou 01310200|
|unidade de medida|enum (optional)|M ou KM|

---
### Dependências

[Brasil Api](https://brasilapi.com.br/)

[nominatim](https://nominatim.openstreetmap.org/)

[Axios](https://www.npmjs.com/package/axios/)


---

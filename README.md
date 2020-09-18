# Spanish support for Schemy
Ever needed for a spanish json validator to plug quickly into your project? This is a plugin for [Schemy](https://github.com/Schemy-JS/schemy)

## Usage
Install it using npm: `npm install --save schemy-translations-spanish`, then extend Schemy with it:

```javascript
const Schemy = require('schemy');
const SchemySpanish = require('schemy-translations-spanish');

Schemy.extend([
	SchemySpanish
]);

// That's it! Just use schemy normally
const schema = new Schemy({
	title: String
});

schema.validate({title: 1});
schema.getValidationErrors(); // => [ 'La propiedad title es de tipo number, se esperaba string' ]
```
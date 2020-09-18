// Internal methods
function translateError(message) {
	return message
		.replace(
			/^Property ([a-z0-9_.]+) is (number|string|boolean|object|function), expected (number|string|boolean|object)$/ig,
			'La propiedad $1 es de tipo $2, se esperaba $3'
		)
		.replace(
			/^Property ([a-z0-9_.]+) not valid in schema$/ig,
			'La propiedad $1 no está permitida en el esquema'
		)
		.replace(
			/^Missing required property ([a-z0-9_.]+)/ig,
			'Falta una propiedad requerida: $1'
		)
		.replace(
			/^Property ([a-z0-9_.]+) is not a valid date$/ig,
			'La propiedad $1 no es una fecha válida'
		)
		.replace(
			/^Property ([a-z0-9_.]+) must contain at least ([0-9]+) characters$/ig,
			'La propiedad $1 debe contener al menos $2 caracteres'
		)
		.replace(
			/^Property ([a-z0-9_.]+) must contain less than ([0-9]+) characters$/ig,
			'La propiedad $1 debe contener menos de $2 caracteres'
		)
		.replace(
			/^Property ([a-z0-9_.]+) must be greater than ([0-9]+)$/ig,
			'La propiedad $1 debe ser mayor que $2'
		)
		.replace(
			/^Property ([a-z0-9_.]+) must be less than ([0-9]+)$/ig,
			'La propiedad $1 debe ser menor que $2'
		)
		.replace(
			/^Regex validation failed for property ([a-z0-9_.]+)$/ig,
			'Fallo la validacion para la propiedad $1'
		)
		.replace(
			/^Value for property ([a-z0-9_.]+) not in acceptable values$/ig,
			'El valor para la propiedad $1 no está entre los valores aceptados'
		)
		.replace(
			/^Property ([a-z0-9_.]+) is not a valid uuid\/(v1|v4)$/ig,
			'La propiedad $1 no es un formato uuid/$2 válido'
		)
		.replace(
			/^Property ([a-z0-9_.]+) is (number|string|boolean|object|function), expected array$/ig,
			'La propiedad $1 es de tipo $2, se esperaba un array'
		)
		.replace(
			/^An item in array of property ([a-z0-9_.]+) is not valid$/ig,
			'Un elemento en la propiedad $1 no es válido'
		)
		.replace(
			/^An item in array of property ([a-z0-9_.]+) is not valid. All items must be of type (number|string|boolean|object|function)}$/ig,
			'Un elemento en la propiedad $1 no es válido. Todos los elementos deben ser de tipo $2'
		)
		.replace(
			/^Cannot validate empty object$/ig,
			'No se puede validar un objeto vacío'
		);
}

// Schemy events handlers
function getValidationErrors() {
	this.validationErrors = this.validationErrors.map(error => translateError(error));
}

module.exports = { getValidationErrors };
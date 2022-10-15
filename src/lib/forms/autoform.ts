export const convert_schema_to_form = (schema, options = {}) => {
    console.log(schema)
    const fields = Object.keys(schema.properties).map((prop) => {
        const field = {
            name: prop,
            required: schema.required?.includes(prop) || false,
            readOnly: options.readOnly?.includes(prop),
            ...(schema.properties[prop]),
        }

        if (schema.properties[prop].properties) {
            field.fields = convert_schema_to_form(schema.properties[prop], options)
        }

        return field
    })
    return fields
}
import deepReplace from 'deep-replace';
import omitDeep from 'omit-deep';
import rename from 'deep-rename-keys';
import type { JsonSchema7Type } from 'zod-to-json-schema/src/parseDef';

export function zod_to_mongoschema(zod_schema: {
    $schema: "http://json-schema.org/draft-07/schema#";
} & JsonSchema7Type) {
    const obj = rename(zod_schema, function (key: string) {
        if (key === 'type') return 'bsonType'
        return key
    })

    deepReplace.match(
        obj,
        (value) => value === 'boolean',
        null,
        ({ obj, prop }) => {
            obj[prop] = 'bool'
        }
    )

    deepReplace.match(
        obj,
        (value) => value === 'integer',
        null,
        ({ obj, prop }) => {
            obj[prop] = 'int'
        }
    )

    deepReplace.match(
        obj,
        (value) => value === false,
        null,
        ({ obj, prop }) => {
            obj[prop] = true
        }
    )

    return omitDeep(obj, ['$schema', 'default', 'format', '_def'])
}
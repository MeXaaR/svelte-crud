import db from '$db/mongo';

export const update_db_schema = async (collection: string, json_schema) => {
    console.log(json_schema)
    return await db.command({
        collMod: collection,
        validator: {
            $jsonSchema: json_schema
        }
    })
}

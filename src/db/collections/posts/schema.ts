import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";
import { zod_to_mongoschema } from "$utilities/zod_to_mongoschema";
import { convert_schema_to_form } from "$lib/forms/autoform";

export const posts_schema = z.object({
    _id: z.string(),
    title: z.string(),
    boolean: z.boolean().optional().default(true),
    owner: z.string().optional(),
});

export type Post = z.infer<typeof posts_schema>

export const posts_raw_schema_json = zodToJsonSchema(posts_schema)
export const posts_mongo_schema = zod_to_mongoschema(posts_raw_schema_json)

export const posts_form_options = {
    readOnly: ['_id'],
    meta: ['_id', 'title', 'owner']
}

export const post_autoform_schema = convert_schema_to_form(
    posts_raw_schema_json,
    posts_form_options
)

import db from '$db/mongo'
import { update_db_schema } from '$db/utilities';
import { posts_mongo_schema, type Post } from './schema';

const posts = db.collection<Post>('posts');
update_db_schema('posts', posts_mongo_schema);

export { posts }
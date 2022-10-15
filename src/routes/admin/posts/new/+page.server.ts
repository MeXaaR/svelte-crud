import { authorize_action, get_form_data, handleActionError } from '$db/actions';
import { posts } from '$db/collections/posts/posts';
import { posts_schema } from '$db/collections/posts/schema';
import { invalid } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request, auth }): Promise<any> => {

        if (!authorize_action(auth, 'admin')) return invalid(401)

        try {
            const data = await get_form_data(request)
            const new_id = new ObjectId()
            data._id = new_id.toString() as string
            console.log(data)
            posts_schema.parse(data)
            return await posts.insertOne(data)
        } catch (error) {
            return handleActionError(error)
        }
    },

};

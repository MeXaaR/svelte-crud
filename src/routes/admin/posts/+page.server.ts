import { posts } from '$db/collections/posts/posts';
import type { Post } from '$db/collections/posts/schema';
import type { PageLoad } from '../../$types'
import { authorize_action, get_form_data, handleActionError } from '$db/actions';
import { posts_schema } from '$db/collections/posts/schema';
import { invalid } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import type { Actions } from './$types';

export const load: PageLoad = async () => {
    const data: Post[] = await posts.find({}, {}).toArray()
    return {
        posts: data
    }
}

export const actions: Actions = {
    delete: async ({ request, auth }): Promise<any> => {

        const data = await get_form_data(request)
        if (!authorize_action(auth, 'admin')) return invalid(401)
        try {
            return await posts.deleteOne({ _id: data.postId })
        } catch (error) {
            return invalid(400, error)
        }
    },

};
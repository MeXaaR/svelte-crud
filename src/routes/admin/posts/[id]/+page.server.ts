import { authorize_action, get_form_data, handleActionError } from '$db/actions';
import { posts } from '$db/collections/posts/posts';
import { posts_schema } from '$db/collections/posts/schema';
import { invalid } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageLoad } from '../../../$types'

export const load: PageLoad = async ({ params }) => {
    const data = await posts.findOne({ _id: params.id }, {})
    return {
        post: data
    }
}

export const actions: Actions = {
    default: async ({ params, request, auth }): Promise<any> => {

        if (!authorize_action(auth, 'admin')) return invalid(401)

        try {
            const data = await get_form_data(request)
            posts_schema.parse(data)
            return await posts.updateOne({ _id: data._id }, { $set: { ...data } })
        } catch (error) {
            return handleActionError(error)
        }
    },

};

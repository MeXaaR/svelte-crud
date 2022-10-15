import { invalid } from '@sveltejs/kit';
import { fromZodError } from 'zod-validation-error'

export const authorize_action = () => true;

export const get_form_data = async (request) => {
    const data = await request.formData();
    const parsedData = {};
    for (const [key, value] of data.entries()) {
        parsedData[key] = value
    }

    return parsedData
}

export const handleActionError = (error) => {
    const validationError = fromZodError(error);
    return invalid(400, validationError.details)
}
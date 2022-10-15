import { form_toast } from "./form_toast"

interface Enhance {
    message: string
}

export const form_action =
    ({ message }: Enhance, callback?: (data: any) => void) =>
        () => {
            return ({ result }) => {
                form_toast(result, message)
                if (callback) callback(result.data)
            }
        }
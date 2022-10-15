import { Snackbar } from 'svelma'

export const form_toast = (result, message: string) => {
    console.log('form_toast', result)
    Snackbar.create({ message, position: "is-bottom-right", type: "is-success" })
}
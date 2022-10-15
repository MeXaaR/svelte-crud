export type Field = {
    name: string,
    required?: string[],
    readOnly: boolean,
    type: string,
    default?: boolean | string | string[],
    enum?: string[],
    properties?: { [string]: Field },
    additionalProperties: boolean,
    fields: Field[]
    format?: string
}

export type FormErrorDataItem = {
    code: string,
    expected: string,
    received: string,
    path: string[],
    message: string
}

export type FormErrorData = {
    data: FormErrorDataItem[],
    type: string,
}
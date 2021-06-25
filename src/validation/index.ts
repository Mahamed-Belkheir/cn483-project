import Ajv, { ValidateFunction } from 'ajv';
import AjvFormats from "ajv-formats";

import { ValidationError } from '../exceptions';

const ajv = new Ajv({ allErrors: true, removeAdditional: true });
AjvFormats(ajv);

const validatorWrapper = (validator: ValidateFunction) => (data: any) => {
    if (!validator(data)) {
        throw new ValidationError(validator.errors!);
    }
    return data;
}

//@ts-ignore
const compileSchema = (schema: any) => {
    let partial = ajv.compile({ ...schema, additionalProperties: false });
    let strict = ajv.compile({ ...schema,  required: schema.properties ? Object.keys(schema.properties) : undefined, additionalProperties: false })
    return [validatorWrapper(strict), validatorWrapper(partial)];
}

//@ts-ignore
const compileArraySchema = (schema: any) => {
    let partial = ajv.compile({ type: "array", items: { ...schema, additionalProperties: false }})
    let strict = ajv.compile({ type: "array", items: { ...schema,  required: schema.properties ? Object.keys(schema.properties) : undefined, additionalProperties: false }})
    return [validatorWrapper(strict), validatorWrapper(partial)]
}

const userSchema = {
    type: "object",
    properties: {
        email: { type: "string", format: "email", maxLength: 40 },
        first_name: { type: "string", minLength: 2, maxLength: 40 },
        last_name: { type: "string", maxLength: 40 },
        password: { type: "string", minLength: 8, maxLength: 40 },
    }
}

const signinSchema = {
    type: "object",
    properties: {
        email: { type: "string", format: "email", maxLength: 40 },
        password: { type: "string", minLength: 8, maxLength: 40 },
    }
}

const [user] = compileSchema(userSchema);
const [signin] = compileSchema(signinSchema);


export const validate = {
    user,
    signin
}
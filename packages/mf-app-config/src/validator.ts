import AJV from "ajv";
import ajvErrors from "ajv-errors";
import { appConfigSchema } from "./schemas";

interface SchemaMap {
  appConfig: Record<string, any>;
}

type AvailableSchemas = keyof SchemaMap;

class SchemaValidator {
  private validator: AJV;

  constructor() {
    this.validator = new AJV({ allErrors: true, strict: true });
    ajvErrors(this.validator);
  }

  private schemaMap: SchemaMap = {
    appConfig: appConfigSchema,
  };

  public async validateSchema<T>(
    schema: AvailableSchemas,
    data: T
  ): Promise<T> {
    const validate = this.validator.compile(this.schemaMap[schema]);
    const isValid = validate(data);

    if (!isValid && validate.errors) {
      for (const error of validate.errors) {
        console.error(error);
      }

      throw new Error("invalid app config");
    }

    return data;
  }
}

export const validator = new SchemaValidator();

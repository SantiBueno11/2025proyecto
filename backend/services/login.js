import { Invalid_Arguments_exception } from "../exceptions/invalid_arguments_exception.js";
import { invalidcredentialsexceptions } from "../exceptions/invalid_credentials_exceptions.js";

export class LoginService {
  static async login(credentials) {
    if (
      !credentials ||
      !credentials.username ||
      !credentials.password ||
      typeof credentials.username !== "string" ||
      typeof credentials.password !== "string"
    )
      throw new Invalid_Arguments_exception();

    if (credentials.username !== "admin")
      throw new invalidcredentialsexceptions();

    if (credentials.password !== "1234")
      throw new invalidcredentialsexceptions();

    return {
      token: "token de acceso",
    };
  }
}

import {ErrorModel} from "../error-message/model/error-model";

export class BaseModel {

  errorMessage: string;
  errorModel: ErrorModel;

  handleError(error: any, logMessage: string): void{
    console.log(error);
    if (error && error.errorMessage) {
      this.errorMessage = error.message;
      this.errorModel = error.type;
    } else {
      this.errorMessage = 'Services are down';
    }
    console.log(logMessage);
  }
}

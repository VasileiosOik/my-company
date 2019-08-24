import {ErrorModel} from '../error-message/model/error-model';

export class BaseModel {

  errorMessage: string;
  errorModel: ErrorModel;

  handleError(error: any, logMessage: string): void {
    console.log(error);
    console.log(logMessage);
    if (error && error.error ) {
      this.errorMessage = error.error.String;
      this.errorModel = error.type;
    } else {
      this.errorMessage = 'Services are down';
    }
  }
}

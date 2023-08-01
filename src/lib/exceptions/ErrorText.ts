export class ErrorText extends Error {
  constructor(message = 'something went wrong', name = 'try again') {
    super(message);
    this.name = 'iiiiiiiiiiiiiiname';
  }
}

import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  //namespace:'https://www.google.com';
  host = 'https://api.github.com/users/hadley';
}

import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class MainPageController extends Controller {
  @action
  async myFunction(json) {
    console.log(json);
  }
}

import Route from '@ember/routing/route';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SecondPageRoute extends Route {
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
}

import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ScientistsRoute extends Route {
  async model() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
  }

  @action
  loading(transition, originRoute) {
    let controller = this.controllerFor('scientists');
    controller.set('isLoading', true);
    transition.promise.finally(function () {
      controller.set('isLoading', false);
    });

    return true; // enable bubble up
  }

  @action
  error(reason) {
    alert(reason);

    return true; // enable bubble up
  }
}

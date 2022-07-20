import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
  @action
  showPerson(id) {
    alert(`The person's id is ${id}!`);
  }
}

import { Component } from "./Component";
import { template } from "../templates/template";

export class InputForm extends Component<State> {
  render(): string {
    return template(
      `
          <label for="textMessage">Ваше сообщение:</label>
          <textarea  id='textMessage'  autofocus  class="scroll">{{text}}</textarea>
          <input type="button" id="sendBtn" value="Отправить">
        `,
      this.state
    );
  }
}
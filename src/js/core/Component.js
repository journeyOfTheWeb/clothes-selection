export class Component {
  constructor(payload = {}) {
    const {
      tagName = 'div',
      props = {}
    } = payload;
    this.el = document.createElement(tagName);
    this.props = props;
    this.render();
  }

  render() {

  }
}
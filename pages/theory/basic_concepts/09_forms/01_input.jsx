// Управляемые компоненты
// В HTML элементы формы, такие как <input>, <textarea> и <select>, обычно сами управляют своим состоянием и обновляют
// его когда пользователь вводит данные. В React мутабельное состояние обычно содержится в свойстве компонентов state и
// обновляется только через вызов setState()

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

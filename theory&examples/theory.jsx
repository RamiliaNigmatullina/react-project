// Theory (теория): render возвращает React-элемент, который является легковесным описанием того, что нужно отрендерить.
// Во время компиляции синтаксис <div /> преобразовывается в React.createElement('div').

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Список покупок для {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Пример использования: <ShoppingList name="Марк" />

// Преобразовывается в это:
/*#__PURE__*/
// React.createElement("div", {
//   className: "shopping-list"
// },
// /*#__PURE__*/React.createElement("h1", null, "Shopping List for ", props.name),
// /*#__PURE__*/React.createElement("ul", null,
// /*#__PURE__*/React.createElement("li", null, "Instagram"),
// /*#__PURE__*/React.createElement("li", null, "WhatsApp"),
// /*#__PURE__*/React.createElement("li", null, "Oculus")));


// JSX обладает всей мощью JavaScript. Каждый React-элемент является JavaScript-объектом


// onClick для DOM-элемента (например, <button>) имеет для React особое значение – это встроенный компонент.
// В React есть соглашение об именах —
// on[Имя события] для пропсов, отвечающих за события, и
// handle[Имя события] для методов обрабатывающих события.

// key в списках нужен для того, чтобы React мог отличить каждый элемент списка от других элементов
// key — это идентификатор для каждого компонента
// key — это специальное зарезервированное свойство в React.
// Хотя key выглядит как пропс, к нему нельзя обращаться через this.props.key.
// React автоматически использует key для определения того, какой компонент должен обновиться. Компонент не может узнать о своём ключе.

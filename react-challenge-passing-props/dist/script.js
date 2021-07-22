class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      partyType: "birthday",
      entertainment: "clowns",
      menu: "pizza and burgers",
      venue: {
        name: "Polly's Party Palace",
        capacity: 120 } };


  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Party, { type: this.state.partyType, ent: this.state.entertainment, venue: this.state.venue, menu: this.state.menu })));


  }}


class Party extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h3", null, "Party Time!"), /*#__PURE__*/
      React.createElement("p", null, "This ", this.props.type, " party will be held at ", this.props.venue.name, " with a maximum capacity of ", this.props.capacity), /*#__PURE__*/
      React.createElement("p", null, "Featured entertainment: ", this.props.ent, "!"), /*#__PURE__*/
      React.createElement("p", null, "Menu: ", this.props.menu, "!!")));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
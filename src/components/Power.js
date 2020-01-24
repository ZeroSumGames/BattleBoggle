import React from "react";

class Power extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      used: 0
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.usePower(id);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { single } = this.props.flower;

    this.setState({ quantity: 1 });
  }

  handleChange(event) {
    this.setState({ quantity: event.target.value });
  }

  render() {
    return (
      <div className="power">
        <img src={single.imgUrl} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // usePower: id => dispatch(usePower(id)),
    // usePowerFunc: item =>
    //   dispatch(usePowerFunc(item)),
    // addOrderToSessionForUser: item => dispatch(addOrderToSessionForUser(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Power);

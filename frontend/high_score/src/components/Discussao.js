import React, {Component} from 'react'

export default class Discussao extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="discussao">
        <fieldset>
          <h3>{this.props.resumo}</h3>
          {this.props.descricao}
        </fieldset>
      </div>
    )
  }
}

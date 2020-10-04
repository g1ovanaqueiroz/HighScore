import React, {Component} from 'react';

export default class Discussao extends Component {

  constructor(props) {
    super(props);

    this.state = {
      curtido: undefined,
    }

    this.curtir = this.curtir.bind(this);
    this.naoCurtir = this.naoCurtir.bind(this);
  }

  curtir() {
    if (!this.state.curtido) {
      this.setState({curtido:true});
    } else if (this.state.curtido) {
      this.setState({curtido:undefined});
    }
  }

  naoCurtir () {
    if (this.state.curtido == undefined) {
      this.setState({curtido:false});
    } else if (this.state.curtido == false) {
      this.setState({curtido:undefined});
    }
  }

  render() {
    return (
      <div className="comentario">
        <fieldset>
          <h4>{this.props.nomeUsuario}</h4>
          {this.props.comentarioConteudo}
          <button onClick={this.curtir}>gostei</button>
          <button onClick={this.naoCurtir}>não gostei</button>
          <input type="text"></input>
          <button>Responder</button>
        </fieldset>
      </div>
    )
  }
}
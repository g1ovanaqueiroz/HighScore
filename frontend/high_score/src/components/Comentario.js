import React, {Component} from 'react';

export default class Discussao extends Component {

  constructor(props) {
    super(props);

    this.state = {
      curtido: false,
      naoCurtido: false
    }

    this.curtir = this.curtir.bind(this);
    this.naoCurtir = this.naoCurtir.bind(this);
  }

  curtir() {
    if (!this.state.curtido && !this.state.naoCurtido) {
      this.setState({curtido:true});
    } else if (this.state.curtido && !this.state.naoCurtido) {
      this.setState({curtido:false});
    } else if (!this.state.curtido && this.state.naoCurtido) {
      this.setState({curtido:true}, {naoCurtido:false})
    }
  }

  naoCurtir () {
    if (!this.state.curtido && !this.state.naoCurtido) {
      this.setState({naoCurtido:true});
    } else if (!this.state.curtido && this.state.naoCurtido) {
      this.setState({naoCurtido:false});
    } else if (this.state.curtido && !this.state.naoCurtido) {
      this.setState({curtido:false}, {naoCurtido:true})
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
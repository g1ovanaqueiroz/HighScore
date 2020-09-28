import React, {Component} from 'react';

export default class Discussao extends Component {

  constructor(props) {
    super(props);

    this.state = {
      curtido: false,
      nao_curtido: false
    }

    this.curtir = this.curtir.bind(this);
    this.nao_curtir = this.nao_curtir.bind(this);
  }

  curtir() {
    if (!this.state.curtido && !this.state.nao_curtido) {
      this.setState({curtido:true});
    } else if (this.state.curtido && !this.state.nao_curtido) {
      this.setState({curtido:false});
    } else if (!this.state.curtido && this.state.nao_curtido) {
      this.setState({curtido:true}, {nao_curtido:false})
    }
  }

  nao_curtir () {
    if (!this.state.curtido && !this.state.nao_curtido) {
      this.setState({nao_curtido:true});
    } else if (!this.state.curtido && this.state.nao_curtido) {
      this.setState({nao_curtido:false});
    } else if (this.state.curtido && !this.state.nao_curtido) {
      this.setState({curtido:false}, {nao_curtido:true})
    }
  }

  render() {
    return (
      <div className="comentario">
        <fieldset>
          <h4>{this.props.nome_usuario}</h4>
          {this.props.comentario_conteudo}
          <button onClick={this.curtir}>gostei</button>
          <button onClick={this.nao_curtir}>não gostei</button>
          <input type="text"></input>
          <button>Responder</button>
        </fieldset>
      </div>
    )
  }
}
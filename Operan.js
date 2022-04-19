import React, { Component } from 'react'

export default class Operan extends Component {

  render() {
    return (
      <div>
          <h2>Operan State yang menjadi Props : {this.props.teks}</h2>
          <button onClick={() => this.props.gantiIndikator("Sudah Login")}>LOGIN</button>
      </div>
    )
  }
}

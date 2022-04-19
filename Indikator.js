import React, { Component } from 'react'
import Operan from './Operan';

export default class Indikator extends Component {
    constructor(props){
        super(props);
        this.state = {
            teks: "Belum Login"
        }
    }

    gantiIndikator = (teks_baru) => {
        this.setState({
            teks: teks_baru
        })
    }
  render() {
    return (
      <div>
          <h2>{this.state.teks}</h2>
          <button onClick={() => this.gantiIndikator("Sudah Login")}>LOGIN</button>
          <Operan teks={this.state.teks} gantiIndikator={this.gantiIndikator}/>
      </div>
    )
  }
}

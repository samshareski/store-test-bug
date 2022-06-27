import { Component, State, h } from '@stencil/core';
import { state, onChange } from '../../global/store';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile { 
  @State() something = 1;

  componentWillLoad() {
    onChange('clicks', (value) => {
      this.something++;
    });
  }
  
 
  handleClickPlusOne() {
    // this.clicksPlusOne++;
  }

  handleClick() {
    console.log('button clicked')
    state.clicks++;
  }

  render() {
    return (
      <div class="app-home">
        <div>Clicks: {state.clicks}</div>
        <div>Clicks + 1: {this.clicksPlusOne}</div>

        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

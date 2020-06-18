import React, { Component } from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  searchMarka = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.search(term);
  }

  // Меню с input'ами создания нового объекта

  render(){
    return(
      <div>
        <form>
          <input className='search' value={this.state.term} onChange={this.searchMarka} placeholder='Поиск'></input>
        </form>        
      </div>
    );
  }
}
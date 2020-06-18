import React, { Component } from 'react'
import './header.css'
export default class AppHeader extends Component {

  state = {
    marka: '',
    model: '',
    count: '',
    color: '',
    price: ''
  }

  // Фиксруем значения из input'ов в одноимённые переменные 

  onMarkChange = (e) => {
    this.setState({
      marka: e.target.value
    });
  };

  onModelChange = (e) => {
    this.setState({
      model: e.target.value
    });
  };

  onCountChange = (e) => {
    this.setState({
      count: +e.target.value
    });
  }

  onColorChange = (e) => {
    this.setState({
      color: e.target.value
    });
  }

  onPriceChange = (e) => {
    this.setState({
      price: +e.target.value
    });
  }

  // Обработчик формы

  onSubmit = (e) => {
    // Получаем переменные из input'ов(переменных)
    const {marka, model, count, color, price} = this.state;
    if(typeof(marka) === 'string' && typeof(model) === 'string' && !isNaN(count) && typeof(color) === 'string' && !isNaN(price)){
       e.preventDefault();
      //  Вызываем функцию, которой передаём значения
       this.props.addNewCar(marka, model, count, color, price);
      //  Очищаем переменные и input'ы
       this.state.marka = '';
       this.state.model = '';
       this.state.count = '';
       this.state.color = '';
       this.state.price = '';
    }else {
      e.preventDefault();
      alert('Введены неверные значения!');
    }
  }


  // Меню с input'ами создания нового объекта

  render(){

    return(
      <div className='header'>
        <form className='header__add-form' onSubmit={this.onSubmit}>
          <input value={this.state.marka} onChange={this.onMarkChange} placeholder='Введите Марку'></input>
          <input value={this.state.model} onChange={this.onModelChange} placeholder='Введите Модель'></input>
          <input value={this.state.count} onChange={this.onCountChange} placeholder='Введите Количество'></input>
          <input value={this.state.color} onChange={this.onColorChange} placeholder='Введите Цвет'></input>
          <input value={this.state.price} onChange={this.onPriceChange}placeholder='Введите Цену'></input>
          <button className="btn btn-dark ml-2 header__add-item">Добавить</button>
        </form>
        <button className="btn btn-dark header__filter" onClick={() => this.props.arrFilter(this.props.autoArray)}>Сортировать по новизне</button>
      </div>
    );
  }
}
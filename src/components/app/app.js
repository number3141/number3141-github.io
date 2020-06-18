import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import List from '../list/list';
import AppHeader from '../header/header'
import SearchPanel from '../header/search-panel/search-panel'
import './app.css'


export default class App extends Component {

  state = {
    autoArray : [
      this.addNewItemArray('Audi', 'Q7', 14, 'Red', 185000, 4),
      this.addNewItemArray('Audi', 'TTRS', 14, 'Green', 185000, 8),
      this.addNewItemArray('BMW', 'X6', 14, 'Black', 185000, 2),
      this.addNewItemArray('Audi', 'R8', 14, 'Yellow', 185000, 6)
    ],
    term: '' /*Нужен для поиска*/
  };

  // Создание нового объекта в массиве

  maxId = 100;

  addNewItemArray(marka, model, count, color, price, id = this.maxId, str=`${marka} ${model} ${count} ${color} ${price}`){
    return {
      marka, 
      model, 
      count, 
      color, 
      price,
      id, 
      str /* Строка для поиска записей. Не отображается на странице. Всегда заполняется по умолчанию */
    }
  }

  // Создание новой записи на странице

  addNewCar = (marka, model, count, color, price) => {

    // Создаём новый объект в массиве с пользователскими данными

    const NewAuto = this.addNewItemArray(marka, model, count, color, price);

    // Через SetState создаём новый массив из старых эл. + новый эл.

    this.setState(({autoArray}) => {
      const newArray = [...autoArray, NewAuto];
      console.log(newArray);
      return {
        autoArray: newArray
    }
    });
  };

  // Удаление записи

  deleteCar = (id) => {
      this.setState(({autoArray}) => {
        // Поиск переменной, id которой совпадает с id записи, по которой кликнули
        const idx = autoArray.findIndex((el) => el.id === id);
        // Разрезаем массив на две части и убираем нужный
        const after = autoArray.slice(0, idx);
        const before = autoArray.slice(idx+1);
        // Возвращаем изменённый массив
        const newArray = [...after, ...before];

      return {
        autoArray: newArray
      }
  })  
  }

  // Поиск записи

  search(items, term){
    // Если строка пустая - возвращается весь масив(ничего не ищется)
    if (term.length === 0) {
      return items;
    } 
    // Если строка не пустая - отбираются элементы, схожие по str - переменной, которая хранит все данные одной записи в строке
    return items.filter((item) => {
      return item.str.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })

  }

  // Функция, которая вызвыается по изменению input'а поиска и изменяет текущий term

  onSearchChange = (term) => {
    this.setState({term});
  }

  // Фильтр массива по новизне

  arrFilter = (autoArray) => {
    // Получение нового массива из развёрнутного старого.
    const newArt = autoArray.reverse();
    this.setState(() => {
      return {
        autoArray: newArt
    }
    })
  }

  render(){
    const {term, autoArray} = this.state;
    const visibleItem = this.search(autoArray, term);
    return(
      <div className='main'>
        <SearchPanel search={this.onSearchChange}/>
        <AppHeader autoArray={visibleItem} addNewCar={this.addNewCar} arrFilter={this.arrFilter}/>
          <List autoArray={visibleItem} deleteCar={this.deleteCar}/>
      </div>
    )
  }

}
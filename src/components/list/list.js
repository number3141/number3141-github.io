import React, { Component } from 'react'
import './list.css'

export default class List extends Component {

  render(){

    const {autoArray} = this.props;

    const elem = autoArray.map((key) => {
      return(
          <tr>
            <td>
              {key.marka}
           </td>
           <td>
              {key.model}
           </td>
           <td>
              {key.count}
            </td>
            <td>
              {key.color}
            </td>
            <td>
              {key.price}
            </td>
            <div>
              <button type='button' className='btn btn-outline-danger btn-sm w-60 ml-1' onClick={() => this.props.deleteCar(key.id)}>
              <i className='fa fa-trash-o'></i>
              </button>
            </div>
          </tr>
      )
    });

    return(
      <table>
        <tr>
          <td>Марка</td>
          <td>Модель</td>
          <td>Количество</td>
          <td>Цвет</td>
          <td>Цена</td>
        </tr>
        {elem}
      </table>
    )

  }

}
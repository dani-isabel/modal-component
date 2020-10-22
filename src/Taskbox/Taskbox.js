import React from 'react';
import './Taskbox.css';

export const Taskbox = () => {
    return (
        <div className='films'>
            <h3>Busca aquí tus series favoritas</h3>
            <form className='films__form'>
                <input className='films__input' type='text' placeholder='Films'/>
                <button className='films__btn'>Search</button>
            </form>
            
        </div>
    )
}

export default Taskbox
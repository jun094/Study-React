import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
//react 자체 icon들을 사용 ( icon들 중 checkbox 사용)
import styles from './CheckBox.module.css';
//module.css를 불러옴
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

console.log(styles); //확인해보면 고유한 클래스이름이 만들어지는것을 볼 수 있음 !

function CheckBox({checked, children, ...rest}) {
                                      //rest로 onChange값을 가져옴
    return (
        //<div className = {`${styles.checkbox} ${styles.exexexex}`}>  //여러개 클래스 적용하고 싶을때 너무 귀찮음!!
        //<div className = {cx('checkbox', 'exexexex')}> //bind기능을 사용함으로써 앞에 styles도 안 붙여도 되고 클래스 여러개 사용도 편리함
        <div className = {cx('checkbox')}>
            <label>
                <input type="checkbox" checked={checked} {...rest}/>
                {/*<div className = {styles.icon}>*/}
                <div className = {cx('icon')}>
                 {checked ? <MdCheckBox className = {cx('checkbox')}/> : <MdCheckBoxOutlineBlank/>}
                </div>
            </label>

            <span> {children} </span>
        </div>
    );    
}

export default CheckBox;
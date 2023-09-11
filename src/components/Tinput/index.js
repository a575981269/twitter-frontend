import style from './index.module.scss';
import { Input } from 'antd-mobile';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
const Tinput = (
    {
        label,
        value,
        length,
        onChange,
    }
) =>{
    
    const[isFocused,setIsFocused] = useState(false);
    const[hide,setHide] = useState(false);

    useEffect(() => {
        if(value){
            setIsFocused(true);
            setHide(true);
        }
    }, []);

    const onFocus = () => {
        setIsFocused(true);
        setHide(true);
    };


    const onBlur = () => {
        if(value.length === 0){
            setIsFocused(false);
        }
        setHide(false);
    };

    const onChangeHandler = (val) => {
        if(val.length > length){
            return;
        }
        onChange(val);
    }
    



    return <div className={hide ? style.tInputFocused : style.tInput}>
        <div className={ isFocused ? style.labelFocused : style.label}>
        {label}
        {hide && length && <span className={style.labelRight}>
            {value.length}
            /
            {length}

        </span>}
        </div>
        <Input 
            className={isFocused ?style.inputItemFocused:style.inputItem} 
            onFocus = {onFocus} 
            onBlur = {onBlur}
            value = {value}
            onChange = {onChangeHandler}/>
    </div>

};

Tinput.propTypes = {
    label:PropTypes.string,
    value: PropTypes.string,
    length:PropTypes.number,
    onChange:PropTypes.func
};

Tinput.defaultProps = {
    label:'',
    value:undefined,
    length:undefined,
    onChange:() => {},
}


export default Tinput;
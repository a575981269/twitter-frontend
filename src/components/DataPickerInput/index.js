import style from './index.module.scss'
import datepickerIcon from '../../assets/datepiker-icon.svg';
import { useState } from 'react';
import moment from 'moment'//用来的format那个获取的日期
import PropTypes from 'prop-types'
import { ConfigProvider,DatePicker } from "antd-mobile";
import enUS from 'antd-mobile/es/locales/en-US'


const now = new Date();
//出生日期选择器
const DatePickerInput = (
    {
        value,
        onChange,
    }
) => {

    const [visible, setVisible] = useState(false);
    const onClickDatePicker = () =>{
        setVisible(true);
    };
    return (
    <ConfigProvider locale={enUS}>
    <DatePicker 
        title='BirthDate'
        visible={visible}
        onClose={() => {
            setVisible(false);
        }} 
        onConfirm={val => {
            onChange(moment(val).format('YYYYMMDD'));
            //console.log(val);
        }}
        min={new Date(1940, 0, 1)}
        max={now}

    />

    <div className={style.birthdayInput} onClick={onClickDatePicker}> 
                <div className={style.birthdayTitleItem}>BirthDate</div>
                <div>
                    <span className={style.birthdayPlaceholder}>{value ? moment(value).format('YYYY/MM/DD'):'YYYY/MM/DD'}</span>
                    <img src = {datepickerIcon} alt = "datepickerIcon" className={style.datepickerIcon}/>
                </div>
            </div>
    </ConfigProvider>
)};

DatePickerInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}
DatePickerInput.defaultProps = {
    value:'',
    onChange:() => {}
}

export default DatePickerInput;
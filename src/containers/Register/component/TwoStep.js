import style from '../index.module.scss';
import PropTypes from 'prop-types';
import Footer from './Footer';
import {Input} from 'antd-mobile';
import {useState} from 'react';


const TwoStep = ({
    confirmRegisterHandler,
    userInfo,

}) =>{ 
    const[password,setPassword] = useState();
    const[disabled,setDisabled] = useState(true);
    const onConfirmRegister = () => {
        confirmRegisterHandler();
    };

    const onChangePwd = (val) => {
        setPassword(val);
    };

    const onChangeConfirmPwd = (val) =>{
        if(val === password){
            setDisabled(false);
            return;
        }
        setDisabled(true);
    };

    return( 
    <div className={style.TwoStep}>
        <div className={style.form}>
            <div className={style.formTitle}>Create Your Account</div>
            <div className={style.showLabelContainer}>
                <div className={style.showLabel}>
                    Name:
                    <span>{userInfo.name}</span>
                </div>
                {userInfo.email && (
                    <div className={style.showLabel}>
                        Email:
                        <span>{userInfo.email}</span>
                    </div>
                )}
                {userInfo.tel && (
                    <div className={style.showLabel}>
                        Tel:
                        <span>{userInfo.tel}</span>
                    </div>
                )}
                <div className={style.showLabel}>
                    Birthday:
                    <span>{userInfo.birthday}</span>
                </div>
            </div>
            <div className = {style.label}>
                please enter password
            </div>
            <Input className = {style.input} onChange = {onChangePwd} type = "password"/>
            <div className = {style.label} >
                enter password again
            </div>
            <Input className = {style.input} onChange = {onChangeConfirmPwd} type = "password"/>
            {disabled && <div className = {style.showTip}>password does not match</div>}
        
        </div>
            <Footer disabled = {disabled} label = "Confirm" onClickNextStep={onConfirmRegister}/>
    </div>)
};

TwoStep.propTypes = {
    confirmRegisterHandler: PropTypes.func.isRequired,
    userInfo:PropTypes.shape({
        name:PropTypes.string.isRequired,
        email:PropTypes.string.isRequired,
        tel:PropTypes.string.isRequired,
        birthday:PropTypes.string.isRequired,
    }).isRequired,
};

export default TwoStep;
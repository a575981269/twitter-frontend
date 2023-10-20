import Header from '@components/Header';
import OneStep from './component/OneStep';
import TwoStep from './component/TwoStep';
import { useState } from 'react';
//add password

const STEP = {
    ONE:1,
    TWO:2,
};

const Register = () =>{

    const [step,setStep] = useState(STEP.ONE);
    const [userInfo,setUserInfo] = useState();
    const gotoNextStepHandler = (data) => {
        setUserInfo(data);
        setStep(STEP.TWO);
    };
    const confirmRegisterHandler = (password) =>{
        console.log()
    };


    return (
    <div>
        <Header/>
        {step === STEP.ONE && <OneStep gotoNextStepHandler={gotoNextStepHandler}/>}
        {step === STEP.TWO && (
        <TwoStep 
        userInfo = {userInfo} 
        confirmRegisterHandler={confirmRegisterHandler}
        
        />)}

    </div>);
};


export default Register;
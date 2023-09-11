import { useState } from 'react';
import Footer from './component/Footer';
import style from './index.module.scss'; //module.css + sass
import Header from '@components/Header';
import DatePickerInput from '@components/DataPickerInput'
import { Form } from 'antd-mobile';
import Tinput from '@components/Tinput';

const ACCOUNT_TYPE = {
    TEL:'TEL',
    EMAIL:'EMAIL',
};

const Register = () =>{
    
    //Form data
    const [form,setForm] = Form.useForm();
    const[formData, setFormData] = useState({
        name:'',
        tel:'',
        email:'',
        birthday:'' //默认值
    });

    const[accountType, setAccountType] = useState(ACCOUNT_TYPE.EMAIL);
    const[footerButtonDisabled, setFooterButtonDisabled] = useState(true);
    const onAccountTypeChange = () =>{
        if(accountType ===ACCOUNT_TYPE.TEL){
            setAccountType(ACCOUNT_TYPE.EMAIL);
            return;
        }

        setAccountType(ACCOUNT_TYPE.TEL);
        
    };

    const onClickNextStep = async() =>{
        const validate = await form.validateFields();
        if(validate){
            const data = form.getFieldValue();
            console.log(data);
        }
    };

    const onValuesChange  = async() => {
        try{
            const validate = await form.validateFields();
            if(validate){
                setFooterButtonDisabled(false);
                return;
            }
        } catch (e){
            if (e.errorFields.length ===0){
                setFooterButtonDisabled(false);
                return;
            }
            setFooterButtonDisabled(true);
        }
        
       
    };



    return <div className='register-page'>
        <Header/>
        <div className={style.form} >
            <div className={style.formTitle}>Create Your Account</div>
            <Form form = {form} initialValues={formData} onValuesChange={onValuesChange} className={style.formContainer}>
                <Form.Item name="name" rules = {[{required:true, message:'name cannot be empty'}]}>
                    <Tinput label = "name" length = {50}/>
                </Form.Item>
                
                
                    {accountType === ACCOUNT_TYPE.TEL &&<Form.Item name = "tel" rules = {[{required:true, message:'tel must be valid',  pattern: /^(?:(?:\(\d{3}\)|\d{3})(?:[-.\s]?)\d{3}(?:[-.\s]?)\d{4})$/ }]}>
                    <Tinput label = "phone number" length = {10}/></Form.Item>}
                    
                    {accountType === ACCOUNT_TYPE.EMAIL &&<Form.Item name = "email" rules = {[{required:true, message:'email must be valid',pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}]}>
                    <Tinput label = "email" /></Form.Item>}
                        
                <span className={style.changeTypeButton} onClick = {onAccountTypeChange}>{accountType === ACCOUNT_TYPE.EMAIL ? 'change to tel number':'change to email'}</span>
                <div className={style.birthdayTitle}>BirthDate</div>
                <div>It will not display to the public, it will only be used to the information collection for the twitter</div>
                <Form.Item name = "birthday" rules = {[{required:true, message:'birthday cannot be empty'}]}>
                    <DatePickerInput  onClickNextStep = {onClickNextStep}/>
                </Form.Item>
            </Form>
        </div>
        <Footer disabled = {footerButtonDisabled}/>
    </div>
} 


export default Register;
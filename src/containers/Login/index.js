import './index.css';

import {Button, Input, Form, Dialog} from 'antd-mobile';

import { loginService } from '../../service/login'; 


const Login = () => {


    const [form] = Form.useForm();
    const onSubmit = async() => {
      const values = form.getFieldsValue();
      
      //console.log(values.username, values.password);
      try {
        const res = await loginService(values.username, values.password);
        console.log(res);
        //const data = res.data
        if(res && res.length > 0)
        {Dialog.alert({
          //content: `账号：${data.name}，密码：${data.password}`,
          //content: JSON.stringify(res),
          content:'Successfully Login!'
        }); 
        return;
      }
      Dialog.alert({
        //content: `账号：${data.name}，密码：${data.password}`,
        //content: JSON.stringify(res),
        content:'Login Error'
      })

      } catch(e) {
        console.error(e);
      }
      
    }

    const initialValues = {
        username:'Null',
        password:'123456'

    }

    return (
    <div className="login">
        <Form 
        form = {form}
        layout='horizontal' 
        mode='card' 
        initialValues={initialValues}    //在 Form 组件的 JSX 中，您使用 initialValues={initialValues}将这个常量传递给了 Form 组件，从而为它设置了 initialValues 属性。这意味着，当表单首次渲染时，它会使用这些初始值填充相应的表单字段。      
        footer={
          <Button block color='primary' onClick={onSubmit} size='large'>
            Login
          </Button>
        }>
            <Form.Item label='UserName' name = 'username'>
                <Input placeholder='Enter Here' />
            </Form.Item>
            <Form.Item label='Password' name = 'password'>
                <Input placeholder='Enter Pwd' clearable type='password' />
            </Form.Item>
        </Form>
        
    </div>
  );
}

export default Login;

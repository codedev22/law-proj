import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input ,Row , Col } from 'antd';
import '../style/auth-styles/Signup.css'
type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function Signup() {
    return (
        <div className="signup-wrapper d-flex align-items-center justify-content-center">
            <Row className="signup-body  bg-white rounded-lg max-w-[900px] shadow-2xl ">
                <Col className='p-5 border-r-2' xs={12}>
                <div>
                    <img src="" alt="" />
                </div>
                </Col>
                <Col className='signup-form p-5 col-6'>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

                </Col>
                
            </Row>

        </div>
    )
}

export default Signup

import { Button, Card, Form, Input } from 'antd';
import { Container } from './style';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Logo } from '../../../Components/Logo';

export function Login() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Container>
      <Logo labelWeight="400" labelSize="1.8rem" logoSize="2.2rem" />
      <Card
        size="default"
        title="Entrar"
        style={{ width: 400 }}
        bordered={false}
        headStyle={{ textAlign: 'center' }}
      >
        <Form
          name="normal_login"
          className="login-form"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            label="Usuário"
            rules={[{ required: true, message: 'Preencha o Usuário!' }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Usuário"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Senha"
            rules={[{ required: true, message: 'Preencha a Senha!' }]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Senha"
            />
          </Form.Item>
          <Form.Item style={{ textAlign: 'right' }}>
            <Link to="#">Esqueceu a Senha?</Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
}

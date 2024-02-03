import { Footer } from '@/components';
import { userRegister } from '@/services/beebi/userController';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText,ProFormCheckbox } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history } from '@umijs/max';
import { Tabs, message } from 'antd';
import React, { useState } from 'react';
import Settings from '../../../../config/defaultSettings';
import {Link} from "@@/exports";


const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');


  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const handleSubmit = async (values: API.UserRegisterRequest) => {
    try {
      // 注册
      const res = await userRegister(values);
      // 如果返回值的code为0，则表示注册成功，
      if (res.code === 0) {
        const defaultRegisterSuccessMessage = '注册成功！';
        message.success(defaultRegisterSuccessMessage);

        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      } else {
        // 如果失败去设置用户错误信息
        message.error(res.message);
      }
    } catch (error) {
      const defaultRegisterFailureMessage = '注册失败，请重试！';
      console.log(error);
      message.error(defaultRegisterFailureMessage);
    }
  };

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {/*这是在浏览器上方标签的标题名*/}
          {'注册'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="Bee AI - 玩转AI"
          subTitle={'Bee AI - 包含多种使用ai的功能，比如智能制图、图片识别、文字识别等。'}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserRegisterRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '账号密码注册',
              },
            ]}
          />
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入账号 '}
                rules={[
                  {
                    required: true,
                    message: '用户名是必填项！',
                  },
                  {
                    min: 4,
                    type: 'string',
                    message: '长度不能小于4！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '长度不能小于8！',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请再次输入密码'}
                rules={[
                  {
                    required: true,
                    message: '校验密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '长度不能小于8！',
                  },
                  // 验证密码和校验密码是否一致
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (getFieldValue('userPassword') !== value) {
                        return Promise.reject(new Error('校验密码不匹配'));
                      }
                      return Promise.resolve(value);
                    },
                  }),
                ]}
              />
            </>
          )}
          <ProFormCheckbox
            initialValue={true}
            name="agreeToAnAgreement"
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(new Error('同意协议后才可以注册'));
                  }
                  return Promise.resolve();
                },
                required: true,
              }),
            ]}
          >
            同意并接受《
            <a
              target={'_blank'}
              // todo 写一个自己的协议
              // href={"https://gitee.com/qimu6/statement/blob/master/%E9%9A%90%E7%A7%81%E5%8D%8F%E8%AE%AE.md#%E6%9F%92%E6%9C%A8%E6%8E%A5%E5%8F%A3-%E9%9A%90%E7%A7%81%E6%9D%A1%E6%AC%BE"}
              rel="noreferrer"
            >
              隐私协议
            </a>
            》《
            <a
              target={'_blank'}
              // href={"https://gitee.com/qimu6/statement/blob/master/%E6%9F%92%E6%9C%A8%E6%8E%A5%E5%8F%A3%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE.md#%E6%9F%92%E6%9C%A8%E6%8E%A5%E5%8F%A3%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE"}
              rel="noreferrer"
            >
              用户协议
            </a>
            》
          </ProFormCheckbox>
          <div
            style={{
              marginTop: -18,
            }}
          >
            <Link
              to={'/user/login'}
              style={{
                float: 'right',
              }}
            >
              已有账号?点击前往登录
            </Link>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Register;

import { Form, Input, Button } from 'antd';
import React from 'react'
import styled from 'styled-components'
import { TwitterOutlined, YoutubeOutlined, FacebookOutlined } from '@ant-design/icons';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { USER_SIGN_IN_SAGA } from '../../../redux/constants/CyberBugs/CyberBugsConst';
import { signInCyberBugsAction } from '../../../redux/actions/CyberBugsAction';

const StyleTotal = styled.div`
  .LoginCyberBugs{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .formCyber{
      .email{
        margin-bottom: 10px;
        padding: 7px;
      }
      .password{
        margin-bottom: 15px;
        padding: 7px;
      }
      .buttonLogin{
        width: 100%;
        font-size: 16px;
        font-weight: 600;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .contact{
      margin-top: 20px;
      .social-icon{
        width: 40px;
        height: 40px;
        line-height: 35px;
        font-size: 25px;
        margin-right: 10px;
        border-radius: 50%;
        cursor: pointer;
      }
      .twitter{
        background-color: #1DA1F2;
        color: white;
      }
      .youtube{
        color: white;
        background-color: #FF0000;
      }
      .facebook{
        color: white;
        background-color: #3b5998;
      }
    }
  }

`;



function LoginCyberBugs(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <StyleTotal>
      <div className='LoginCyberBugs' style={{ height: window.innerHeight }}>
        <div style={{width: 330}}>
          <h3 className='title mb-4'>Login CyberBugs</h3>
          <form onSubmit={handleSubmit} className='formCyber'>
            <Form.Item>
              <Input onChange={handleChange} className='email' type="email" name="email" placeholder="Enter your email" />
              {errors.email && touched.email ? <p className='text-danger' style={{textAlign: 'left'}}>{errors.email}</p> : ''}
            </Form.Item>

            <Form.Item>
              <Input onChange={handleChange} className='password' type="password" name="password" placeholder="Enter your password" />
              {errors.password && touched.password ? <p className='text-danger' style={{textAlign: 'left'}}>{errors.password}</p> : ''}
            </Form.Item>
            <Button className='buttonLogin' type="primary" htmlType="submit">Login</Button>
          </form>
          <div className='contact'>
            <TwitterOutlined className='social-icon twitter' />
            <YoutubeOutlined className='social-icon youtube' />
            <FacebookOutlined className='social-icon facebook' />
          </div>
        </div>
      </div>
    </StyleTotal>
  )
}

const LoginCyberBugsWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required('Email is required!').email('Email is invalid!'),
    password: Yup.string().required('Password is required!').min(6, 'Password must be at least 6 characters!').max(32, 'Password must be at most 32 characters!')
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    
    props.dispatch(signInCyberBugsAction(values.email, values.password));

  }
})(LoginCyberBugs);

export default connect()(LoginCyberBugsWithFormik);



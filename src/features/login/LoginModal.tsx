import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { updateEmail, updatePassword } from './loginSlice';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { updateUser } from '../user/userSlice';
import LoginSuccessModal from '../../components/LoginSuccessModal';

const LoginModal = (props: any) => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state: any) => state.login);
  const [openLoginSuccessModal, setOpenLoginSuccessModal] = React.useState<boolean>(false);
  const [isLoginSuccess, setIsLoginSuccess] = React.useState<boolean>(false);

  const HandleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = {
      email,
      password
    };

    try {
      let response = await axios.post('https://flowrspot-api.herokuapp.com/api/v1/users/login', formData);
      let authToken = response.data.auth_token;
      response = await axios.get('https://flowrspot-api.herokuapp.com/api/v1/users/me', {
        headers: {
          'Authorization': 'Basic ' + authToken,
        }
      });
      const userData = {
        id: response.data.user.id,
        firstName: response.data.user.first_name,
        lastName: response.data.user.last_name
      }
      dispatch(updateUser(userData));
      setIsLoginSuccess(true);
      setOpenLoginSuccessModal(true);
    } catch (error) {
      console.error('Login failed:', error);
      setIsLoginSuccess(false);
    }
  };

  return (
    <>
      {!isLoginSuccess && (
        <Modal show={props.showModal} centered>
          <div className='register-modal'>
            <Modal.Body>
              <p className='register-modal__title'>Welcome Back</p>
              <form onSubmit={HandleSubmit}>
                <Row>
                  <div>
                    <FloatingLabel controlId="email" label="Email">
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(event) =>
                          dispatch(updateEmail(event.target.value))
                        }
                        className="register-modal__input"
                      />
                    </FloatingLabel>
                  </div>
                </Row>
                <Row>
                  <div>
                    <FloatingLabel controlId="password" label="Password">
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(event) =>
                          dispatch(updatePassword(event.target.value))
                        }
                        className="register-modal__input"
                      />
                    </FloatingLabel>
                  </div>
                </Row>
                <Button type="submit" className='register-modal__submit-button'>Login to your Account</Button>
              </form>
              <div style={{ width: "100%" }}>
                <Button variant="secondary" onClick={props.handleClose} className='register-modal__close-button'>
                  I don't want to Login
                </Button>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      )}
      {isLoginSuccess && (
        <LoginSuccessModal
          showModal={openLoginSuccessModal}
          handleClose={() => setOpenLoginSuccessModal(false)}
        />
      )}
    </>
  );

};

export default LoginModal;

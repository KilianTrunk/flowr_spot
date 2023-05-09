import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import {
  updateFirstName,
  updateLastName,
  updateDateOfBirth,
  updateEmail,
  updatePassword,
} from './registerSlice';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import SignupSuccessModal from '../../components/SignupSuccessModal';
import LoginModal from '../login/LoginModal';

const RegisterModal = (props: any) => {
  const dispatch = useDispatch();
  const [isRegisterSuccess, setIsRegisterSuccess] = React.useState<boolean>(false);
  const [openSignupSuccessModal, setOpenSignupSuccessModal] = React.useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: '',
  });
  const { firstName, lastName, dateOfBirth, email, password } = useSelector(
    (state: any) => state.register
  );

  const validate = () => {
    let isValid = true;

    // Validate firstName field
    if (firstName === '') {
      setErrors((prevState) => ({
        ...prevState,
        firstName: 'Please enter your first name.',
      }));
      isValid = false;
    }

    // Validate lastName field
    if (lastName === '') {
      setErrors((prevState) => ({
        ...prevState,
        lastName: 'Please enter your last name.',
      }));
      isValid = false;
    }

    // Validate dateOfBirth field
    if (dateOfBirth === '') {
      setErrors((prevState) => ({
        ...prevState,
        dateOfBirth: 'Please select your date of birth.',
      }));
      isValid = false;
    }

    // Validate email field
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: 'Please enter a valid email address.',
      }));
      isValid = false;
    }

    // Validate password field
    if (password.length < 6) {
      setErrors((prevState) => ({
        ...prevState,
        password: 'Password should be at least 6 characters long.',
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (validate()) {
      const formData = {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        date_of_birth: dateOfBirth,
      };

      try {
        console.log(formData);
        const response = await axios.post(
          'https://flowrspot-api.herokuapp.com/api/v1/users/register',
          formData
        );
        console.log('Registration successful:', response.data);
        setIsRegisterSuccess(true);
        setOpenSignupSuccessModal(true);
      } catch (error) {
        console.error('Registration failed:', error);
        setIsRegisterSuccess(false);
      }
    }
  };

  return (
    <>
      {!isRegisterSuccess && (
        <Modal show={props.showModal} centered>
          <div className='register-modal'>
            <Modal.Body>
              <p className='register-modal__title'>Create an Account</p>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <div>
                      <FloatingLabel controlId="firstName" label="First Name">
                        <Form.Control
                          type="text"
                          value={firstName}
                          onChange={(event) => {
                            dispatch(updateFirstName(event.target.value));
                            setErrors((prevState) => ({
                              ...prevState,
                              firstName: '',
                            }));
                          }}
                          className="register-modal__input"
                          isInvalid={errors.firstName !== ''}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstName}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <FloatingLabel controlId="lastName" label="Last Name">
                        <Form.Control
                          type="text"
                          value={lastName}
                          onChange={(event) => {
                            dispatch(updateLastName(event.target.value));
                            setErrors((prevState) => ({
                              ...prevState,
                              lastName: '',
                            }));
                          }}
                          className="register-modal__input"
                          isInvalid={errors.lastName !== ''}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lastName}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div>
                    <FloatingLabel controlId="dateOfBirth" label="Date of Birth">
                      <Form.Control
                        type="date"
                        value={dateOfBirth}
                        onChange={(event) => {
                          dispatch(updateDateOfBirth(event.target.value));
                          setErrors((prevState) => ({
                            ...prevState,
                            dateOfBirth: '',
                          }));
                        }}
                        className="register-modal__input"
                        isInvalid={errors.dateOfBirth !== ''}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.dateOfBirth}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </div>
                </Row>
                <Row>
                  <div>
                    <FloatingLabel controlId="email" label="Email">
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(event) => {
                          dispatch(updateEmail(event.target.value));
                          setErrors((prevState) => ({
                            ...prevState,
                            email: '',
                          }));
                        }}
                        className="register-modal__input"
                        isInvalid={errors.email !== ''}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </div>
                </Row>
                <Row>
                  <div>
                    <FloatingLabel controlId="password" label="Password">
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(event) => {
                          dispatch(updatePassword(event.target.value));
                          setErrors((prevState) => ({
                            ...prevState,
                            password: '',
                          }));
                        }}
                        className="register-modal__input"
                        isInvalid={errors.password !== ''}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </div>
                </Row>
                <Button type="submit" className='register-modal__submit-button'>Create Account</Button>
              </form>
              <div style={{ width: "100%" }}>
                <Button variant="secondary" onClick={props.handleClose} className='register-modal__close-button'>
                  I don't want to register
                </Button>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      )}
      {isRegisterSuccess && (
        <>
          <SignupSuccessModal
            showModal={openSignupSuccessModal}
            handleClose={() => {
              setOpenSignupSuccessModal(false);
              setOpenLoginModal(true);
            }}
          />
          <LoginModal showModal={openLoginModal} handleClose={() => setOpenLoginModal(false)} />
        </>
      )}
    </>
  );
};

export default RegisterModal;

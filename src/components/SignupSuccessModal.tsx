import { Button, Modal } from 'react-bootstrap';

const SignupSuccessModal = (props: any) => {
    return (
        <>
            <Modal show={props.showModal} centered>
                <div className='register-modal'>
                    <Modal.Body>
                        <p className='register-modal__title'>Congratulations! You have successfully signed up for FlowrSpot!</p>
                        <Button onClick={props.handleClose} className='register-modal__submit-button'>OK</Button>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
};

export default SignupSuccessModal;

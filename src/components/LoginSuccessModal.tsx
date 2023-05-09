import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import UserProfileModal from '../features/user/UserProfileModal';

const LoginSuccessModal = (props: any) => {
    const [openUserProfileModal, setOpenUserProfileModal] = React.useState<boolean>(false);
    const [isOpenUserProfileModalTriggered, setIsOpenUserProfileModalTriggered] = React.useState<boolean>(false);

    return (
        <>
            {!isOpenUserProfileModalTriggered && (
                <Modal show={props.showModal} centered>
                    <div className='register-modal'>
                        <Modal.Body>
                            <p className='register-modal__title'>Congratulations! You have successfully logged into FlowrSpot!</p>
                            <Button onClick={props.handleClose} className='register-modal__submit-button'>OK</Button>
                            <div style={{ width: "100%" }}>
                                <Button variant="secondary" className='register-modal__close-button' onClick={() => {
                                    setOpenUserProfileModal(true);
                                }}>
                                    PROFILE
                                </Button>
                                <UserProfileModal
                                    showModal={openUserProfileModal}
                                    handleClose={() => {
                                        setOpenUserProfileModal(false);
                                        setIsOpenUserProfileModalTriggered(true);
                                    }}
                                />
                            </div>
                        </Modal.Body>
                    </div>
                </Modal>
            )}

        </>
    );
};

export default LoginSuccessModal;

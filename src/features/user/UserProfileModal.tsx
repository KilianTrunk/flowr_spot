import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import profilePic from "../../images/profile-holder.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

const UserProfileModal = ({ showModal, handleClose }: { showModal: boolean, handleClose: () => void }) => {
  const user: User = useSelector((state: any) => state.user);

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton style={{border: "none"}} />
      <Modal.Body className='user-profile-modal'>
        <Row>
          <Col lg={3}>
            <img src={profilePic} alt="profile_picture" />
          </Col>
          <Col><p className='user-profile-modal__user-name-and-last-name'>{user.firstName} {user.lastName}</p></Col>
        </Row>
        <div className='user-profile-modal__user-data'>
          <p className='user-profile-modal__user-data__title'>First Name</p>
          <p>{user.firstName}</p>
          <p className='user-profile-modal__user-data__title'>Last Name</p>
          <p>{user.lastName}</p>
        </div>
        <Row className="justify-content-md-center">
          <Button variant="secondary" onClick={() => window.location.reload()} className='register-modal__submit-button' style={{ maxWidth: "35%" }}>
            Logout
          </Button>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default UserProfileModal;


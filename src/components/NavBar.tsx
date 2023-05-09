import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RegisterModal from '../features/register/RegisterModal';
import LoginModal from '../features/login/LoginModal';
import UserProfileModal from '../features/user/UserProfileModal';
import ProfilePic from "../images/menu_profile_holder.png"

const NavBar = () => {
  const [openRegisterModal, setOpenRegisterModal] = React.useState<boolean>(
    false
  );
  const [openLoginModal, setOpenLoginModal] = React.useState<boolean>(false);
  const [openUserProfileModal, setOpenUserProfileModal] = React.useState<boolean>(false);
  const user = useSelector((state: any) => state.user);

  return (
    <Navbar expand="lg">
      <Container fluid style={{ padding: '1vh 1vw' }}>
        <Navbar.Brand href="/">
          <img src={logo} className="d-inline-block align-top navbar__logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ border: 'none' }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end align-items-center" style={{ width: '100%' }}>
            <Nav.Link href="/flowers" className="navbar__item">
              Flowers
            </Nav.Link>
            <Nav.Link href="/sightings" className="navbar__item">
              Latest Sightings
            </Nav.Link>
            <Nav.Link href="/favorites" className="navbar__item">
              Favorites
            </Nav.Link>
            {user.id ? (
              <>
              <div style={{marginTop: "0.26rem"}}>
                <Nav.Link className="navbar__item" onClick={() => setOpenUserProfileModal(true)}>
                  {user.firstName} {user.lastName}
                  <img src={ProfilePic} alt="profile-picture" className='navbar__profile-picture' />
                </Nav.Link>
                </div>
                <UserProfileModal
                  showModal={openUserProfileModal}
                  handleClose={() => setOpenUserProfileModal(false)}
                />
              </>
            ) : (
              <>
                <Nav.Link
                  className="navbar__item"
                  style={{ color: '#DF9186' }}
                  onClick={() => setOpenLoginModal(true)}
                >
                  Login
                </Nav.Link>
                <Button
                  variant="secondary"
                  className="navbar__button"
                  onClick={() => setOpenRegisterModal(true)}
                >
                  New Account
                </Button>
              </>
            )}
            <RegisterModal
              showModal={openRegisterModal}
              handleClose={() => setOpenRegisterModal(false)}
            />
            <LoginModal
              showModal={openLoginModal}
              handleClose={() => setOpenLoginModal(false)}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
import { render } from '@testing-library/react'
import NavBar from '../components/NavBar'

describe('NavBar', () => { 
    it("should render without crashing", () => {
      const { getByTestId } = render(<NavBar />);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect( getByTestId("navbar")).toBeTruthy();
    });
 })
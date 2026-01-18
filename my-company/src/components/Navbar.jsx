import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#222',
        padding: '15px 30px'
      }}
    >
      {/* Logo / Company Name */}
      <h2 style={{ color: 'white', margin: 0 }}>
        My Company
      </h2>

      {/* Navigation Links */}
      <div>
        <Link
          to="/"
          style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}
        >
          About
        </Link>

        <Link
          to="/services"
          style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}
        >
          Services
        </Link>

        <Link
          to="/contact"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

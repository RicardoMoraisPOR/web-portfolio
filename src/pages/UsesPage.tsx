import { Link } from 'react-router-dom';

const UsesPage = () => {
  return (
    <div style={{ display: 'flex', maxWidth: '700px' }}>
      <span>
        Here's a collection of the tools and products I rely on to build
        software, stay productive. Inspired by{' '}
        <Link to="https://uses.tech/">uses.tech</Link>
      </span>
    </div>
  );
};

export default UsesPage;

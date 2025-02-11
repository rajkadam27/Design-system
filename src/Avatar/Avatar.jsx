import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ username, src, size, loading, color, disabled }) => {
  const sizeMap = {
    small: '30px',
    medium: '50px',
    large: '70px',
  };

  const avatarSize = sizeMap[size] || sizeMap.medium; // Default size is medium

  const colorMap = {
    positive: '#28a745', // Green
    negative: '#dc3545', // Red
    all: '#ffc107', // Yellow
    info: '#17a2b8', // Blue
  };

  const avatarColor = colorMap[color] || color || '#007bff'; // Default blue

  const styles = {
    background: loading ? '#f0f0f0' : src ? 'transparent' : avatarColor,
    color: loading ? '#000' : src ? 'transparent' : '#fff',
    width: avatarSize,
    height: avatarSize,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: loading ? '16px' : '20px',
    fontWeight: 'bold',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
  };

  const renderContent = () => {
    if (loading) {
      return '...'; // Loading text
    }

    if (src) {
      return <img src={src} alt={username} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />;
    }

    return username.substring(0, 1); // First letter of the username
  };

  return (
    <div style={styles} disabled={disabled}>
      {renderContent()}
    </div>
  );
};

Avatar.propTypes = {
  username: PropTypes.string.isRequired,
  src: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  loading: PropTypes.bool,
  color: PropTypes.oneOf(['positive', 'negative', 'all', 'info']),
  disabled: PropTypes.bool,
};

Avatar.defaultProps = {
  src: null,
  size: 'medium',
  loading: false,
  color: 'info', // Default to "info"
  disabled: false,
};

export default Avatar;

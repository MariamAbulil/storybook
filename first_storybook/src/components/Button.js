import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';  // تأكد من أنك ضايفه الأنماط في ملف CSS منفصل

const Button = ({ variant, size, color, children }) => {
  const baseClass = 'button'; // الكلاس الأساسي للزر
  const variantClass = variant ? `button--${variant}` : '';
  const sizeClass = size ? `button--${size}` : '';
  const colorClass = color ? `button--${color}` : '';

  return (
    <button className={`${baseClass} ${variantClass} ${sizeClass} ${colorClass}`}>
      {children}
    </button>
  );
};

// تحديد أنواع البيانات للـ props
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['blue', 'red', 'green']),
  children: PropTypes.node.isRequired,
};

// القيم الافتراضية
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  color: 'blue',
};

export default Button;

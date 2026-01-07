import './styles.css';

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  // Styling props
  className = '',
  variant = 'default', // 'default', 'outline', 'text'
  // Icon props
  icon,
  iconPosition = 'left', // 'left' or 'right'
  // Hover text change props
  defaultText,
  hoverText,
  // Color props
  backgroundColor = '#ffffff',
  color = '#333333',
  borderColor,
  // Hover colors
  hoverBackgroundColor = '#e9ecef',
  hoverColor,
  hoverBorderColor,
  // Size props
  width,
  minWidth,
  height = '44px',
  padding = '10px 24px',
  // Border props
  borderRadius = '100px',
  borderWidth = '0px',
  // Font props
  fontSize = '16px',
  fontWeight = '500',
  // Custom styles
  customStyles = {},
  // Additional props
  ...rest
}) => {
  // Build inline styles
  const buttonStyles = {
    backgroundColor,
    color,
    borderColor: borderColor || backgroundColor,
    borderWidth,
    borderStyle: borderWidth !== '0px' ? 'solid' : 'none',
    borderRadius,
    padding,
    fontSize,
    fontWeight,
    height,
    width: width || 'auto',
    minWidth: minWidth || 'auto',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.3s ease',
    ...customStyles
  };

  // Handle hover styles via CSS custom properties or data attributes
  const hoverStyles = {
    '--hover-bg-color': hoverBackgroundColor,
    '--hover-color': hoverColor || color,
    '--hover-border-color': hoverBorderColor || borderColor || backgroundColor,
  };

  // Combine all styles
  const finalStyles = {
    ...buttonStyles,
    ...hoverStyles
  };

  // Build class names
  const baseClassName = 'veeyaa-button';
  const variantClassName = `veeyaa-button-${variant}`;
  const disabledClassName = disabled ? 'veeyaa-button-disabled' : '';
  const finalClassName = `${baseClassName} ${variantClassName} ${disabledClassName} ${className}`.trim();

  // Render icon
  const renderIcon = () => {
    if (!icon) return null;
    
    if (typeof icon === 'string') {
      return <i className={icon} />;
    }
    return icon;
  };

  // Render content with hover text change
  const renderContent = () => {
    // If hover text is provided, render with hover text change
    if (hoverText && defaultText) {
      return (
        <>
          {icon && iconPosition === 'left' && <span className="veeyaa-button-icon">{renderIcon()}</span>}
          <span className="veeyaa-button-hover-text">{hoverText}</span>
          <span className="veeyaa-button-default-text">{defaultText}</span>
          {icon && iconPosition === 'right' && <span className="veeyaa-button-icon">{renderIcon()}</span>}
        </>
      );
    }

    // If only defaultText is provided (no hover change)
    if (defaultText) {
      return (
        <>
          {icon && iconPosition === 'left' && <span className="veeyaa-button-icon">{renderIcon()}</span>}
          <span>{defaultText}</span>
          {icon && iconPosition === 'right' && <span className="veeyaa-button-icon">{renderIcon()}</span>}
        </>
      );
    }

    // Default: render children with icon if provided
    return (
      <>
        {icon && iconPosition === 'left' && <span className="veeyaa-button-icon">{renderIcon()}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="veeyaa-button-icon">{renderIcon()}</span>}
      </>
    );
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
      style={finalStyles}
      data-hover-bg={hoverBackgroundColor}
      data-hover-color={hoverColor || color}
      data-hover-border={hoverBorderColor || borderColor || backgroundColor}
      {...rest}
    >
      {renderContent()}
    </button>
  );
};

export default Button;


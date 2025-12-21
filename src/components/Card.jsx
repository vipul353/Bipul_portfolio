import './Card.css';

export const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hoverable = true,
  onClick 
}) => {
  return (
    <div 
      className={`card card--${variant} ${hoverable ? 'card--hoverable' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick(e) : undefined}
    >
      {children}
    </div>
  );
};

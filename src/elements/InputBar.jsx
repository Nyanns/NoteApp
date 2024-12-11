import PropTypes from "prop-types";

function InputBar({ className, placeholder, value, onChange, type = "text" }) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

// Prop validation
InputBar.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string, // Validasi untuk 'type'
};

export default InputBar;

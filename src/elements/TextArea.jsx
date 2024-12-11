import PropTypes from "prop-types";

function TextArea({ className, placeholder, value, onChange, type = "text" }) {
  return (
    <textarea
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

// Prop validation
TextArea.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string, // Validasi untuk 'type'
};

export default TextArea;

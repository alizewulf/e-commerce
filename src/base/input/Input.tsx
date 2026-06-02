type AuthInputProps = {
  type: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
};

function AuthInput({
  type,
  placeholder,
  required,
  value,
  onChange,
}: AuthInputProps) {
  return (
    <div className="border-b border-b-black">
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full outline-0"
      />
    </div>
  );
}

export default AuthInput;
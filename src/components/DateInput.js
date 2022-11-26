const DateInput = ({ inputRef, handleDateChange }) => {
  return (
    <input
      ref={inputRef}
      type="date"
      aria-label="Date of the simulated day"
      min="2022-12-01"
      max="2022-12-25"
      defaultValue="2022-12-01"
      onChange={handleDateChange}
    />
  );
};

export default DateInput;

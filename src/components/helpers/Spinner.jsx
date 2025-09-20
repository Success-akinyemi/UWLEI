
function Spinner ({ bgStyle, spinnerStyle }) {
  return (
    <div className={`flex items-center justify-center h-screen ${bgStyle || ''}`}>
      <div
        className={`h-12 w-12 animate-spin rounded-full border-4 border-amber-yellow-light border-t-amber-yellow ${spinnerStyle || ''}`}
        role="status"
      ></div>
    </div>
  );
};
export default Spinner;

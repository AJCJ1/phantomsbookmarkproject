// simple component that loads over top of the application on awaiting URL validation
const LoadingModal = () => {
  return (
    <div className="modal-main">
      <h2 className="modal-text">Checking if this website exists...</h2>
      <h2 className="modal-icon">👻</h2>
    </div>
  );
};

export default LoadingModal;

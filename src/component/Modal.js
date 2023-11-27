function Modal({ isvisible, closeModal, children }) {
  if (!isvisible) {
    return null;
  }
  const handleCloseOnBackDrop = (e) => {
    console.dir(e.target);
    if (e.target.id === "wrapper") {
      closeModal();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={(e) => handleCloseOnBackDrop(e)}>
      <div className="w-[600px] flex flex-col">
        <button
          onClick={closeModal}
          className="text-lg text-white self-end hover:text-red-500">
          <i class="fa-solid fa-x"></i>
        </button>
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
}

export default Modal;

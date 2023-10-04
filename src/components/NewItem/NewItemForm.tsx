import '../../styles/NewItemForm.css';

const NewItemForm = () => {
  return (
    <form>
      <div className="new-item__controls">
        <div className="new-item__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-item__control">
          <label>Party</label>
          <input type="text" />
        </div>
        <div className="new-item__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
      </div>
      <div className="new-item__actions">
        <button type="submit">add item</button>
      </div>
    </form>
  );
};

export default NewItemForm;

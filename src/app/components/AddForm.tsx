import React from "react";

const AddForm = ({ handleSubmit }: { handleSubmit: React.FormEventHandler<HTMLFormElement> }) => {
   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Add a new todo"
         />
         <button type="submit">Add</button>
      </form>
   );
};

export default AddForm;

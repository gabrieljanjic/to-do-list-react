const EachTask = ({ taskList, removeTask }) => {
  return (
    <>
      {taskList.map((t, index) => {
        return (
          <div key={index} className="added-task-container">
            <p className="added-task">{t}</p>
            <button className="x" onClick={() => removeTask(index)}>
              ❌
            </button>
          </div>
        );
      })}
    </>
  );
};

export default EachTask;

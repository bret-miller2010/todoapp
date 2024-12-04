export type AddFormProps = {
  closeMenu: () => void;
  display: boolean;
  id: string | undefined;
};

export type Todo = {
  id: "";
  task: "";
  due_date: "";
  complexity: string;
  description: "";
  priority: string;
  completed: false;
};

export type EventHandlerType =
  | React.MouseEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLFormElement>;

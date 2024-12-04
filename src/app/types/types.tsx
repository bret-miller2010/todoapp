export type AddFormProps = {
  closeMenu: () => void;
  display: boolean;
};

export type Todo = {
  id: string;
  task: string;
  due_date: string;
  complexity: number;
  description: string;
  priority: number;
  completed: boolean;
};

export type EventHandlerType =
  | React.MouseEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLFormElement>;

export type AddFormProps = {
  closeMenu: () => void;
  display: boolean;
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
};

export type Todo = {
  id: string;
  task: string;
  month: string;
  day: number;
  complexity: number;
  description: string;
  priority: number;
};

export type EventHandlerType =
  | React.MouseEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>;

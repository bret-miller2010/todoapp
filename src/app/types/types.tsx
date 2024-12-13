export type AddFormProps = {
  closeMenu: () => void;
  display: boolean;
  id: string | undefined;
};

export type Todo = {
  id: string;
  task: string;
  due_date: string;
  complexity: string;
  description: string;
  priority: string;
  checklist: string[];
  completed: false;
  completed_date?: string;
};

export type EventHandlerType =
  | React.MouseEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLFormElement>
  | React.FormEvent<HTMLFormElement>;

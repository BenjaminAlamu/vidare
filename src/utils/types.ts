export type SelectOption = {
  label: string;
  value: string | number;
};

export type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

export type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export type SelectProps = {
  options: SelectOption[];
  labelText: string;
  isInvalid: boolean;
  errorMessage: string;
} & (SingleSelectProps | MultipleSelectProps);

type AddValue = (e: React.ChangeEvent<HTMLInputElement>) => void | null;

export type InputType = {
  name: string;
  placeholder?: string;
  type?: string;
  addValue: AddValue;
  value: string;
  id: string;
  style?: object;
  disabled?: boolean;
  labelText: string;
  register: any;
  isInvalid: boolean;
  errorMessage: string;
};

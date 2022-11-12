export type IdProps = { id: number | undefined };

export type OnSubmitProps = { onSubmit: () => void };

export type FormProps = IdProps & OnSubmitProps;

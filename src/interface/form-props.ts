export type IdProps = { id: number | undefined };

export type OnSubmitProps = { onSubmit: () => void };
export type OnCloseProps = { onClose: () => void };

export type FormProps = IdProps & OnSubmitProps & OnCloseProps;

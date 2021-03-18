import { FieldRenderProps } from 'react-final-form';

type Props = FieldRenderProps<string, any>;

export const TextInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
    return (
        <div className='form-group'>
            <label>{rest.label}</label>
            <input type='text' {...input} {...rest} className='form-control' />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );
};

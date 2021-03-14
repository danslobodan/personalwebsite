import { Component } from 'react';
import {
    Field,
    InjectedFormProps,
    reduxForm,
    WrappedFieldMetaProps,
    WrappedFieldProps,
} from 'redux-form';
import { BlogFields } from '../../models/Blog';

interface BlogFormProps {
    onSubmit: (formValues: BlogFields) => void;
}

interface CustomFieldProps {
    label: string;
    type: string;
}

class BlogForm extends Component<
    InjectedFormProps<BlogFields, BlogFormProps> & BlogFormProps
> {
    renderError = (meta: WrappedFieldMetaProps) => {
        const { touched, error } = meta;
        console.log(touched, error);
        if (touched && error) {
            return (
                <div className='invalid-feedback' style={{ width: '100%' }}>
                    {error}
                </div>
            );
        }
    };

    renderInput = ({
        input,
        type,
        label,
        meta,
    }: WrappedFieldProps & CustomFieldProps) => {
        const className = `input-group ${
            meta.error && meta.touched ? 'error' : ''
        }`;

        return (
            <div className='mb-3'>
                <div className={className}>
                    <label>
                        {label}
                        <input
                            {...input}
                            type={type}
                            className='form-control'
                            autoComplete='off'
                        />
                        {this.renderError(meta)}
                    </label>
                </div>
            </div>
        );
    };

    onSubmit = (formValues: BlogFields): void => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className='needs-validation'
            >
                <Field
                    name='title'
                    component={this.renderInput}
                    label='Enter Title'
                />
                <Field
                    name='description'
                    component={this.renderInput}
                    label='Enter Description'
                />
                <Field
                    name='url'
                    component={this.renderInput}
                    label='Enter URL'
                />
                <Field
                    name='date'
                    component={this.renderInput}
                    label='Enter published date'
                    type='date'
                />
            </form>
        );
    }
}

const validate = (formValues: BlogFields) => {
    const errors: { title?: string; description?: string; link?: string } = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title.';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description.';
    }
    if (!formValues.link) {
        errors.link = 'You must enter a URL.';
    }

    return errors;
};

export default reduxForm<BlogFields, BlogFormProps>({
    form: 'blogForm',
    validate,
})(BlogForm);

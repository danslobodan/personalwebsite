import { Component } from 'react';
import { Field, InjectedFormProps, reduxForm, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import { Blog } from '../../models/Blog';

interface BlogFormProps {
    handleSubmit: () => void
}

interface CustomFieldProps {
    label: string;
}

class BlogForm extends Component<InjectedFormProps<Blog> & BlogFormProps> {

    renderError = (meta: WrappedFieldMetaProps) => {
        const { touched, error } = meta;
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        };
    };

    renderInput = ({ input, label, meta }: WrappedFieldProps & CustomFieldProps) => {

        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    renderDatepicker = ({ input, label }: WrappedFieldProps & CustomFieldProps) => {

        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} type="date" />
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <Field name="url" component={this.renderInput} label="Enter URL" />
                <Field name="date" component={this.renderDatepicker} label="Enter published date" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues : Blog) => {

    const errors: { title? : string; description? : string; url? : string; } = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title.';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description.';
    }
    if (!formValues.url) {
        errors.url = 'You must enter a URL.';
    }

    return errors;
}

export default reduxForm<Blog, BlogFormProps>({
    form: 'blogForm',
    validate
})(BlogForm);
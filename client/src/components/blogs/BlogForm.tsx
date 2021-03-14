import { Component } from 'react';
import { BlogFields } from '../../models/Blog';
import { Form, Field } from 'react-final-form';
import { TextInput, DateInput } from '../form/inputs';

interface BlogFormProps {
    id: string;
    initialValues?: BlogFields;
    onSubmit: (formValues: BlogFields) => void;
}

class BlogForm extends Component<BlogFormProps> {
    onSubmit = (formValues: BlogFields): void => {
        this.props.onSubmit(formValues);
    };

    validate = (formValues: BlogFields) => {
        const errors: {
            title?: string;
            description?: string;
            link?: string;
        } = {};

        if (!formValues.title) {
            errors.title = 'You must enter a title.';
        }
        if (!formValues.description) {
            errors.description = 'You must enter a description.';
        }
        if (!formValues.link) {
            errors.link = 'You must enter a valid URL.';
        }

        return errors;
    };

    render() {
        return (
            <Form
                onSubmit={this.onSubmit}
                validate={this.validate}
                render={({ handleSubmit }) => (
                    <form id='form' onSubmit={handleSubmit}>
                        <Field
                            name='title'
                            label='Title'
                            component={TextInput}
                        />
                        <Field
                            name='description'
                            label='Description'
                            component={TextInput}
                        />
                        <Field name='link' label='Link' component={TextInput} />
                        <Field
                            name='date'
                            label='Published date'
                            component={DateInput}
                        />
                    </form>
                )}
            />
        );
    }
}

export default BlogForm;

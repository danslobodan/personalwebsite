import React from 'react';
import { Field, reduxForm } from 'redux-form';

class BlogForm extends React.Component {

    renderError = meta => {
        const { touched, error } = meta;
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        };
    };

    renderInput = ({ input, label, meta }) => {

        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    renderDatepicker = ({ input, label }) => {

        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} type="date" />
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <Field name="url" component={this.renderInput} label="Enter URL" />
                <Field name="date" component={this.renderDatepicker} label="Enter published date" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {

    const errors = {};

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

export default reduxForm({
    form: 'blogForm',
    validate
})(BlogForm);
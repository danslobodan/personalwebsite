import React from 'react';

interface Props {
    label: string;
    placeholder?: string;
    error: string;
}

const TextInput: React.FC<Props> = ({ label, placeholder, error }) => {
    return (
        <div className='mb-3'>
            <label>
                {label}
                <div className='input-group'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder={placeholder}
                    />
                    <div
                        className='invalid-feedback'
                        style={{ width: '100%;' }}
                    >
                        {error}
                    </div>
                </div>
            </label>
        </div>
    );
};

export default TextInput;

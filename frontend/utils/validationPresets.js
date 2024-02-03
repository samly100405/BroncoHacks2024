export const PASSWORD_VALIDATION = {
    required: {
        value: true,
        message: 'Required',
      },
      minLength: {
        value: 6,
        message: 'Minimum 6 characters long.',
      },
}

export const EMAIL_VALIDATION = {
    required: {
        value: true,
        message: 'Required',
    },
    pattern: {
            value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email.',
    },
}

export const BIO_VALIDATION = {
    required: {
        value: false,
        message: 'Optional',
    },
    maxLength: {
        value: 200,
        message: '200 characters max',
    },
}

export const DESC_VALIDATION = {
    required: {
        value: true,
        message: 'Required',
    },
    maxLength: {
        value: 200,
        message: '200 characters max',
    },
}
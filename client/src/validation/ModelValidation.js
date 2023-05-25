import * as yup from 'yup'

export const ModelValidation = yup.object().shape({
    imageURL:yup.string('image is required'),
    name:yup.string().min(4).required('name is required'),
    desc:yup.string().required('desc reqired'),
    more:yup.string().required('more is required')
})
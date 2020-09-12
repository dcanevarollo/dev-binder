import * as Yup from 'yup';

const schema = Yup.object().shape({
  username: Yup.string().required('Field required'),
  password: Yup.string()
    .min(4, 'At least 4 characters')
    .required('Field required'),
});

export default schema;

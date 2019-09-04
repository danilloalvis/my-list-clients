import React from 'react'
import { Keyboard } from 'react-native'
import { Container, ContainerForms } from './register.styled'
import { Input, DatePicker, Button } from '../../components'
import Validator from '../../utils/validations'
import { withFormik } from 'formik'
import * as Yup from 'yup'

const Register = ({ values, errors, touched, handleSubmit, setFieldValue }) => {
    return (
        <Container>
            <ContainerForms>
                <Input
                    labelText='Nome'
                    value={values.name}
                    onChangeText={text => setFieldValue('name', text)}
                    errorMessage={touched.name && errors.name}
                />
                <Input
                    labelText='CPF'
                    mask='999.999.999-99'
                    value={values.cpf}
                    onChangeText={text => setFieldValue('cpf', text)}
                    errorMessage={touched.cpf && errors.cpf}
                />
                <DatePicker
                    labelText='Data de Nascimento'
                    value={values.birthdate}
                    onDateChange={text => setFieldValue('birthdate', text)}
                    errorMessage={touched.birthdate && errors.birthdate}
                />
            </ContainerForms>
            <Button title='Salvar' onPress={handleSubmit} />
        </Container>
    )
}

export default RegisterScreen = withFormik({
    mapPropsToValues: () => ({
        name: '',
        birthdate: '',
        cpf: ''
    }),

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('Campo obrigatório')
            .min(3, 'Deve ter ao menos 3 caractéres'),
        birthdate: Yup.string()
            .required('Campo obrigatório')
            .test('date-valid', 'Data inválida', value => Validator.testDate(value)),
        cpf: Yup.string()
            .required('Campo obrigatório')
            .test('cpf-valid', 'CPF inválido', value => Validator.testCPF(value))
    }),

    handleSubmit: async (values, { setSubmitting, setErrors, props }) => {
        try {
            Keyboard.dismiss()
        } catch (err) {
            setErrors({ submit: { message: err } })
        } finally {
            setSubmitting(false)
        }
    }
})(Register)

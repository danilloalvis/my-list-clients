import React from 'react'
import { Keyboard, Alert } from 'react-native'
import { Container, ContainerForms } from './register.styled'
import { Input, DatePicker, Button, Loading } from '../../components'
import Validator from '../../utils/validations'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'
import { ClientAPI } from '../../api'

const Register = ({ values, errors, touched, handleSubmit, setFieldValue, navigation, isSubmitting }) => {
    const client = navigation.getParam('client', null)
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
            <Button title={client ? 'Atualizar' : 'Salvar'} onPress={handleSubmit} />
            <Loading show={isSubmitting} />
        </Container>
    )
}

Register.navigationOptions = ({ navigation }) => {
    const client = navigation.getParam('client', null)
    return {
        title: client ? 'Atualizar' : 'Cadastro'
    }
}

export default RegisterScreen = withFormik({
    mapPropsToValues: ({ navigation }) => {
        const client = navigation.getParam('client', null)
        if (client) {
            return { ...client, birthdate: moment(client.birthdate).format('DD/MM/YYYY') }
        }

        return {
            name: '',
            birthdate: '',
            cpf: ''
        }
    },

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

    handleSubmit: async (values, { setSubmitting, setErrors, props, resetForm }) => {
        try {
            Keyboard.dismiss()

            const body = {
                name: values.name,
                birthdate: moment(values.birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                cpf: values.cpf.replace(/[^0-9]+/g, '')
            }

            const client = props.navigation.getParam('client', null)
            if (client) {
                await ClientAPI.update(client.id, body)
                Alert.alert('Sucesso!', 'Cliente Atualizado com sucesso')
            } else {
                Alert.alert('Sucesso!', 'Cadastro realizado com sucesso')
                resetForm()
                await ClientAPI.create(body)
            }
        } catch (err) {
            setErrors({ submit: { message: err } })
            Alert.alert('Erro!', err)
        } finally {
            setSubmitting(false)
        }
    }
})(Register)

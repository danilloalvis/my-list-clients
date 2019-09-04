export default err => {
    let msg = ''
    try {
        if (err.errors) {
            let errors = Object.keys(err.errors)

            errors.forEach(element => {
                msg += `*${element}: ${err.errors[element][0]}\n\n`
            })
        } else if (err.message) {
            msg = err.message
        } else if (err.data) {
            msg = err.data
        } else {
            let errors = Object.keys(err)
            errors.forEach(element => {
                err[element].forEach(e => {
                    msg += `*${element}: ${e}\n\n`
                })
            })
        }
    } catch (err) {
        msg = 'Ocorreu um erro inesperado'
    }

    return msg
}

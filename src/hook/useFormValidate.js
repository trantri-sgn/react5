import React, { useEffect, useState } from 'react'


export default function useFormValidate(initialForm, validate) {
    let v = initialForm



    const [form, setForm] = useState(v)
    const [error, setError] = useState({})

    function inputChange(e) {
        let name = e.target.name,
            value = e.target.value,
            type = e.target.type

        setForm(
            {
                ...form,
                [name]: value,
            }
        )
    }
    console.log(form)

    return {
        form,
        inputChange
    }
}

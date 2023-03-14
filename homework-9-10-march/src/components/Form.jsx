import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { Button, Col, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
}).required();

function Form({item,handleForm}) {
    const { control, handleSubmit,  formState:{ errors }  } = useForm({
        defaultValues: {
            name: item?.name,
            description: item?.description
        },
        resolver: yupResolver(schema)
    });
    return (<>
            <form onSubmit={handleSubmit(handleForm)}>
                <Row style={{ marginTop: 20 }}>
                    <Col span={12}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => <Input placeholder='Name' {...field} />}
                        />
                        <p style={{ color: 'red' }}>{errors.name?.message}</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                    <Col span={12}>
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => <TextArea rows={4} placeholder='Description' {...field} />}
                        />
                        <p style={{ color: 'red' }}>{errors.description?.message}</p>
                    </Col>
                </Row>
                <Button style={{ marginTop: 20 }} type="primary" htmlType="submit">
                    {item ? "Update" : "Submit"}
                </Button>
            </form>
        </>
    )
}

export default Form
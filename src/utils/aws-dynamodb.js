import * as AWS from 'aws-sdk';

const config = {
    region: 'us-east-2',
    secretAccessKey: 'YW6kjr41b4mizrnQmCN9zgdj4YZqxyEUYDPoX//m',
    accessKeyId: 'AKIAW6MLTHRZOTR4HWPO'
}

AWS.config.update(config);

const dynamo = new AWS.DynamoDB.DocumentClient();

const table = 'Reservaciones';

// Proyecto
export const getData = async () => {
    const params = {
        TableName: table
    }

    const data = await dynamo.scan(params).promise();
    console.log(data);
}

// Proyecto (opcional)

export const addData = async (nombreRef, emailRef, telefonoRef, mensajeRef) => {
    console.log(nombreRef, emailRef, telefonoRef, mensajeRef);
    const params = {
        TableName: table,
        Item: {
            id_user: 1,
            nombre: nombreRef,
            email: emailRef,
            telefono: telefonoRef,
            mensaje: mensajeRef
        }
    }

    const data = await dynamo.put(params).promise()
    console.log(data.$response.httpResponse);
}
/*

export const addData = async () => {
    const params = {
        TableName: table,
        Item: {
            id_user: 4,
            user: "Ricardo",
            pass: "123"
        }
    }

    const data = await dynamo.put(params).promise()
    console.log(data.$response.httpResponse);
}

// Proyecto (opcional)
export const updateData = async (nombreRef, emailRef, telefonoRef, mensajeRef) => {
    const params = {
        TableName: table,
        Key: {
            id_user: 0
        },
        UpdateExpression: 'set nombre = :nombre, email = :email, telefono = :telefono, mensaje = :mensaje,',
        ExpressionAttributeValues: {
            ':nombre': nombreRef,
            ':email': emailRef,
            ':telefono': telefonoRef,
            ':mensaje': mensajeRef
        }
    }

    const data = await dynamo.update(params).promise();
    console.log(data.$response.httpResponse);
}
*/
export function handleEnviar(nombreRef, emailRef, telefonoRef, mensajeRef) {
    console.log(nombreRef.current.value);
    console.log(emailRef.current.value);
    console.log(telefonoRef.current.value);
    console.log(mensajeRef.current.value);
};

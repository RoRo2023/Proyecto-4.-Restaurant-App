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
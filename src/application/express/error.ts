
// @ts-ignore
export default function (err:any, req:any, res:any, next:any) {
    let code = err.statusCode || 500;
    res.status(code).send({
        status: "error",
        message: err.message,
        validation: err.listOfErrors
    })
}

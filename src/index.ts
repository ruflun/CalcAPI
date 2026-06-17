import express, { type Application, type Request, type Response } from "express";
import cors from "cors";
const app: Application = express();
const port: number = 3000;

app.use(cors());

app.get("/api/test", (req: Request, res: Response) => {
    let s: string = `Test called on server at ${Date.now()}`;
    console.log(s);
    res.send(s);
});

// Creates a new GET API connection via a single function, so I avoid making clown vomit code
type OperFunc = (a: number, b: number) => number;
function calc_api_listener(operation: string, func: OperFunc): void {
    app.get(`/api/${operation}`, (req: Request, res: Response) => {
        try {
            let num_a: number = parseFloat(req.query.a as string) ?? NaN;
            let num_b: number = parseFloat(req.query.b as string) ?? NaN;
            
            let result = func(num_a, num_b);
            if (Number.isFinite(result)) {
                res.status(200).send(result);
            } else {
                res.status(418).send(NaN);
            }
        } catch (error) {
            res.status(500).send(NaN);
        }
    });
    console.log(`Created GET method at "server:${port}/api/${operation}"`);
}

calc_api_listener("add", (a, b) => { return a + b; });
calc_api_listener("sub", (a, b) => { return a - b; });
calc_api_listener("mul", (a, b) => { return a * b; });
calc_api_listener("div", (a, b) => { return a / b; });
calc_api_listener("pow", (a, b) => { return Math.pow(a, b); });
calc_api_listener("sqrt", (a, b) => { return Math.sqrt(a); });
calc_api_listener("min", (a, b) => { return Math.min(a, b); });
calc_api_listener("max", (a, b) => { return Math.max(a, b); });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
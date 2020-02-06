interface BasicRequest {
    body: Buffer;
    headers: { [header: string]: string | string[] | undefined; };
    secret: Shhh;
}
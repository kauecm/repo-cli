export type Cliente = {
    id: number;
    nome: string;
    tipoCliente:string;
    query:Query[];
}

export type Query ={
    id:number;
    idQuery:number;
    nome:string;
    descricao:string;
    sqgb:string;
    tipoQuery:string;
    urlQuery:string;
}

export type ClientePage ={
    content: Cliente[];
    last:boolean;
    totalPages:number;
    totalElements:number;
    size:number;
    number:number;
    first:boolean;
    numberOfElements:number;
    empty:boolean;
}